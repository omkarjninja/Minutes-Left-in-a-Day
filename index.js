let value= new Date();
 let currentdate=value.getDate();
 let hour = value.getHours();
 let min=value.getMinutes();
 let hourinmin=(hour*60)+min;
 let minutesleft=1440-hourinmin;
 let secondsleft=value.getSeconds();
let secondsremaining=60-secondsleft;

const startingminutes = minutesleft;

let time = startingminutes * 60;

const countdownele = document.getElementById("countdown");

setInterval(updatecountdown , 1000);

function updatecountdown() {
const minutes = Math.floor(time/60);
let seconds = (time % 60);
seconds = seconds < 10 ? '0' + seconds : seconds;


countdownele.innerHTML = `${minutes} : ${seconds}`;
time--;

}
