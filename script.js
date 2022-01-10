
const dayel = document.getElementById('days')
const hourel = document.getElementById('hours');
const minel = document.getElementById('mins');
const secondsel = document.getElementById('seconds');

const newYears = '1 Jan 2023';

function countdown() {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();
    const totalseconds = (newYearsDate - currentDate) / 1000;
    
    const days = Math.floor(totalseconds/3600 / 24);
    const hours = Math.floor(totalseconds/3600) % 24;
     const minutes = Math.floor(totalseconds / 60) % 60;
     const seconds = Math.floor(totalseconds) % 60;
     
     dayel.innerHTML = days;
     hourel.innerHTML = formatTime(hours)
     minel.innerHTML = formatTime(minutes);
     secondsel.innerHTML = formatTime(seconds);

}
function formatTime(time) {
    return time  < 10 ? (`0${time}`) : time;
}
countdown();
setInterval(countdown   , 1000);
// setInterval(countdown , 1000);