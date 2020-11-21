$(document).ready(function(){
  const countDownDate = new Date("Dec 20, 2020 12:00:00").getTime();
  let x = setInterval(function(){
    let now = new Date().getTime();
    let distance = countDownDate - now;
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000); 
   
    document.getElementById("day-val").innerHTML = days;
    document.getElementById("hour-val").innerHTML = hours;
    document.getElementById("min-val").innerHTML = minutes;
    document.getElementById("sec-val").innerHTML = seconds;

    if(distance<0){
      clearInterval(x);
      document.getElementById("countdown").innerHTML= "EXPIRED"
    }
  },1000)
})

function submit(){
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
 
};
