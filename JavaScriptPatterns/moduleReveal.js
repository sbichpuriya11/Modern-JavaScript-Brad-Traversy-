// Basic Structure


// Immediately Invoked Function Expression (IIFE)

// Ex1
(function(){
    console.log('My favourite number is 3')
})();

// Ex2
(favNumber = function(num=3){
    console.log('My favourite number is ',num)
})();

favNumber(4);

var a = 2;

(function(){
    var a = 3
    console.log(a)
})()

console.log(a);

// Syntax
(function(){
    // Declare Private vars and function

    return {
        // Declare public variables & functions
    }
})();


// Standard Module Pattern
const UICtrl = (function(){
    let text = 'Hello World'
    let changeText = function(){
        const element = document.querySelector('p')
        element.textContent = text
    }
    return {
        callChangeText:function(){
            changeText()
            console.log(text)
        }
    }
})

UICtrl().callChangeText()
// UICtrl().changeText()
console.log(UICtrl.text)


// Revealing Module Pattern
const ItemCtrl = (function(){
    let _data = [];
    function add(item){
        _data.push(item)
        console.log('Item added....')
    }
    function get(id){
        return _data.find((item)=>{
            return item.id==id
        });
    }

    return {
        add:add,
        get:get
    }
})();


ItemCtrl.add({id:1,name:'John'});
ItemCtrl.add({id:2,name:'Mark'});