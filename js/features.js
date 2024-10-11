document.getElementById('show-add-money-button')
.addEventListener('click', function(){
      console.log('show add money click');
      document.getElementById('add-money-form').classList.remove('hidden')
      document.getElementById('cash-out-form').classList.add('hidden')
      
     
})

document.getElementById('show-cashout-button')
.addEventListener('click', function(){
      console.log('show cashout button click');
      document.getElementById('add-money-form').classList.add('hidden')
      document.getElementById('cash-out-form').classList.remove('hidden')
      
      
})
