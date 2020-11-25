$(document).ready(function(){
  var start = Date.parse('Sat Nov 20 19:20:44 +0000 2020')/1000;
  var end = Date.parse('Sun Dec 20 12:00:00 +0000 2020')/1000;
  var now = new Date().getTime() / 1000; 
 $('.countdown').final_countdown({
        'start': start,
        'end': end,
        'now': now        
    });
});


$(document).on('submit', '#myForm', function(e){
  let email= document.getElementById("email")
  var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  if (!filter.test(email.value)){ 
    alert('Please provide a valid email address');
  }
  else{
    e.preventDefault();
    $.ajax({
      type: 'POST',
      url: 'https://lendbak-api.workcube.com.ng/api/v1/newsletter/subscribe',
      data:{
        email : $('#email').val(),
      },
      success:function(){
        document.getElementById('mid').innerHTML = '';
        document.getElementById("signup").style.display = "none";
        var message = document.createElement("h1");                
        message.innerHTML = "We'll keep you informed!";               
        document.getElementById('mid').appendChild(message);
      },
    });
  }
});
