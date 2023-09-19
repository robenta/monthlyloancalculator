const calculate = document.getElementById('calculate')
calculate.addEventListener('click', computeLoan)
function computeLoan(){
    const amount = document.getElementById('amount').value;
    const interest_rate = document.getElementById('interest_rate').value /100;
    const months = document.getElementById('months').value;
    const interest = (amount * (interest_rate)) / months;
    var payment = ((amount / months) + interest).toFixed(2);
    payment = payment.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    document.getElementById('payment').innerHTML = `Monthly Payment = $${payment}`;
}