$(document).ready(function(){
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal').modal({dismissible: false});  //initializes modal...or something like that

    $(".question-card").click(loadModal);  // adds event handler for question modal
    $(".btnAnswer").click(processAnswer); // adds event handler for answerCorrectness modal

    $("#player1name").blur(storeName);
    $("#player2name").blur(storeName);
});


var questionLibrary = [
    //HTML______________________________________________________________________________
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


    //CSS______________________________________________________________________________
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
    //JS______________________________________________________________________________
    {
        category: "JS",
        question: "Inside which HTML element do we put the JavaScript?",
        possibleAns: [
            "<javascript>",
            "<script>",
            "<scripting>",
                ],
        correctAns: "<script>",
        value: 200,
        hasBeenUsed: false,
    },
    {
        category: "JS",
        question: "What is the correct syntax for referring to an external script called \"xxx.js\"?",
        possibleAns: [
            "<script src=\"xxx.js\">",
            "<script href=\"xxx.js\">",
            "<script name=\"xxx.js\">"
        ],
        correctAns: "<script src=\"xxx.js\">",
        value: 400,
        hasBeenUsed: false,
    },
    {
        category: "JS",
        question: "How do you create a function in JavaScript?",
        possibleAns: [
            "function = myFunction()",
            "function myFunction()",
            "function:myFunction()"
        ],
        correctAns: "function myFunction()",
        value: 600,
        hasBeenUsed: false,
    },
    {
        category: "JS",
        question: "How to insert a comment that has more than one line?",
        possibleAns: [
            "/*This comment has more than one line*/",
            "//This comment has more than one line//",
            "<!--This comment has more than one line-->"
        ],
        correctAns: "/*This comment has more than one line*/",
        value: 800,
        hasBeenUsed: false,
    },
    {
        category: "JS",
        question: "How do you find the number with the highest value of x and y?",
        possibleAns: [
            "Math.max(x, y)",
            "Math.ceil(x, y)",
            "ceil(x, y)"
        ],
        correctAns: "Math.max(x, y)",
        value: 1000,
        hasBeenUsed: false,
    },
    //PUG______________________________________________________________________________
    {
        category: "PUG",
        question: "How do you create a header?",
        possibleAns: [
            "header My Header Text",
            "(header) My Header Text",
            "-header (My Header Text)"
        ],
        correctAns: "header My Header Text",
        value: 200,
        hasBeenUsed: false,
    },
    {
        category: "PUG",
        question: "How do you reference a CSS file?",
        possibleAns: [
            "-stylesheet('/style.css')",
            "link(rel='stylesheet' href='css/app.css')",
            "link(rel='stylesheet' src='css/app.css')"
        ],
        correctAns: "link(rel='stylesheet' href='css/app.css')",
        value: 400,
        hasBeenUsed: false,
    },
    {
        category: "PUG",
        question: "How do you reference a JS file?",
        possibleAns: [
            "-script('/main.js')",
            "script(src='/main.js')",
            "link(script='/main.js')"
        ],
        correctAns: "script(src='/main.js')",
        value: 600,
        hasBeenUsed: false,
    },
    {
        category: "PUG",
        question: "Which is the correct way to add a class to an HTML element?",
        possibleAns: [
            "div+class('my-class')",
            "h2.myClass",
            "(header).myClass"
        ],
        correctAns: "h2.myClass",
        value: 800,
        hasBeenUsed: false,
    },
    {
        category: "PUG",
        question: "What does this expression do? : <code></code>"
        ,
        possibleAns: [
            "div(class='my-class')",
            "h2.myClass",
            "(header).myClass"
        ],
        correctAns: "h2.myClass",
        value: 1000,
        hasBeenUsed: false,
    },
];

let players = {

    player1: {
        score: 0,
        name: "Player 1",
        scoreBoxTag: "#player1score",
        scoreCardTag: "#player1card"
    },
    player2: {
        score: 0,
        name: "Player 2",
        scoreBoxTag: "#player2score",
        scoreCardTag: "#player2card"
    }
}

