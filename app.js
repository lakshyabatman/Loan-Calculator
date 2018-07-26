document.getElementById('loan-form').addEventListener('submit',new_function);

function new_function(e) {

  document.getElementById('loading-image').style.display='block';
  console.log('fine till here');
  setTimeout(calculate,1000);
  e.preventDefault();
  }

function calculate()
{
  document.getElementById('loading-image').style.display='none';
  const amount=document.getElementById('amount');
  const interest=document.getElementById('interest');
  const years=document.getElementById('years');
  const monthlyPayment=document.getElementById('monthly-payment');
  const totalPayment=document.getElementById('total');
  const interestAmount=document.getElementById('interest-amount');

  const principal= parseFloat(amount.value);
  const calculatedInterest= parseFloat(interest.value)/100 /12;
  const calculatedPayments= parseFloat(years.value)*12;



  const x=Math.pow(1+ calculatedInterest,calculatedPayments);
  const monthly=(principal*x*calculatedInterest)/(x-1);

  if (isFinite(monthly)) 
  {
    monthlyPayment.value=monthly.toFixed(2);
    totalPayment.value=(monthly*calculatedPayments).toFixed(2);
    interestAmount.value=((monthly*calculatedPayments)-principal).toFixed(2);
  }else{
      errorMessage("Please Fill Details Correctly");
  }

  console.log("Function working ");
  
}


function errorMessage(error)
{
  if(!(document.querySelector('.alert')))
{
  const card=document.querySelector('.card');
  const errorMessage=document.createElement('div');
  errorMessage.className='alert alert-danger';
  errorMessage.appendChild(document.createTextNode(error));

  const heading=document.getElementById('heading');
  card.insertBefore(errorMessage,heading);
  setTimeout(clearError,3000);

}
}
function clearError()
{
  document.querySelector('.alert').remove();
}