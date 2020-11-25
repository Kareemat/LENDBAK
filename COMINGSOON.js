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

function submit(){
  document.getElementById("container").children = "none";
  let email= document.getElementById("email")
  var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  if (!filter.test(email.value)){ 
    alert('Please provide a valid email address');
  }
  else{
    document.getElementById('mid').innerHTML = '';
    document.getElementById("signup").style.display = "none";
    var message = document.createElement("h1");                
    message.innerHTML = "We'll keep you informed!";               
    document.getElementById('mid').appendChild(message);
  }
  
function formSubmit(e) {
    e.preventDefault(); // prevent actual form submit
    var form = $("#myForm");
    var url = form.attr('action'); //get submit url [replace url here if desired]
    $.ajax({
         type: "POST",
         url: url,
         data: form.serialize(), // serializes form input
         success: function(data){
             console.log(data);
         }
    });
}
}
