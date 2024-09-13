// function showTime(){
//     const d = new Date();
//     var houers = d.getHours();
//     var minute = d.getMinutes();
//     var Seconds = d.getSeconds();
//     var p = "AM";
    
//     minute = (minute < 10) ? "0" + minute : minute;
//     Seconds = (Seconds < 10) ? "0" + Seconds : Seconds;
//     p = (houers > 12) ? p = "PM" : p;
//     houers = (houers > 12) ? houers - "12" :houers;
//     houers = (houers == 0) ? houers = "12" :houers;
//     
//     document.getElementById("clock").innerHTML = Time;
//     setTimeout(showTime , 1000);
//     }
//     showTime()
function showTime(){
    const hrs = document.getElementById("hrs");
    const min = document.getElementById("min");
    const sec = document.getElementById("sec");
    const Timing = document.getElementById("Timing");
    const currentTime = new Date();
    var houers = currentTime.getHours();
    var minute = currentTime.getMinutes();
    var Seconds = currentTime.getSeconds();
    var time = 'AM';
    minute = (minute < 10) ? "0" + minute : minute;
    Seconds = (Seconds < 10) ? "0" + Seconds : Seconds;
    time = (houers > 12) ? time = "PM" : time;
    houers = (houers > 12) ? houers - "12" :houers;
    houers = (houers == 0) ? houers = "12" :houers;
    //
    hrs.innerHTML = houers;
    min.innerHTML = minute;
    sec.innerHTML = Seconds;
    Timing.innerHTML = time;
    setTimeout(showTime , 1000);
}
showTime()
