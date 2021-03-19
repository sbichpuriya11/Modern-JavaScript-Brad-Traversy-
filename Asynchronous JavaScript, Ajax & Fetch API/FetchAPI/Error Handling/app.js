const convertToRs = (dollar)=>{
    if(typeof dollar==='number')
        return dollar*72.33
    else    
        throw new Error('Amount needs to be of type int') 
}


try {
    let myValue = convertToRs(10);
    myValue = convertToRs('Five')
    console.log(myValue)    
} catch (error) {
    console.log(error)
}

console.log('I will not run if program freeze')