document.querySelector('#play').addEventListener('click',()=>watchstart());
const stop = document.querySelector('#stop').addEventListener('click',()=>watchstop());
const reset = document.querySelector('#reset').addEventListener('click',()=>watchReset());
const watch = document.getElementById('watch')

let [seconds,minutes,hours] = [0,0,0]
let timer = null;

const stopwatch = ()=>{
    seconds++;
    if(seconds==60){
        seconds = 0;
        minutes++;
        if(minutes==60){
            minutes=0;
            hours++
        }
    }
    let h = hours < 10 ? `0${hours}`:hours;
    let m = minutes < 10 ? `0${minutes}`:minutes;
    let s = seconds < 10 ? `0${seconds}`:seconds;
    watch.innerHTML = `${h}:${m}:${s}`
}

const watchstart=()=>{
    if(timer!=null){
        clearInterval(timer)
    }
    timer = setInterval(stopwatch,1000)
}
const watchstop=()=>{
    clearInterval(timer)
}
const watchReset=()=>{
    clearInterval(timer);
    [seconds,minutes,hours] = [0,0,0]
    watch.innerHTML = "00:00:00";
}