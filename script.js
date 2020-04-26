//Default score is 0
var score = 0;
//Total number of questions
var total = 5;
//Points per correct answer
var point = 20;
//Highest possible score
var highest = total * point

function init() {
    sessionStorage.setItem("answer1", "A");
    sessionStorage.setItem("answer2", "D");
    sessionStorage.setItem("answer3", "C");
    sessionStorage.setItem("answer4", "B");
    sessionStorage.setItem("answer5", "C");
};

$(document).ready(function () {
    // var timeleft = 75;
    // var downloadTimer = setInterval(function () {
    //     if (timeleft <= 0) {
    //         clearInterval(downloadTimer);
    //     }
    //     document.getElementById("timer").value = 75 - timeleft;
    //     timeleft -= 1;
    // }, 1000);

    //     var counter = 0;
    // var interval = setInterval(function() {
    //     counter++;
    //     // Display 'counter' wherever you want to display it.
    //     if (counter == 5) {
    //         // Display a login box
    //         clearInterval(interval);
    //     }
    // }, 1000);

    var remaining = 75;
    $("#timer").text("Time: " + remaining);

    $("#intro").show();
    $("#answers").hide();
    $("#question1").hide();
    $("#question2").hide();
    $("#question3").hide();
    $("#question4").hide();
    $("#question5").hide();
    $("#complete").hide();
    $("#highscores").hide();

    answers1 = function () {

    }

    var answer1A = {
        value: true,
        text: "6"
    };

    var answer1B = {
        value: false,
        text: "4",
    };

    var answer1C = {
        value: false,
        text: "8",
    };

    var answer1D = {
        value: false,
        text: "3",
    };

    $("#A1").click(function () {
        alert("Correct!");
        score += 20;
    });

    $("#B1").click(function () {
        alert("Wrong!");
        remaining -= 10;
    });

    $("#C1").click(function () {
        alert("Wrong!");
        remaining -= 10;
    });

    $("#D1").click(function () {
        alert("Wrong!");
        remaining -+ 10;
    });


    $("#A2").click(function () {
        alert("Wrong!");
        remaining -+ 10;
    });

    $("#B2").click(function () {
        alert("Wrong!");
        remaining -= 10;
    });

    $("#C2").click(function () {
        alert("Wrong!");
        remaining -= 10;
    });

    $("#D2").click(function () {
        alert("Correct!");
        score += 20;
    });


    $("#A3").click(function () {
        alert("Wrong!");
        remaining -+ 10;
    });

    $("#B3").click(function () {
        alert("Wrong!");
        remaining -= 10;
    });

    $("#C3").click(function () {
        alert("Correct!");
        score += 20;
    });

    $("#D3").click(function () {
        alert("Wrong!");
        remaining -+ 10;
    });


    $("#A4").click(function () {
        alert("Wrong!");
        remaining -+ 10;
    });

    $("#B4").click(function () {
        alert("Correct!");
        score += 20;
    });

    $("#C4").click(function () {
        alert("Wrong!");
        remaining -+ 10;
    });

    $("#D4").click(function () {
        alert("Wrong!");
        remaining -+ 10;
    });


    $("#A5").click(function () {
        alert("Wrong!");
        remaining -+ 10;
    });

    $("#B5").click(function () {
        alert("Wrong!");
        remaining -+ 10;
    });

    $("#C5").click(function () {
        alert("Correct!");
        score += 20;
    });

    $("#D5").click(function () {
        alert("Wrong!");
        remaining -+ 10;
    });


    $("#begin").click(function () {
        $("#intro").toggle();
        $("#begin").toggle();
        $("#question1").toggle();
    });

    $(".first-answers").click(function () {
        $("#question1").toggle();
        $("#question2").toggle();
    });

    $(".second-answers").click(function () {
        $("#question2").toggle();
        $("#question3").toggle();
    });

    $(".third-answers").click(function () {
        $("#question3").toggle();
        $("#question4").toggle();
    });

    $(".fourth-answers").click(function () {
        $("#question4").toggle();
        $("#question5").toggle();
    });

    $(".fifth-answers").click(function () {
        $("#question5").toggle();
        $("#complete").toggle();
    });

    $("#submitscore").click(function () {
        $("#complete").toggle();
        $("#highscores").toggle();
    });

    $("#home").click(function () {
        location.reload();
    });

    // var correct = true

    // var totalscore = question1score + question2score + question3score + question4score + question5score

    //if question1 = optionABCD, then question1 = 20. else, 0; but for both they move on to the next question + choices
    // var question1score = 
    // var question2score = 
    // var question3score = 
    // var question4score = 
    // var question5score = 

})

// function check(q) {
//     if(q == "question1") {
//         var chosen = $("button[name=q1]:clicked").val();
//         if(chosen == sessionStorage.answer1) {
//             score +=20;
//             alert("Correct!");
//         }
//     }
// }

// function checkQ1() {
//     if ($("#A1").click) {
//         alert("Correct!");
//     }
// };

// $("#A1").click(function() {
//     alert("Correct!");
// });

// $("#question1").click(function() {
//     if ($(this).val == "A") {
//         alert("Correct!");
//     }
// });

// function check(q) {
//     if(q == $("#question1")) {
//         var chosen = $(this).val();
//         if(chosen == sessionStorage.answer1) {
//             score +=20;
//             alert("Correct!");
//         };
//     };
// };

window.addEventListener("load", init, false);