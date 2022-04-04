
const startBtn = document.getElementsByClassName("Start")[0]
const resetBtn = document.getElementsByClassName("Reset")[0]
const lapBtn = document.getElementsByClassName("Lap")[0]
const laps =document.getElementsByClassName("laps")[0]
const clearLapBtn = document.getElementsByClassName("clearLap")[0]


var secs = document.getElementsByClassName("secs")[0]
var mins = document.getElementsByClassName("mins")[0]
var hrs = document.getElementsByClassName("hrs")[0]


let sec;
let min;
let hr;
let lapItem=0;

let secCounter =0;
let minCounter=0;
let hrCounter = 0;
let isPlay = false

const toggleBtn=()=>{
  if(!isPlay){  
    startBtn.innerHTML = "Pause"
    hr = setInterval(()=>{
      if(hrCounter ===24){
        hrCounter = 0;
      }
      hrs.innerText = `${++hrCounter}:`
    },60*60*1000)
    min = setInterval(()=>{
      if(minCounter ===60){
        minCounter = 0;
      }
      mins.innerText = `${++minCounter}:`
    },60*1000)
    sec = setInterval(()=>{
      if(secCounter ===60){
        secCounter = 0;
      }
      secs.innerText = `${++secCounter}`
    },1000)
    isPlay=true
  }
  else{
    startBtn.innerText = "Start"
    clearInterval(sec)
    clearInterval(min)
    clearInterval(hr)
    isPlay=false
  }
  resetBtn.classList.remove("hidden")
  lapBtn.classList.remove("hidden")
}

const start = () =>{
  toggleBtn()
}


const reset = ()=>{
  lapBtn.classList.add("hidden")
  resetBtn.classList.add("hidden")
  secs.innerText = "00"
  mins.innerText = "00:"
  hrs.innerText = "00:"
  secCounter = 0;
  minCounter = 0;
  hrCounter= 0;
  lapItem = 0;
  laps.innerHTML = ''
  laps.append(clearLapBtn)
  isPlay = false
 
}

const lap=()=>{
  const li = document.createElement("li")
  const number = document.createElement("span")
  const timeStamp = document.createElement("span")

  li.setAttribute("class","lap-item")
  number.setAttribute("class","number")
  timeStamp.setAttribute("class","timeStamp")
  number.innerHTML = `#${++lapItem}`
  timeStamp.innerHTML = `${hrCounter}:${minCounter}:${secCounter}`
  li.append(number,timeStamp)
  laps.append(li)
  clearLapBtn.classList.remove("hidden")
}

const clearLap=()=>{
  laps.innerHTML = ''
  laps.append(clearLapBtn)
  clearLapBtn.classList.add("hidden")
  lapItem=0
}

startBtn.addEventListener('click',start)
resetBtn.addEventListener('click',reset)
lapBtn.addEventListener('click',lap)
clearLapBtn.addEventListener('click',clearLap)





