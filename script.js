/* this is js for a analog clock */

function setClock() {
    const hourHand = document.getElementById("hourHand");
    const minuteHand = document.getElementById("minuteHand");
    const secondHand = document.getElementById("secondHand");

    const currentDate = new Date();
    // console.log(currentDate)
    const secondsRatio = currentDate.getSeconds() / 60;
    const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60;
    const hoursRatio = (minutesRatio + currentDate.getHours()) / 12;

    setRotation(secondHand, secondsRatio);
    setRotation(minuteHand, minutesRatio);
    setRotation(hourHand, hoursRatio);
}

function setRotation(element, rotationRatio) {
    element.style.setProperty("--rotation", rotationRatio * 360);
    element.style.transform = `rotate(${rotationRatio * 360 + 90}deg)`;
}

setClock();
setInterval(setClock, 500);
