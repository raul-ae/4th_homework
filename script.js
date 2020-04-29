// Variables declaration for DOM 
var main = document.querySelector(".mainsection");
var startbutton = document.querySelector(".start");
var maintext= document.querySelector(".textsection");
var quizanswers = document.querySelector(".answers");
var mainbutton = document.querySelector(".mainbutton");
var timerEl = document.querySelector(".time");
var correct= document.querySelector(".correct-wrong");
var finalscore = document.querySelector(".final-score");
var savelocal = document.querySelector(".localstorage");
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

//create funtion that will countdown from 10 to 0
function timer(){
    var timerinterval = setInterval(function display(){
        if(cycles>=3){
            clearInterval(timerinterval);
        };
        if(i <= 0) {
            cycles++;
            i=10;
        };
//changing txt attributes to start displaing the questions in the array quiz      
    timerEl.textContent = i;
    i--
    correct.textContent = ""
    main.textContent = quiz[cycles][0];
    quizanswers.innerHTML = "";
//Ansewer options are included in a subarray inside Quiz, to display them a for loop iterates to add the to the list
var newbutton= document.createElement("button");
newbutton.setAttribute("class", "localstorage");
newbutton.textContent = "save-score";    
for (let j =0; j<quiz[0][1].length;j++){
        if(cycles >= 3){
            timerEl.textContent = "time is off";
            correct.textContent = (result/3)*100;
            correct.append(newbutton);
            //adding an event listener to save the initials
                var saveinitials = document.querySelector(".initials");
                var localstorage = document.querySelector(".localstorage");
                var newinput= document.createElement("input");
                newinput.setAttribute("type", "text");
                newinput.setAttribute("name", "yourinitials");
                newinput.setAttribute("id", "yourinitials");
                newinput.setAttribute("placeholder", "Enter your initials");

                localstorage.addEventListener("click", function(){
                    event.preventDefault();
                saveinitials.append(newinput);
                console.log("local");
                });
                //finishing the event listener
            break;
        }

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
    } else{
        correct.textContent = "Wrong!!!";
        i-=3;
    }    
    console.log(result);
});

var scores = [["test",100],["test",50]];
var scorelist = document.querySelector(".scores_list");

function printstore(){

    scorelist.innerHTML = "";
    for (let x=0; x<scores.length; x++){
        var li = document.createElement("li");
        li.textContent = scores[x];
        li.setAttribute("data-index", x);
        scorelist.appendChild(li);
    }
}

function init(){
    
  var storedscores = JSON.parse(localStorage.getItem("scores"));

  if (storedscores !== null) {
    scores = storedscores;
  }

  printstore();
};
function storescore() {
    localStorage.setItem("scores", JSON.stringify(scores));
}
// When form is submitted
var userinitials = document.querySelector("#yourinitials");
userinitials.addEventListener("submit", function(event) {
    // event.preventDefault();
  
    var scoreText = userinitials.value.trim();
  
    // Return from function early if submitted scoreText is blank
    if (scoreText === "") {
      return;
    }

 // Add new scoreText to scores array, clear the input
 scores.push(scoreText);
 userinitials.value = "";

 storescore();
 printstore();
});

