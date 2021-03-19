const DisplayInfo = function(){
    let name = 'Jeff Bezos',
        age = 57,
        email = 'jbezos@amazon.com',
        company = 'Amazon',
        level = 'Area Manager',
        netWorth = 200,
        displayProfile = function(){
            let p = document.querySelector('p')
            p.innerHTML = `
            <ul>
                <li>Name: ${name}</li>
                <li>Age: ${age}</li>
                <li>Company: ${company}</li>
                <li>Email: ${email}</li>
                <li>Seniority Level: ${level}</li>
                <li>Net Worth: ${netWorth}</li>
            </ul>
            `
        }
        
       return { 
           updateProfile: function(){
            level = 'CEO'
            netWorth = 210,
            displayProfile()
        }
    }
}

DisplayInfo().updateProfile()



// Revealing Module Pattern
const ItemCtrl = function(){
    let _data = []
    add = function(item){
        _data.push(item);
        console.log('Item Added...')
    }
    get = function(company){
        const data  = _data.find((item)=>{
            return item.company === company
        })
        return data
    }
    return{
        add:add,
        get:get
    }
}


const f1 = ItemCtrl()
f1.add({name:'Jeff Bezos',age: 57,email: 'jbezos@amazon.com',company: 'Amazon',level: 'Area Manager',netWorth: 200})
f1.add({name:'Bill Gates',age: 65,email: 'Not Available', company:'Microsoft',level: 'President',netWorth:133})
f1.add({name:'Larry Page & Sergey Brin',age:'Not Available',company:'Alphabet Inc.', level: 'Co-Founder',netWorth:91.2})

console.log(f1.get('Amazon'))
console.log(f1.get('Alphabet Inc.'))
console.log(f1.get('Microsoft'))