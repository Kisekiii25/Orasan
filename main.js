
let moments = require('moment-timezone');
let zone = document.getElementById('zone');
let myZone = moments.tz.guess();

zone.innerHTML = myZone;

let moment2 = require('moment-timezone');
let myZonePick = moment2.tz.names();

let add = document.getElementById('inputGroupSelect01');
add.innerHTML = `<option value="${myZone}" selected >${myZone}</option>` 

    for(let i = 0; i < myZonePick.length; i++){
        add.innerHTML += 
        `
        <option value="${myZonePick[i]}">${myZonePick[i]}</option>
        `
    }
    
add.addEventListener('change', function() {
    myZone = zone.innerHTML = this.value;
});    

setInterval(()=>{
    let moment = require('moment');
    let date = new Date();

    let myDate = moment.tz(date, myZone).format('dddd, Do MMMM, YYYY');
    let myTime = moment.tz(date, myZone).format('h:mm:ss a');

    let time = document.getElementById('time');
    let userDate = document.getElementById('date');

    time.innerHTML = myTime;
    userDate.innerHTML = myDate;
}, 1000);
    