let game = {

    currentPlayer: players.player1,
    currentQuestion: null,
    currentCard: null,

    isCorrectAnswer: function(chosenAnswer) {
        return chosenAnswer === this.currentQuestion.correctAns;
    },

    togglePlayer: function () {
        this.removeActivePlayerStyle();

        this.currentPlayer = this.currentPlayer === players.player1 ? players.player2 : players.player1;
        this.updatePlayerScoreboxAndStatus();
    },

    updatePlayerScoreboxAndStatus: function() {
        let playerScore = accounting.formatMoney(this.currentPlayer.score,"$",0);
        $(this.currentPlayer.scoreBoxTag).text(playerScore);

        this.addActivePlayerStyle();
    },

    removeActivePlayerStyle: function() {
        $(this.currentPlayer.scoreCardTag).removeClass("activePlayer");
        $(".chip").remove();
    },

    addActivePlayerStyle: function () {
        $(".chip").remove();
        $(this.currentPlayer.scoreCardTag).addClass("activePlayer");
        let currentPlayerChip = '<div class="chip">Current Player</div>';
        $(this.currentPlayer.scoreCardTag).append(currentPlayerChip);
    }

};

function processAnswer(){
    var myAnswerButton = this;
    var myID = "#" + myAnswerButton.id;
    var clickedAnswer = $(myID).text();

    if (game.isCorrectAnswer(clickedAnswer)){
        game.currentPlayer.score += game.currentQuestion.value;
        alertUserOfAnswerValue(game.isCorrectAnswer(clickedAnswer));
    } else {
        game.currentPlayer.score -= game.currentQuestion.value;
        alertUserOfAnswerValue(game.isCorrectAnswer(clickedAnswer));
    }

    game.updatePlayerScoreboxAndStatus();

    game.currentQuestion.hasBeenUsed = true;
    $("#" + game.currentCard).addClass('disabled');

    //decide who goes next...
    if (!game.isCorrectAnswer(clickedAnswer)){
        game.togglePlayer();
    }

    game.currentQuestion = null;
}

function alertUserOfAnswerValue(answerIsCorrect){
    let statusText = "";
    if (answerIsCorrect){
        statusText = "CORRECT! Good Job " + game.currentPlayer.name + "!";
    } else {
        statusText = "Wrong " + game.currentPlayer.name + "! Study Harder...";
    }

    $("#modal1").modal('close');
    $('#modal-player-status').text(statusText);
    $('#modal-player-score').text("Score: " + accounting.formatMoney(game.currentPlayer.score,"$",0));
    $("#modal2").modal('open');

    window.setTimeout(function() {$("#modal2").modal('close');}, 3500);
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
    var cardValue = Number(myCard.id.split('_')[1]);
    var cardCat = myCard.id.split('_')[0];

    game.currentCard = myCard.id;
    game.currentQuestion = getQuestions(cardCat,cardValue);

    if (game.currentQuestion.hasBeenUsed === true) { return;};

    $("#modal-header").text(game.currentQuestion.category + " for $" + game.currentQuestion.value);
    $("#modal-question").html(getQuestions(cardCat,cardValue).question);
    $("#q1").text(getQuestions(game.currentQuestion.category,game.currentQuestion.value).possibleAns[0]);
    $("#q2").text(getQuestions(game.currentQuestion.category,game.currentQuestion.value).possibleAns[1]);
    $("#q3").text(getQuestions(game.currentQuestion.category,game.currentQuestion.value).possibleAns[2]);

    $("#modal1").modal('open');

}

function storeName(){
    let realName = $("#" + this.id).text();

    if (this.id === "player1name"){
        players.player1.name = realName;
    } else if (this.id === "player2name"){
        players.player2.name = realName;
    }
}