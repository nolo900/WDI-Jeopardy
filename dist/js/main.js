$(document).ready(function(){
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal').modal();  //initializes modal...or something like that

    $(".card").click(loadModal);
    $(".btnAnswer").click(processAnswer);


});


var questionLibrary = [
    {
        category: "HTML",
        question: "How do you make a comment in HTML?",
        possibleAns: [
            "<!-- -->",
            "//",
            "/*  */"],
        correctAns: "<!-- -->",
        value: 200,
        hasBeenUsed: false,
    },
    {
        category: "HTML",
        question: "What Does HTML stand for?",
        possibleAns: [
            "Hyper Text Markup Language",
            "Home Tool Markup Language",
            "Hyperlinks and Text Markup Language"
        ],
        correctAns: "Hyper Text Markup Language",
        value: 400,
        hasBeenUsed: false,
    },
    {
        category: "HTML",
        question: "Who is making the Web standards?",
        possibleAns: [
            "Mozilla",
            "Google",
            "The World Wide Web Consortium"
        ],
        correctAns: "The World Wide Web Consortium",
        value: 600,
        hasBeenUsed: false,
    },
    {
        category: "HTML",
        question: "What is the correct HTML element for inserting a line break?",
        possibleAns: [
            "<break>",
            "<br>",
            "<lb>"
        ],
        correctAns: "<br>",
        value: 800,
        hasBeenUsed: false,
    },

    {
        category: "HTML",
        question: "What is the correct HTML for creating a hyperlink?",
        possibleAns: [
            "<a href=\"http://www.generalassemb.ly\"></a>",
            "<a url=\"http://www.generalassemb.ly\"></a>",
            "<a name=\"http://www.generalassemb.ly\"></a>"
        ],
        correctAns: "<a href=\"http://www.generalassemb.ly\"></a>",
        value: 1000,
        hasBeenUsed: false,
    },

    {
        category: "CSS",
        question: "What does CSS stand for?",
        possibleAns: [
            "Creative Style Sheets",
            "Computer Style Sheets",
            "Cascading Style Sheets"],
        correctAns: "Cascading Style Sheets",
        value: 200,
        hasBeenUsed: false,
    },
    {
        category: "CSS",
        question: "What is the correct HTML for referring to an external style sheet?",
        possibleAns: [
            "<stylesheet>mystyle.css</stylesheet>",
            "<link rel=\"stylesheet\" type=\"text/css\" href=\"mystyle.css\">",
            "<style src=\"mystyle.css\">"
        ],
        correctAns: "<link rel=\"stylesheet\" type=\"text/css\" href=\"mystyle.css\">",
        value: 400,
        hasBeenUsed: false,
    },
    {
        category: "CSS",
        question: "Where in an HTML document is the correct place to refer to an external style sheet?",
        possibleAns: [
            "At the end of the document",
            "In the <head> section",
            "In the <body> section"
        ],
        correctAns: "In the <head> section",
        value: 600,
        hasBeenUsed: false,
    },
    {
        category: "CSS",
        question: "Which HTML tag is used to define an internal style sheet?",
        possibleAns: [
            "<script>",
            "<css>",
            "<style>"
        ],
        correctAns: "<style>",
        value: 800,
        hasBeenUsed: false,
    },
    {
        category: "CSS",
        question: "Which is the correct CSS syntax?",
        possibleAns: [
            "body {color: black;}",
            "body:color=black;",
            "{body:color=black;}"
        ],
        correctAns: "body {color: black;}",
        value: 1000,
        hasBeenUsed: false,
    },

];


let players = {

    player1: {
        score: 0,
        name: "Player 1",
    },
    player2: {
        score: 0,
        name: "Player 2",
    }
}



let game = {

        currentPlayer: players.player1,
        currentQuestion: null,
        currentCard: null,

        togglePlayer: function () {
            this.currentPlayer = this.currentPlayer === players.player1 ? players.player2 : players.player1;
        },

};

function processAnswer(){
    var myAnswerButton = this;
    var myID = "#" + myAnswerButton.id;
    var clickedAnswer = $(myID).text();
    //console.log(clickedAnswer);

    var correctAnswer = game.currentQuestion.correctAns;

    if (clickedAnswer === correctAnswer){
        console.log("Correct!");
        //add score to current player
        game.currentPlayer.score += game.currentQuestion.value;


        //alert user of correct answer
        $("#modal1").modal('close');
        $('#modal-player-status').text("CORRECT! Good Job " + game.currentPlayer.name + "!");
        $('#modal-player-score').text("Score: " + game.currentPlayer.score);
        $("#modal2").modal('open');

    } else {
        $("#modal1").modal('close');
        $('#modal-player-status').text("WRONG " + game.currentPlayer.name + "! Study Harder...");
        $('#modal-player-score').text("Score: " + game.currentPlayer.score);
        $("#modal2").modal('open');

    }

    //close modal after a second
    window.setTimeout(function() {
        $("#modal2").modal('close');
    }, 3500);

    //disable this question in the question library and Change the card's appearance.
    game.currentQuestion.hasBeenUsed = true;
    $("#" + game.currentCard).addClass('disabled');

    game.currentQuestion = null;

}


function getQuestions(category,value){
    let result = "";
    questionLibrary.forEach(function(item){
        if(item.category === category && item.value === value){
            result = item;
        }
    });
    return result;
}


function loadModal(){
    var myCard = this;

    game.currentCard = myCard.id;

    var cardValue = Number(myCard.id.split('_')[1]);
    var cardCat = myCard.id.split('_')[0];

    game.currentQuestion = getQuestions(cardCat,cardValue);


    if (game.currentQuestion.hasBeenUsed === true) { return;};

    $("#modal-header").text(game.currentQuestion.category + " for $" + game.currentQuestion.value);
    $("#modal-question").text(getQuestions(cardCat,cardValue).question);
    $("#q1").text(getQuestions(game.currentQuestion.category,game.currentQuestion.value).possibleAns[0]);
    $("#q2").text(getQuestions(game.currentQuestion.category,game.currentQuestion.value).possibleAns[1]);
    $("#q3").text(getQuestions(game.currentQuestion.category,game.currentQuestion.value).possibleAns[2]);

    // $(modalID).modal('open');
    $("#modal1").modal('open');

};

