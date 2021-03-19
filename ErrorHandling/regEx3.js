// Brackets[] - Character Sets
let re
let str
let result

function regTst(re,str){
    if(re.test(str))
        console.log(`${str} matched with ${re.source}`)
    else{
        console.log('Can\'t match')
    }
}

re = /gr[ae]y/i    //Must be an 'a' or 'e'
str = 'Gray'
result  = re.exec(str)
console.log(result)
regTst(re,str)

re = /gr[ae]y/i    //Must be an 'a' or 'e'
str = 'Grey'
result  = re.exec(str)
console.log(result)
regTst(re,str)

re = /gr[ae]y/i    //Must be an 'a' or 'e'
str = 'Greay'
result  = re.exec(str)
console.log(result)
regTst(re,str)

re = /gr[ae]y/i    //Must be an 'a' or 'e'
str = 'Grwy'
result  = re.exec(str)
console.log(result)
regTst(re,str)

re = /gr[ae]y/i    //Must be an 'a' or 'e'
str = 'Gry'
result  = re.exec(str)
console.log(result)
regTst(re,str)


re = /[GF]ray/   //Must be 'G' or 'F'
str = 'Gray'
result = re.exec(str)
console.log(result)
regTst(re,str)

re = /[GF]ray/   //Must be 'G' or 'F'
str = 'Fray'
result = re.exec(str)
console.log(result)
regTst(re,str)

re = /[GF]ray/   //Must be 'G' or 'F'
str = 'GGray'
result = re.exec(str)
console.log(result)
regTst(re,str)

re = /[GF]ray/
str = 'FGFray'
result = re.exec(str)
console.log( result)
regTst(re,str)

re = /[GF]ray/
str = 'gray'
result = re.exec(str)
console.log(result)
regTst(re,str)

re =/[^GF]ray/i  //Match everything execpt 'G' or 'F'
str = 'Gray'
result = re.exec(str)
console.log(result)
regTst(re,str)

re =/[^GF]ray/i  
str = 'Fray'
result = re.exec(str)
console.log(result)
regTst(re,str)

re =/[^GF]ray/i  
str = 'gsadray'
result = re.exec(str)
console.log(result)
regTst(re,str)

re =/[^GF]ray/i  
str = 'gfgasray'
result = re.exec(str)
console.log(result)
regTst(re,str)


re =/^[GF]ray/i  //Must start with 'G' or 'F'
str = 'Gray'
result = re.exec(str)
console.log(result)
regTst(re,str)

re =/^[GF]ray/i  //Must start with 'G' or 'F'
str = 'Fray'
result = re.exec(str)
console.log(result)
regTst(re,str)

re =/^[GF]ray/i  //Must start with 'G' or 'F'
str = 'GGray'
result = re.exec(str)
console.log(result)
regTst(re,str)


re =/[GF]r[ay]$/i  //Must ends with 'Y' or 'A'
str = 'GFra'
result = re.exec(str)
console.log(result)
regTst(re,str)


re =/[A-Z]ray/  //Match any uppercase letter
str = 'Gray'    // the whole part leaving 'ray' must be an uppercase
result = re.exec(str)
console.log(result)
regTst(re,str)

re =/[A-Z]ray/  //Match any uppercase letter
str = 'Fray'
result = re.exec(str)
console.log(result)
regTst(re,str)

re =/[A-Z]ray/  //Match any uppercase letter
str = 'Xray'    
result = re.exec(str)
console.log(result)
regTst(re,str)


re =/[a-z]ray/  //Match any lowercase letter
str = 'sray'
result = re.exec(str)
console.log(result)
regTst(re,str)

re =/[a-z]ray/  //Match any lowercase letter
str = 'stingray'
result = re.exec(str)
console.log(result)
regTst(re,str)

re =/[a-z]ray/  //Match any lowercase letter
str = 'sDingray'
result = re.exec(str)
console.log(result)
regTst(re,str)

re =/[a-z]ray/  //Match any lowercase letter
str = 'Sxray'
result = re.exec(str)
console.log(result)
regTst(re,str)


re =/[A-Za-z]ray/  //Match any case letter
str = 'asdsSSsadray'
result = re.exec(str)
console.log(result)
regTst(re,str)

re =/[A-Za-z]ray/  //Match any case letter
str = 'Xray'
result = re.exec(str)
console.log(result)
regTst(re,str)

re =/[A-Za-z]ray/  //Match any case letter
str = 'Furay'
result = re.exec(str)
console.log(result)
regTst(re,str)


re =/[0-9]ray/  //Match any digit
str = '3ray'
result = re.exec(str)
console.log(result)
regTst(re,str)


re =/[0-3]ray/  //Match any digit
str = '69ray'    // will look from the very last number
result = re.exec(str)
console.log(result)
regTst(re,str)

re =/[0-9]ray/  //Match any digit
str = 'C2ray'
result = re.exec(str)
console.log(result)
regTst(re,str)

re =/[0-9]ray/  //Match any digit
str = 'Cray'
result = re.exec(str)
console.log(result)
regTst(re,str)


re =/[0-9][0-2]ray/  //Match any digit  ([0-9][0-2]=> for [0-9] range will be upto 90's and for [0-2] range will be upto 2) hence
str = '92ray'
result = re.exec(str)
console.log(result)
regTst(re,str)


