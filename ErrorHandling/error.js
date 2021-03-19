/////////////////////// GLOBAL ERRORS /////////////////////////////////////
// myFunction()
// console.log('Program will break here')


// try{
//     //Produce a Reference Error
//     myFunction();
// }catch(e){
//     console.log(e)  //e is object having error name and error message
//     console.log("NAME: "+e.name)
//     console.log("MESSAGE: "+e.message)
//     console.log(e instanceof ReferenceError)  //Check the type of error //RETURN TRUE
//     console.log(e instanceof TypeError)  //RETRUNS FALSE
// }
// console.log('Program Continues')


// try{
//     myFuntion()
// }catch(e){
//     console.log(e)
// }finally{
//     console.log('Finally Executed')
// }
// console.log('Program will continue even if some error occured')


// Produce a TypeError
// let x;
// try{
//     x.name
// }catch(e){
//     // console.log(e)
//     console.log('IT\'S NULL STUPID!!! ')
// }
// finally{
//     console.log('HEY FOLK, I RAN SUCCESSFULLY')
// }


// Produce a Syntax Error
// try{
//     // console.log(eval('3+4'))
//     console.log(eval('2xx+5'))  //Error

// }catch(e){
//     console.log(e)
// }


// Produce a URIError
// try{
//  decodeURIComponent('%')
// }catch(e){
//     console.log(e)
// }


/////////////////////// USER DEFINED ERRORS /////////////////////////////////////
// const user = {
//     email:'jdoe@gmail.com'
// }

// try{
//     if(!user.name){
//         // Simple error
//         // throw new Error('User has no property name')

//         // Object as an error
//         throw new ReferenceError('User has no property name') //Syntax throw new PredefinedErrorName('User defined Error Message')
//     }
// }catch(e){
//     // console.log(e)
//     console.log(e.name)
//     console.log(e.message)
// }
// console.log('Problem resolved!')



try{
    if(1/0)
        {
            throw new Error('Division by 0 not possible')
        }
}catch(e){
    console.log(e)
}