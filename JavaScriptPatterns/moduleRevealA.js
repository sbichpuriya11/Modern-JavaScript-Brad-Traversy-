// This function will be accessible via browsers inspector
// Reference Link: https://youtu.be/SKBmJ9P6OAk

// Module reveal pattern is just like data abstraction.


function communication(){

    //Private block starts here which are accessible to function members only
    let greet = 'Hello',
        goodbye = 'So long'
    const getGreet = function(){
        let d = new Date()
        if(d.toLocaleTimeString().includes('AM')){
            greet = 'Good Morning '
        }else{
            greet = 'Hello '
        }
    return greet
    }

    const greeting = function(name){
        console.log(`${getGreet() + name}! Welcome to the course.`)
    }
    //Private block ends here

    // If we want to access any method/vairable outside the function scope just return it.
    return {
        greetUser:greeting
        // greetUser is public name, in case we want to access the greeting outside the function scope.
    }


}


// Setting global variable in script (instead of doing this in inspector we can do it here only)
var Comm  = (function(){
    
    //Private block starts here which are accessible to function members only
    let greet = 'Hello',
        goodbye = 'So long'
    const getGreet = function(){
        let d = new Date()
        if(d.toLocaleTimeString().includes('AM')){
            greet = 'Good Morning '
        }else{
            greet = 'Hello '
        }
    return greet
    }

    const greeting = function(name){
        console.log(`${getGreet() + name}! Welcome to the course.`)
    }
    //Private block ends here

    // If we want to access any method/vairable outside the function scope just return it.
    return {
        greetUser:greeting
        // greetUser is public name, in case we want to access the greeting outside the function scope.
    }
})()


// Module reveal pattern starts here


// Traditional function
const clarkKent = {
    name:'Clark Kent',
    secretIdentity:'Superman',
    introduce:function(){
        return `Hi, my name is ${this.name}`
    },
    issuesReport:function(){
        return `${this.secretIdentity} saves the day!`
    }
}

console.log(clarkKent.introduce())
console.log(clarkKent.issuesReport())

console.log(clarkKent.secretIdentity) // This is the issue, we don't want others to let know about this secret identity.




// Using Reveal modular pattern
const mikeHooper = (function(){
    const name = 'Mike Hooper'
    const secretIdentity= 'Superman'
    const introduction = function(){
        return `Hi, my name is ${name}`
    }
    const issuesReport = function(){
        return `${secretIdentity} saves the day!`
    };

    return {
        introduction,issuesReport,name
    }

})()

console.log(mikeHooper.name)
console.log(mikeHooper.introduction())
console.log(mikeHooper.issuesReport())
console.log(mikeHooper.secretIdentity)

