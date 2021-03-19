const firstName = 'Williams';
const lastName = 'Collins';
const age =20;
let val;
const greet = 'Hi there, my name is Tom!! ';
const tags = 'Web Design,Web Development,JavaScript,React,Node';

val = firstName +' '+ lastName;

val ='Brad ';
val += 'Traversy';

val = 'Hello, my name is '+firstName+' & I am '+age;
val ='That\'s awesome, I can\'t wait';

val = firstName.length;

val = firstName.concat(' ',lastName);
 

val = firstName.toUpperCase();
val = firstName.toLowerCase();

val = firstName[0];

val = firstName.indexOf('l');
val = firstName.lastIndexOf('l');


val = firstName.charAt(4);
val = firstName.charAt(firstName.length-1);


val = firstName.substring(0,2);


val = firstName.slice(0,4);
val = firstName.slice(-3);


val = greet.split(' ');
val = tags.split(',');

val = greet.replace('Tom', 'Mike');


val = greet.includes('Dave');

console.log(val);