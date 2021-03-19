class EventObserver{
    constructor(){
        this.observer = []
    }
    subsribe(fn){
        this.observer.push(fn)
        console.log(`You are not subscribed to ${fn.name}`)
    }

    unsubsribe(fn){
        // Filter out from the list whatever matches the callback function.
        // If there is no matchMedia, the callback gets to stay on the list.
        // The filter returns a new list and reassigns the list of observer
        this.observer = this.observer.filter((item)=>{
            if(item!==fn){
                return item
            }else{

            }
        })
        console.log(`You are now unsubscribed from ${fn.name}`)
    }

    fire(){
        this.observer.forEach((item)=>{
            item.call()
        })
    }
}

EventObserver.prototype = {
    
   

    
}

const click = new EventObserver()

// Event listeners
document.querySelector('.sub-ms').addEventListener('click',function(){
    click.subsribe(getCurMilliSeconds);
})

document.querySelector('.unsub-ms').addEventListener('click',function(){
    click.unsubsribe(getCurMilliSeconds)
})

document.querySelector('.sub-s').addEventListener('click',function(){
    click.subsribe(getCurSeconds);
})

document.querySelector('.unsub-s').addEventListener('click',function(){
    click.unsubsribe(getCurSeconds)
})


document.querySelector('.fire').addEventListener('click',function(){
    click.fire()
})




// Create fn for click handler
const getCurMilliSeconds = function(){
    console.log(`Current Milliseconds: ${new Date().getMilliseconds()}`)
}


const getCurSeconds = function(){
    console.log(`Current Seconds: ${new Date().getSeconds()}`)
}
