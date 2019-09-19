// $(document).keypress(function(e) {
//   if(e.which == 13) {
//     console.log('hi')
//   }
// });
$(function() {
  var count = 0; // to count the shown question

  function makePlayers(name) {
    var name = name;
    var result = 0;

    return {
      increaseResult: function() {
        result += 1;
      },
      showResult: function() {
        return result;
      },
      displayName: function() {
        return name;
      }
    };
  }

  var questions = [
    {
      question: "JavaScript is ______ language.",
      options: ["Scripting", "Programming", "Both a and b", "Application"],
      answer: "a"
    },
    {
      question: "JavaScript is ______ Side scripting language..",
      options: ["Server", "Client", "ISP", "Browser"],
      answer: "d"
    },
    {
      question:
        " ______ tag is an extension to HTML that can enclose any number of JavaScript statements.",
      options: ["SCRIPT", " BODY", "HEAD", "TITLE"],
      answer: "A"
    },
    {
      question:
        "The _______ method of an Array object adds and/or removes elements from an array.",
      options: ["Reverse", "Shift", "Slice", "Splice"],
      answer: "D"
    },
    {
      question:
        "Which of the following is not a valid JavaScript variable name?",
      options: ["2names", "_first_and_last_names", "FirstAndLast", "None"],
      answer: "A"
    },
    {
      question:
        "Which of the following function of String object creates a string to be displayed as bold as if it were in a <b> tag?",
      options: ["anchor()", "big()", "blink()", "bold()"],
      answer: "d"
    },
    {
      question:
        "Which of the following function of Array object returns true if every element in this array satisfies the provided testing function?",
      options: ["concat()", "every()", "push()", "some()"],
      answer: "b"
    },
    {
      question:
        "Which of the following function of Array object adds one or more elements to the front of an array and returns the new length of the array?",
      options: ["unshift()", "sort()", "splice()", "toString()"],
      answer: "A"
    },
    {
      question: "HTML stands for?",
      options: [
        "Hyper Text Markup Language",
        "High Text Markup Language",
        "Hyper Tabular Markup Language",
        "None of these"
      ],
      answer: "a"
    },
    {
      question: "Web pages starts with which ofthe following tag?",
      options: ["Body", "Title", "HTML", "Form"],
      answer: "c"
    },
    {
      question: "Choose the correct HTML tag for the largest heading.",
      options: ["H1", "Heading", "Head", "H6"],
      answer: "a"
    },
    {
      question: "What does CSS stand for?",
      options: [
        "Creative Style Sheets",
        "Colorful Style Sheets",
        "Cascading Style Sheets",
        "Computer Style Sheets"
      ],
      answer: "c"
    },
    {
      question: "Which HTML attribute is used to define inline styles?",
      options: ["font", "class", "styles", "style"],
      answer: "d"
    },
    {
      question: "Which CSS property controls the text size?",
      options: ["font-size", "font-style", "text-style", "Application"],
      answer: "a"
    },
    {
      question:
        "If we want define style for an unique element, then which css selector will we use ?",
      options: ["Id", "text", "class", "name"],
      answer: "a"
    },
    {
      question:
        "If we want to use a nice looking green dotted border around an image, which css property will we use?",
      options: [
        "border-color",
        "border-decoration",
        "border-style",
        "border-line"
      ],
      answer: "c"
    },
    {
      question: "The default value of 'position' attribute is _________.",
      options: ["fixed", "absolute", "inherit", "relative"],
      answer: "d"
    }
  ];

  $("#questionPage").hide();
  $("#resultPage").hide();

  $("#btnStart").click(function() {
    if ($(".player1").val() === "" || $(".player2").val() === "") {
      alert("Please fill the players names");
    } else {
      var player1 = makePlayers($(".player1").val());
      var player2 = makePlayers($(".player2").val());

      $("#player1Name").text(player1.displayName());
      $("#player2Name").text(player2.displayName());
      $("#startPage").hide();
      $("#questionPage").show();

      showQuestion();

      var timerId = setInterval(function() {
        player2.increaseResult();
        console.log(player1.showResult());
        if (count >= 5) {
          clearInterval(timerId);
          $("#questionPage").hide();
          if (player1.showResult() > player2.showResult()) {
            console.log("hi");
            $("#player1Name").addClass("winner");
            $("#player1Result").addClass("winner");

            $("#player2Name").addClass("looser");
            $("#player2Result").addClass("looser");
          }

          if (player2.showResult() > player1.showResult()) {
            $("#player2Name").addClass("winner");
            $("#player2Result").addClass("winner");

            $("#player1Name").addClass("looser");
            $("#player1Result").addClass("looser");
          }
          $("#player1Result").text(player1.showResult());
          $("#player2Result").text(player2.showResult());

          $("#resultPage").show();
        }
        var randomNumber = getRandom();
        $("#question h4").text(questions[randomNumber].question);
        questions[randomNumber].options.forEach((element, i) => {
          $(`#answer${i + 1}`).html(i + 1 + "- " + element);
        });

        questions.splice(randomNumber, 1);
        count++;
        // console.log(count);
      }, 1000);
    }
  });

  function getRandom() {
    return Math.floor(Math.random() * Math.floor(questions.length - 1));
  }

  function showQuestion() {
    var randomNumber = getRandom();
    $("#question h4").text(questions[randomNumber].question);
    questions[randomNumber].options.forEach((element, i) => {
      $(`#answer${i + 1}`).html(i + 1 + "- " + element);
    });

    questions.splice(randomNumber, 1);
    count++;
    console.log(count);
  }
});
