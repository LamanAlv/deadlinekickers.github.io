var deadlineOfRobotics = new Date("Feb 8, 2021 08:30:00").getTime();
deadline();

var x = setInterval(deadline, 1000);
function deadline(){
  var now = new Date().getTime();


  var remaining = deadlineOfRobotics - now;
    
  var days = Math.floor(remaining / (1000 * 60 * 60 * 24));
  var hours = Math.floor((remaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((remaining % (1000 * 60)) / 1000);
    
  document.getElementById("dayId").innerHTML =  days + "d ";
  document.getElementById("hourId").innerHTML =  hours + "h ";
  document.getElementById("minutesId").innerHTML =  minutes + "m ";
  document.getElementById("secondId").innerHTML =  seconds + "s ";

  if (remaining <= 0) {
  	      swal("Deadline is over!", "You had no other chance to submit", "error");
          document.getElementById("mainclock").style.display="none";
    clearInterval(x);
    document.getElementById("demo").innerHTML = "Deadline is over";
  }
}
