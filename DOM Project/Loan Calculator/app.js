// Listen for submit
document.querySelector('#loan-form').addEventListener('submit',function(e){
    
    // hide results
    document.getElementById('result').style.display='none';

    // show loader
    document.getElementById('loading').style.display='block';

    setTimeout(calculateResults,2000)
    e.preventDefault();
})


function calculateResults(){
    // console.log('Submit')

    // UI variables
    const amount = document.getElementById('amount')
    const interest = document.getElementById('interest')
    const year = document.getElementById('year')
    const monthlyPayment = document.getElementById('monthly-payment')
    const totalPayment = document.getElementById('total-payment')
    const totalInterest = document.getElementById('total-interest')

    const principal  = parseFloat(amount.value)
    const calculatedInterest = parseFloat(interest.value)/100/12;
    const calculatedPayments = parseFloat(year.value)*12;

    // compute monthly payment
    const x = Math.pow(1+calculatedInterest,calculatedPayments);
    const monthly = (principal*x*calculatedInterest)/(x-1);


    if(isFinite(monthly)){
        monthlyPayment.value = monthly.toFixed(2);
        totalPayment.value = (monthly*calculatedPayments).toFixed(2);
        totalInterest.value = ((monthly*calculatedPayments)-principal).toFixed(2);
        // show results after 3 secs
        document.getElementById('result').style.display='block';
        // hinding loader after 3 secs
        document.getElementById('loading').style.display='none';


        // optional for clearing the input field
        amount.value=interest.value=year.value=''


    }
    else{
        showError('Runtime error in one or more fields!')
    }

   // console.log(amount,interest,year)

}

// function to show error
function showError(e){
            // show results after 3 secs
            document.getElementById('result').style.display='none';

            // hinding loader after 3 secs
            document.getElementById('loading').style.display='none';
    // create a div
    const errorDiv = document.createElement('div');
    // Add class
    errorDiv.className = 'alert alert-danger';
    // Create Text node and append to div
    errorDiv.appendChild(document.createTextNode(e));

    // get elements
    const card = document.querySelector('.card')
    const heading = document.querySelector('.heading')

    // appending errorDiv above heading
    card.insertBefore(errorDiv,heading)

    // clear error after 3 secs
    setTimeout(()=>{
       document.querySelector('.alert').remove();
    },3000)
}