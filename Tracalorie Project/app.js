// Storage Controller
const StorageCtrl = (function(){
    return {
        storeItem:function(item){
            let items
            
            // Cheeck if any items in localstorage
            if(localStorage.getItem('items')===null){
                items =[]
                // Push new items
                items.push(item)

                // set to localstorage
                localStorage.setItem('items',JSON.stringify(items))
            }else{
                // get what is already in localstorage
                items = JSON.parse(localStorage.getItem('items'))


                // Push new item
                items.push(item)

                // Reset localstorage
                localStorage.setItem('items',JSON.stringify(items))
            }

            
        },
    
        getItemsFromStorage:function(){
            let items
            if(localStorage.getItem('items') === null){
                items = []
            }else{
                items = JSON.parse(localStorage.getItem('items'))
            }
            console.log('Storage')
            return items
        },

        updateItemStorage:function(updatedItem){
            let items = JSON.parse(localStorage.getItem('items'))
            items.forEach((item,index)=>{
                if(updatedItem.id===item.id)
                    items.splice(index,1,updatedItem)
            })
            
            localStorage.setItem('items',JSON.stringify(items))
        },

        deleteItemFromStorage:function(id){ 

            let items = JSON.parse(localStorage.getItem('items'))
            items.forEach((item,index)=>{
                if(id===item.id)
                    items.splice(index,1)
            })
            
            localStorage.setItem('items',JSON.stringify(items))

        },

        clearStorage:function(){
            localStorage.clear()
            // localStorage.removeItem('items')
        }   
    }
})()


// Item Controller
const ItemCtrl = (function(){
    
    // Item Constructor
    const Item = function(id,name,calories){
        this.id = id
        this.name = name
        this.calories = calories
    }

    // Data Structures / State
    const data = {
        // items:[
        //     // {id:0,name:'Steak Dinner',calories:1200},
        //     // {id:1,name:'Cookies',calories:500},
        //     // {id:2,name:'Eggs',calories:200},
        // ],
        items:StorageCtrl.getItemsFromStorage(),
        currentItem:null,
        totalCalories:0
    }

    // Whatever we return from a module is public
    return {
        getItems:function(){
            return data.items  
        },

        // Add Items
        addItem:function(name,calories){
            
            
            let ID;
            // Create ID
            if(data.items.length>0){
                ID = data.items[data.items.length-1].id+1
            }else{
                ID = 0
            }   

            // Calories to number
            calories = parseInt(calories)

            // Create new item
            newItem = new Item(ID,name,calories)

            // Adding to items array
            data.items.push(newItem)
            

            return newItem;
        },
        
        getItemById:function(id){
           let found = null

            // Loop through list items
            data.items.forEach((item)=>{
                if(item.id==id)
                    {
                        found = item
                    }
            })
            return found
        },

        updateItem:function(name,calories){
            // calories to number
            calories = parseInt(calories)

            found = null


            data.items.forEach((item)=>{
                if(item.id===data.currentItem.id){
                    item.name = name;
                    item.calories = calories
                    found = item
                }
            })

            return found
        },

        setCurrentItem:function(item){
            data.currentItem = item;
        },

        getCurrentItem:function(){
            return data.currentItem
        },

        getTotalCalories:function(){
            let total=0

            // Loop through items and add cal
            data.items.forEach((item)=>{
                total += item.calories
            })

            // Set total cal in data structure
            data.totalCalories = total
            return data.totalCalories
        },

        deleteItem:function(id){
            // Get ids
            ids = data.items.map((item)=>{
                return item.id
            })

            // Get index
            const index = ids.indexOf(id)

            // Remove item
            data.items.splice(index,1)
            
        },

        clearAllItems:function(){
            data.items = []
        },

        logData:function(){
            return data
        }
    }
})();



