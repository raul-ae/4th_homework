// Variables declaration for DOM 
var main = document.querySelector(".mainsection");
var startbutton = document.querySelector(".start");
var maintext= document.querySelector(".textsection");
var quizanswers = document.querySelector(".answers");
var mainbutton = document.querySelector(".mainbutton");
var timerEl = document.querySelector(".time");
var correct= document.querySelector(".correct-wrong");
// creating an object with questions and answers
var quiz = [[
"1. What is the fastest land animal?", ["Cheetah","Giraffe","Tiger","Wolf"]],
    ["2. Which of these is the fastest fish?",["Shark","Sailfish","Tuna","Flying Fish"]],["3. What is the fastest bird?",["Stork","Eagle","Peregrine Falcon","Hawk"]],["And your score is:", ["get result","get result","get result","get result"] ]];
// Adding an event listener for the start button to start quiz
var i=10;
var cycles = 0;
var result = 0;

startbutton.addEventListener("click",function(){
    event.preventDefault();
    main.textContent = ""
    mainbutton.innerHTML = "";
    maintext.innerHTML = "";
    timer();
});

function timer(){
    var timerinterval = setInterval(function display(){
        if(cycles>=3){
            clearInterval(timerinterval);
        };
        if(i <= 0) {
            cycles++;
            i=10;
        };
       
    timerEl.textContent = i;
    i--
    correct.textContent = ""
    main.textContent = quiz[cycles][0];
    quizanswers.innerHTML = "";
    for (let j =0; j<quiz[0][1].length;j++){
        var newli = document.createElement("li");
        newli.setAttribute("id",j)
        quizanswers.append(newli)
        var answer = document.createElement("button");
        answer.setAttribute("id",j)
        answer.setAttribute("class","answerbutton")
        answer.textContent = quiz[cycles][1][j];
        newli.appendChild(answer);
        };
        
    }, 1000);
}

quizanswers.addEventListener("click",function(event){
    var element = event.target;
    if (element.matches("button")){
        var answerid = element.getAttribute("id");
    }

    if (cycles==0 && answerid==0 || cycles==1 && answerid==1 || cycles==2 && answerid==2 ){
        correct.textContent = "Correct!!!";
        result++;
        i = 0;
    //} 
    // else if (){
    //     correct.textContent = "Correct!!!";
    //     result=result+1;
    //     i = 0;
    // }
    // else if (cycles==2 && answerid==2){
    //     correct.textContent = "Correct!!!";
    //     result=result+1;
    //     i = 0;
    } else{
        correct.textContent = "Wrong!!!";
        i-=3;
    }    
    console.log(result);
     if(cycles==3){
            timerEl.textContent = "time is off";
            correct.textContent = (result/3)*100;
            //i=1;
    };
});
