let re
re = /hello/     //Regular expression are always written between two forward slash
// console.log(re)
// console.log(re.source)  //remove slashes

// exec() - Returns result in an array or null
let result = re.exec('brad hello world');
console.log(result)  // index define at which index the regular exp is matched

console.log(re.exec('world'))

console.log(re.exec('hellosadsdlksjdkl World'))

console.log(result[0])


// test
result = re.test('Hello') //False, since it does not contains lower case hello
console.log(result)
result = re.test('hello World')  //True, since it contains lower case hello
console.log(result)
result = re.test()

re = /hello/i   //i=  case insenitive
console.log(re.test('Hello'))

re = /hello/i  // g= global search
//match() - Returns array or null
let str = 'hello There'
result = str.match(re)
console.log(result)

// search() - Returns index of the first match, if not found returns -1
str = 'Brad, Hello There';
result = str.search(re)
console.log(result)

// replace() - Return new string with some or all matches of pattern

str = "Hello there, meet me ater the doga party!!"
let newString = str.replace(/me/,'JI')
console.log(newString)
newString = str.replace(/me/g,'JI')
console.log(newString)