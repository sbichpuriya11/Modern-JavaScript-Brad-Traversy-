const name = 'John';
const age = 40;
const job = 'Programmer';
const city = 'Miami';
let html;



//Without template literal
html = '<ul><li>Name:' + name + '</li><li>Age:' + age + '</li><li>Job:' + job + '</li><li>City:' + city + '</li></ul>';

html = '<ul>' +
    '<li>Name: ' + name + '</li>' +
    '<li>City: ' + city + '</li>' +
    '<li>Age: ' + age + '</li>' +
    '<li>Job: ' + job + '</li>' +
    '</ul>';

//with template literal

function hello() {
    return 'Hello';
}


html =
    `<ul style="list-style:none;font-family:'source code pro light';line-height:40px; ">
        <li>Name: ${name}</li>
        <li>City: ${city}</li>
        <li>Job: ${job}</li>
        <li>Age: ${age}</li>
        <li>${2 + 2}</li>
        <li>${hello()}</li>
        <li>${age>30 ? 'over 30': 'Less than 30'}</li>
    </ul>`
document.body.innerHTML = html;