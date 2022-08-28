const stopBtn = document.querySelector('.stop');
const startBtn = document.querySelector('.start');

function handleStopClick(){
    clearInterval(timeInterval);
}

function setCurrentTime(){
    const information = document.querySelector("#info");
    const currentDate = new Date();
    const hour = currentDate.getHours();
    const minute = currentDate.getMinutes();
    const second = currentDate.getSeconds();
    information.innerHTML = `${hour} : ${minute} : ${second} ${hour < 12 ? "AM" : "PM"}`;
}

function handleStartTimeInterval(){
    setCurrentTime();
    timeInterval = setInterval(setCurrentTime, 1000);
}

setCurrentTime();

let timeInterval = setInterval(setCurrentTime, 1000);
// setInterval chạy lặp lại, 1000 mili second = 1s

stopBtn.addEventListener('click', handleStopClick);
startBtn.addEventListener('click', handleStartTimeInterval);

// forEach, array.find, array.filter
