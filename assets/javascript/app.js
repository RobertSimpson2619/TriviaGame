//yay jeopardy music (loops)

var audio = new Audio("assets/javascript/audio.mp3");

if(typeof audio.loop == 'boolean'){
	audio.loop=true;
}
else{
audio.addEventListener('ended', function(){
	this.currentTime=0;
	this.play
}, false);
}
//audio.play();

// create timer 

var timedNumber = 11;
var intervalId;

function run() {
	intervalId = setInterval(decrement, 1000);
}
function decrement() {
	timedNumber --;
	$("#showNumber").html("<h2> Time Remaining: " + timedNumber + "</h2>");

	if( timedNumber ===0){
		stop();
		console.log("TIME IS UP!");
	}
}
function stop() {
	clearInterval(intervalId);
}


run();

// timer ends



//create questions


var questions = [{
	question: "Which of the following is the largest freshwater lake in the world?",
	choices: ["Lake Superior","Lake Michigan", "Lake Victoria","Caspian Sea"],
	correctAnswer: "Lake Superior"
}];

var questionCounter = 0;




function createQuestion(){
	var loggedQuestion = questions[questionCounter].question;
	var correctAnswer = questions[questionCounter].correctAnswer;
	$("#showQ").empty().append("<h2> TEST"+ loggedQuestion +"</h2>");
	console.log(loggedQuestion);



	for(var i =0; i< questions[questionCounter].choices.length; i++){
		var loggedAnswers = questions[questionCounter].choices[i];
		console.log(loggedAnswers);
		$("#showA").prepend("<div>" + loggedAnswers + "</div>");



		// if the html element of the clicked div = correct answer 
		// question counter ++
		// show correct answer screen + wait a few seconds
		// create new question

		// if the html element of the clicked div != correct answer
		//quesion counter ++
		// show wrong answer screen + wait a few seconds
		//create new question

		// if time = 0 
		// question counter ++
		// show out of time screen + wait a few seconds
		// create new question
	}
}


createQuestion();