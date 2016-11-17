$(document).ready(function(){
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    // $('.modal').modal();
    // $('#questionModal').modal('open');


});

var questionLibrary = {
    html: {
        $200:{
            question: "How do you make a comment in HTML?",
            possibleAns: [
                "<!-- -->",
                "//",
                "/*  */"],
            correctAns: "<!-- -->"
        },
        $400:{
            question: "What Does HTML stand for?",
            possibleAns: [
                "Hyper Text Markup Language",
                "Home Tool Markup Language",
                "Hyperlinks and Text Markup Language"
            ],
            correctAns: "Hyper Text Markup Language"
        },
        $600:{
            question: "Who is making the Web standards?",
            possibleAns: [
                "Mozilla",
                "Google",
                "The World Wide Web Consortium"
            ],
            correctAns: "The World Wide Web Consortium"
        },
        $800:{
            question: "What is the correct HTML element for inserting a line break?",
            possibleAns: [
                "<break>",
                "<br>",
                "<lb>"
            ],
            correctAns: "<br>"
        },
        $1000:{
            question: "What is the correct HTML for creating a hyperlink?",
            possibleAns: [
                "<a href=\"http://www.generalassemb.ly\"></a>",
                "<a url=\"http://www.generalassemb.ly\"></a>",
                "<a name=\"http://www.generalassemb.ly\"></a>"
            ],
            correctAns: "<a href=\"http://www.generalassemb.ly\"></a>"
        },
    },
    css: {
        $200:{
            question: "What does CSS stand for?",
            possibleAns: [
                "Creative Style Sheets",
                "Computer Style Sheets",
                "Cascading Style Sheets"],
            correctAns: "Cascading Style Sheets"
        },
        $400:{
            question: "What is the correct HTML for referring to an external style sheet?",
            possibleAns: [
                "<stylesheet>mystyle.css</stylesheet>",
                "<link rel=\"stylesheet\" type=\"text/css\" href=\"mystyle.css\">",
                "<style src=\"mystyle.css\">"
            ],
            correctAns: "<link rel=\"stylesheet\" type=\"text/css\" href=\"mystyle.css\">"
        },
        $600:{
            question: "Where in an HTML document is the correct place to refer to an external style sheet?",
            possibleAns: [
                "At the end of the document",
                "In the <head> section",
                "In the <body> section"
            ],
            correctAns: "In the <head> section"
        },
        $800:{
            question: "Which HTML tag is used to define an internal style sheet?",
            possibleAns: [
                "<script>",
                "<css>",
                "<style>"
            ],
            correctAns: "<style>"
        },
        $1000:{
            question: "Which is the correct CSS syntax?",
            possibleAns: [
                "body {color: black;}",
                "body:color=black;",
                "{body:color=black;}"
            ],
            correctAns: "body {color: black;}"
        },
    }
};


let game = {

    currentPlayer: "Player 1",

    togglePlayer :  function() {
        this.currentPlayer = this.currentPlayer === 'Player 1' ? 'Player 2' : 'Player 1';
    },

};


// function loadModal(modalID){
//   $(modalID).modal('open');
//
//
// };
