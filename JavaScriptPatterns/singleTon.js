// SingleTon Pattern
const singleTon = (function(){
    let instance;
    function createInstance(){
        const object = new Object({name:'Brad'})
        return object
    }
    return {
        getInstance:function(){
            if(!instance){
                instance = createInstance();
            }
            return instance;
        }
    }
})()


const instanceA = singleTon.getInstance()
const instanceB = singleTon.getInstance()
console.log(instanceA)
console.log(instanceB)
console.log(instanceA===instanceB)