// UI Controller
const UICtrl = (function(){
    

    const UISelector = {
        itemList: '#item-list',
        listItems:'#item-list li',
        addBtn : '.add-btn',
        updateBtn: '.update-btn',
        deleteBtn: '.delete-btn',
        backBtn: '.back-btn',
        clearBtn:'.clear-btn',
        itemNameInput: '#item-name',
        itemCaloriesInput: '#item-calories',
        totalCalories: '.total-calories'
        
    }

    // Public Methods
    return{
        populateItemList:function(items){
            let html = ``;
            items.forEach((item)=>{
                html +=`
                    <li id='item-${item.id}' class='collection-item'>
                       <strong> ${item.name}: </strong><em>${item.calories}</em>
                       <a href='#' class='secondary-content'>
                            <i class='edit-item fa fa-pencil'></i>
                       </a>
                    </li>
                `
            })

            // Insert List Items
            document.querySelector(UISelector.itemList).innerHTML = html
        },

        getItemInput:function(){
                return {
                    name:document.querySelector(UISelector.itemNameInput).value,
                    calories:document.querySelector(UISelector.itemCaloriesInput).value
                }
        },

        addListItem:function(item){
            // Show the list
            document.querySelector(UISelector.itemList).style.display = 'block'

            // Create li element
            const li = document.createElement('li')

            // Add class
            li.className = 'collection-item',

            // Add ID
            li.id = `item-${item.id}`;

            // Add HMTL
            li.innerHTML = `
                <strong> ${item.name}: </strong><em>${item.calories}</em>
                <a href='#' class='secondary-content'>
                    <i class='edit-item fa fa-pencil'></i>
                </a>
                `
            
            // Insert item
            document.querySelector(UISelector.itemList).insertAdjacentElement('beforeend',li)

        },

        updateListItem:function(item){
            let listItems = document.querySelectorAll(UISelector.listItems)

            // turn node list into array
            listItems = Array.from(listItems)

            // Loop trough each items node value
            listItems.forEach((listItem)=>{
                const itemId = listItem.getAttribute('id')

                if(itemId === `item-${item.id}`){
                    document.querySelector(`#${itemId}`).innerHTML = `
                    <strong> ${item.name}: </strong><em>${item.calories}</em>
                    <a href='#' class='secondary-content'>
                        <i class='edit-item fa fa-pencil'></i>
                    </a>
                `
                }
            })
        },

        clearInputs:function(){
            document.querySelector(UISelector.itemNameInput).value =''
            document.querySelector(UISelector.itemCaloriesInput).value =''
        },

        addItemToForm:function(){
            document.querySelector(UISelector.itemNameInput).value = ItemCtrl.getCurrentItem().name
            document.querySelector(UISelector.itemCaloriesInput).value = ItemCtrl.getCurrentItem().calories
            UICtrl.showEditState();
        },

        hideList:function(){
            document.querySelector(UISelector.itemList).style.display = 'none'
        },
        
        showTotalCalories:function(totalCalories){
            document.querySelector(UISelector.totalCalories).textContent = totalCalories
        },

        clearEditState:function(){
            UICtrl.clearInputs()
            document.querySelector(UISelector.updateBtn).style.display = 'none'
            document.querySelector(UISelector.deleteBtn).style.display = 'none'
            document.querySelector(UISelector.backBtn).style.display = 'none'
            document.querySelector(UISelector.addBtn).style.display = 'inline'
        },

        showEditState:function(){
            document.querySelector(UISelector.updateBtn).style.display = 'inline'
            document.querySelector(UISelector.deleteBtn).style.display = 'inline'
            document.querySelector(UISelector.backBtn).style.display = 'inline'
            document.querySelector(UISelector.addBtn).style.display = 'none'
        },

        deleteListItem:function(id){
            const itemId = `#item-${id}`
            const item = document.querySelector(itemId)
            item.remove()
        },  

        removeItems:function(){
            let listItems = document.querySelectorAll(UISelector.listItems);

            // Turn node list into array 
            listItems = Array.from(listItems)

            listItems.forEach((item)=>{
                item.remove()
            })
        },
        
        getSelectors:function(){
            return UISelector
        }
    }
})();



