// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListner('load', function(){


    let takeoff = document.getElementById('takeoff');
    let status =document.getElementById('flightStatus');
    let shuttleHeight =document.getElementById('shuttleBackground');
    let background = document.getElementById('spaceShuttleHeight');

    takeoff.addEventListener("click", function(){
        result = window.confirm('Confirm that the shuttle is ready for takeoff.');
        if (result) {
            status.innerHTML = 'Shuttle in flight.'
            background.style.backgroundColor = 'blue';
            shuttleHeight.innerHTML = parseInt(shuttleHeight.innerHTML) + 10000;
        }
    })

    let landing = document.getElementById('landing');

    let missionAbort = document.getElementById('missionAbort');
})