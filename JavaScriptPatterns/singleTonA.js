const singleTon = (function(){
    var instance;
    const createInstance = function(){
        var object = new Object('I am the instance')
        return object;
    }

    return{
        getInstance:function(){
            if(!instance)
                {
                    instance = createInstance()
                }
            return instance;
        }
    }
})()


var instance1 = singleTon
console.log(instance1.getInstance())
var instance2 = singleTon
console.log(instance2.getInstance())

console.log(instance1===instance2)