// App Controller
const AppCtrl = (function(ItemCtrl,StorageCtrl,UICtrl){

    
    

    // Load event listener
    const loadEventListener = function(){
            const UISelectors = UICtrl.getSelectors();

            // Add item event
            document.querySelector(UISelectors.addBtn).addEventListener('click',itemAddSubmit)

            // Disable submit on enter
            document.addEventListener('keypress',function(e){
                if(e.keycode===12 || e.which===13){
                    e.preventDefault()
                    return false
                }
            })

            // Edit Icon click
            document.querySelector(UISelectors.itemList).addEventListener('click',itemEditClick)

            // Update item event
            document.querySelector(UISelectors.updateBtn).addEventListener('click',itemUpdatesubmit)

            // Back button event
            document.querySelector(UISelectors.backBtn).addEventListener('click',UICtrl.clearEditState)

            // Delete item event
            document.querySelector(UISelectors.deleteBtn).addEventListener('click',itemDeleteSubmit)

            // Clear Button event
            document.querySelector(UISelectors.clearBtn).addEventListener('click',ClearAllItemClick)

    }


    // Add item submit
    const itemAddSubmit  = function(e){
        
        
        // Get form input from UICtrl
        const input = UICtrl.getItemInput()
        

        // Check for name and calories input
        if(input.name!=='' && input.calories!==''){
                

                // Add Items
                const newItem = ItemCtrl.addItem(input.name,input.calories)

                // Add newItem to UI list
                UICtrl.addListItem(newItem)

                // Adding Total Calories
                // 1. Getting total calories
                const totalCalories = ItemCtrl.getTotalCalories()
                
                // 2. Setting total calories to UI
                UICtrl.showTotalCalories(totalCalories)

                // Storage in localStorage
                StorageCtrl.storeItem(newItem)

                // Clear fields
                UICtrl.clearInputs()
            }

        e.preventDefault()
    }

    // Click edit item
    const itemEditClick = function(e){
        
        if(e.target.classList.contains('edit-item')){
            
            
            // Get list item id(item-0,item-1...)
            const listId = e.target.parentNode.parentNode.id
            

            // Break into an array
            const listIdArr = listId.split('-')
            
            
            // get the actual ID
            const id = parseInt(listIdArr[1])

            // Get Item 
            const itemToEdit = ItemCtrl.getItemById(id)
            

            // Set current item
            ItemCtrl.setCurrentItem(itemToEdit)

            // Add item to form
            UICtrl.addItemToForm();
        }
        e.preventDefault()
    }

    // Item update submit
    const itemUpdatesubmit = function(e){
        

        // get item input
        const input = UICtrl.getItemInput();

        // Update item
        const updatedItem = ItemCtrl.updateItem(input.name,input.calories)

        // Update UI
        UICtrl.updateListItem(updatedItem)

        const totalCalories = ItemCtrl.getTotalCalories()
        UICtrl.showTotalCalories(totalCalories)

        StorageCtrl.updateItemStorage(updatedItem)
        UICtrl.clearEditState()

        e.preventDefault()
    }

    const itemDeleteSubmit = function(e){
        

        // Get current item
        const currentItem = ItemCtrl.getCurrentItem()

        // Delete from data structure
        ItemCtrl.deleteItem(currentItem.id)

        // Delete from UI
        UICtrl.deleteListItem(currentItem.id)

        const totalCalories = ItemCtrl.getTotalCalories()
        UICtrl.showTotalCalories(totalCalories)
        
        // Delete from localStorage
        StorageCtrl.deleteItemFromStorage(currentItem.id)
        
        
        UICtrl.clearEditState()

        e.preventDefault()
    }

    // ClearAllItemClick
    const ClearAllItemClick = function(){
        // Delete all items from data structures
        ItemCtrl.clearAllItems()

        const totalCalories = ItemCtrl.getTotalCalories()
        UICtrl.showTotalCalories(totalCalories)
        UICtrl.clearEditState()

        // Removing from UI
        UICtrl.removeItems()

        // Clearing up the localStorage
        StorageCtrl.clearStorage()

        // Hide UL line
        UICtrl.hideList()
        
    }

    // Public Methods
    return {
        init:function(){
            

            // Clear edit state/ set initial state
            UICtrl.clearEditState()

            // Fetch items from data structure
            const items = ItemCtrl.getItems()
            

            // Check if any items
            if(items.length===0){
                UICtrl.hideList();
            }else{
                // Populate list with items
                UICtrl.populateItemList(items)
            }

            
            const totalCalories = ItemCtrl.getTotalCalories()
            UICtrl.showTotalCalories(totalCalories)

            // Load event listeners
            loadEventListener();
        }
    }
})(ItemCtrl,StorageCtrl,UICtrl);


// Initialize App
AppCtrl.init()








