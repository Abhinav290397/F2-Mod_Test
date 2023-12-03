const Button = document.querySelector(".btn");
const Mid = document.querySelector(".mid");
let hr = 0;
let min = 0;
let sec = 0; 

let timerId = null;

Button.addEventListener("click",function(){
    if(timerId != null){
        clearInterval(timerId);
    }
    timerId = setInterval(startTimer,1000);
});
function startTimer(){
    sec++;
    console.log(sec);
    if(sec == 60){
        sec = 0;
        min++;
        console.log(min);
        if(min == 60){
            min = 0;
            hr++;
            console.log(hr);
        }
    }
}


let secStr;
if(sec < 10){
    secStr = `0${sec}`;
}
else{
   secStr = sec; 
}

let minStr;
if(min < 10){
    minStr = `0${min}`;
}
else{
   minStr = min; 
}

let hrStr;
if(hr < 10){
    hrStr = `0${hr}`;
}
else{
   hrStr = hr; 
}

Mid.innerHtml = `${minStr} : ${secStr} : ${hrStr}`;