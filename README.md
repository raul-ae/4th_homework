Homework #4

to store the Quiz questions I declared an array with sub arrays as follows:
    var quiz = [[
    "1. What is the fastest land animal?", ["Cheetah","Giraffe","Tiger","Wolf"]],
        ["2. Which of these is the fastest fish?",["Shark","Sailfish","Tuna","Flying Fish"]],["3. What is the fastest bird?",["Stork","Eagle","Peregrine Falcon","Hawk"]],["And your score is:", ["get result","get result","get result","get result"] ]];

then added an event listener to the start button to start changing the text on de rows defined in the HTML

I tried several times using a For to loop over the questions in the array but was impossible to make the timer work.
So I solved it by making a function set interval to count from 10 to 0 and cycle it the length of the array, so each cylce I print one Index in the array.

I used a For loop only to print the 4 possible ansers for each questios wich are included in a subarray in the same index.
at the same time ofcreating the buttons in the list I added an id equal to i so I can chack later where I'm clicking.

with an event listener on the Ordered List and asking event.target for the Id of the element I was clicking.

then on game logic i just compared according to the cycle i was comparing the click Id vs the right index answer to mark as correct or wrong. incrementing the result in case of correct, or decreaing the timer in case of wrong.

at the end the result is divided by 3 and multiplied by 100 to present the score form 0 to 100.
the final part I had not enough time to complete I troed but could'nt make it work, this topic is still not very clear to me.
