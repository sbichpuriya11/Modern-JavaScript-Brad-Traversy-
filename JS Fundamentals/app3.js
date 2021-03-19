let val;


val=String(555);
val = String(4+8);
val = String(true);
val = String(new Date());


val = String([1,2,3,4,5]);

val = (5).toString();
val = (true).toString();


val = Number('122');
val = Number(true);
val = Number(null);
val = Number(false);
val = Number('Hello'); //Gives NaN->{Not a Number}
val = Number([1,2,4,5]);

val = parseInt('100.40');
val = parseFloat('100.28232');



// console.log(val);
// console.log(typeof val);
// // console.log(val.length);
// console.log(val.toFixed(2));


const val1 = String(5);
const val2 = 2;
const sum = Number(val1 + val2);

console.log(sum);
console.log(typeof sum); 