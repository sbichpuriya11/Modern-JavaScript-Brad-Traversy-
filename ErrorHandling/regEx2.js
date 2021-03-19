let re;

// Literal Character
re = /hello/
re = /hello/i

// Metacharacter Symbols
re = /^h/i       //Must start with 'h'
re = /d$/        //Must ends with h  (str contains worl'd' at last)
re = /world$/    //Must ends with world (in this case fworld, will not gonna work)
re = /^hello$/i  //must start with hello and ends with hello
re = /h.llo$/i   //matched any ONE character in place of '.'
re = /h*llo$/i   //matches any character 0 or more times
re = /gre?a?y/i   //optional character either e or a
re = /gre?a?y?/  //Escape character         


// String to match
const str = 'grey?' 
const result = re.exec(str);

// log result
console.log(result)
function reTest(re,str){
    if(re.test(str))
        console.log(`${str} matched ${re.source}`)
    else{
        console.log(`${str} does not matched ${re.source}`)
    }
}

reTest(re,str)