document.getElementById('add-money-button')
.addEventListener('click', function(event){
      event.preventDefault();
      const addMony = document.getElementById('input-add-money').value;
      const addMonyNumber = parseFloat(addMony);
      console.log(addMonyNumber);
      const pinNumber = document.getElementById('input-pin').value;
      
      
      if(pinNumber === '1234'){
      const balance = document.getElementById('account-balance').innerText;
      const balanceNumber = parseFloat(balance);
      const nweBalance = addMonyNumber + balanceNumber;
      document.getElementById('account-balance').innerText = nweBalance
            
      }
      else{
            alert('Fail to add Money Please hello')
      }
      
      
})