document.getElementById('cash-out-button')
.addEventListener('click', function(event){
      event.preventDefault();
      const cashOut = document.getElementById('input-cash-out').value;
      const cashOutNumber = parseFloat(cashOut);
      const pinNumber = document.getElementById('input-pin-number').value;
      console.log(pinNumber);
      
      if(pinNumber === '0000'){
         const balance = document.getElementById('account-balance').innerText;
         const balanceNumber = parseFloat(balance);
         const newbalance = balanceNumber - cashOutNumber;
         document.getElementById('account-balance').innerText = newbalance;  
      }
      else{
            alert('Fail to cash out pleasy try again')
      }
      
      
      
})