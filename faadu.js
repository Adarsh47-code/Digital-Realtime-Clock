function updateClock(){
    const now = new Date();

    let hours = String(now.getHours()).padStart(2, '0');
    let mins = String(now.getMinutes()).padStart(2, '0');
    let secs = String(now.getSeconds()).padStart(2, '0');

    document.getElementById("clock").textContent = `${hours}:${mins}:${secs}`;

}

setInterval(updateClock, 1000);
updateClock();
