const clock = document.querySelector("h2#clock");

function setTime(){
    const date = new Date();
    hours = String(date.getHours()).padStart(2,"0");
    minutes = String(date.getMinutes()).padStart(2,"0");
    seconds = String(date.getSeconds()).padStart(2,"0");
    clock.innerText=`${hours}:${minutes}:${seconds}`;
}
setTime();
setInterval(setTime, 1000);