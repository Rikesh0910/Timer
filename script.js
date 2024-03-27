var countDownDate = new Date("Mar 28, 2030 15:37:25");
var stopp = document.getElementById("freeze");
var dec = setInterval(starTimer, 1000);

 function starTimer(){
    var now = new Date().getTime();

    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);


  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  if (distance < 0) {
    clearInterval(dec);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }

};

stopp.addEventListener("click", function(){
    clearInterval(dec);
    alert("the timer has stopped!");
});

