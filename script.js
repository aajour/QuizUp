$(function() {
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
    }
  }

  var questions = [{
      question: "JavaScript is ______ language.",
      options: ['Scripting', 'Programming', 'Both a and b', 'Application'],
      answer: "1",
      keyAnswer: [97, 107]
    },
    {
      question: "JavaScript is ______ Side scripting language..",
      options: ['Server', 'Client', 'ISP', 'Browser'],
      answer: "4",
      keyAnswer: [102, 39]
    },
    {
      question: " ______ tag is an extension to HTML that can enclose any number of JavaScript statements.",
      options: ['SCRIPT', ' BODY', 'HEAD', 'TITLE'],
      answer: "1",
      keyAnswer: [97, 107]
    },
    {
      question: "The _______ method of an Array object adds and/or removes elements from an array.",
      options: ['Reverse', 'Shift', 'Slice', 'Splice'],
      answer: "4",
      keyAnswer: [102, 39]
    },
    {
      question: "Which of the following is not a valid JavaScript variable name?",
      options: ['2names', '_first_and_last_names', 'FirstAndLast', 'None'],
      answer: "1",
      keyAnswer: [97, 107]
    },
    {
      question: "Which of the following function of String object creates a string to be displayed as bold as if it were in a <b> tag?",
      options: ['anchor()', 'big()', 'blink()', 'bold()'],
      answer: "4",
      keyAnswer: [102, 39]
    },
    {
      question: "Which of the following function of Array object returns true if every element in this array satisfies the provided testing function?",
      options: ['concat()', 'every()', 'push()', 'some()'],
      answer: "2",
      keyAnswer: [83, 108]
    },
    {
      question: "Which of the following function of Array object adds one or more elements to the front of an array and returns the new length of the array?",
      options: ['unshift()', 'sort()', 'splice()', 'toString()'],
      answer: "1",
      keyAnswer: [97, 107]
    },
    {
      question: "HTML stands for?",
      options: ['Hyper Text Markup Language', 'High Text Markup Language', 'Hyper Tabular Markup Language', 'None of these'],
      answer: "1",
      keyAnswer: [97, 107]
    },
    {
      question: "Web pages starts with which ofthe following tag?",
      options: ['Body', 'Title', 'HTML', 'Form'],
      answer: "3",
      keyAnswer: [100, 59]
    },
    {
      question: "Choose the correct HTML tag for the largest heading.",
      options: ['H1', 'Heading', 'Head', 'H6'],
      answer: "1",
      keyAnswer: [97, 107]
    },
    {
      question: "What does CSS stand for?",
      options: ['Creative Style Sheets', 'Colorful Style Sheets', 'Cascading Style Sheets', 'Computer Style Sheets'],
      answer: "3",
      keyAnswer: [100, 59]
    },
    {
      question: "Which HTML attribute is used to define inline styles?",
      options: ['font', 'class', 'styles', 'style'],
      answer: "4",
      keyAnswer: [102, 39]
    },
    {
      question: "Which CSS property controls the text size?",
      options: ['font-size', 'font-style', 'text-style', 'Application'],
      answer: "1",
      keyAnswer: [97, 107]
    },
    {
      question: "If we want define style for an unique element, then which css selector will we use ?",
      options: ['Id', 'text', 'class', 'name'],
      answer: "1",
      keyAnswer: [97, 107]
    },
    {
      question: "If we want to use a nice looking green dotted border around an image, which css property will we use?",
      options: ['border-color', 'border-decoration', 'border-style', 'border-line'],
      answer: "3",
      keyAnswer: [100, 59]
    },
    {
      question: "The default value of 'position' attribute is _________.",
      options: ['fixed', 'absolute', 'inherit', 'relative'],
      answer: "4",
      keyAnswer: [102, 39]
    },
  ]

  $('#questionPage').hide();
  $('#resultPage').hide();

  $('#btnStart').click(function() {
    if ($('.player1').val() === '' || $('.player2').val() === '') {
      alert('Please fill the players names');

    } else {
      $('#startPage').hide();
      $('#questionPage').show();

      var player1 = makePlayers($('.player1').val());
      var player2 = makePlayers($('.player2').val());

      var questionCount = 0;
      showQuestion();

      function showQuestion() {
        $(document).keypress(function(e) {
          questionCount += 1;
          var code = e.keyCode;
          if (questionCount < 5) {
            chechAnwser(code, questions[randomNumber].keyAnswer);
            makeQues();
          } else {
            $('#questionPage').hide();
            $('#resultPage').show();
          }

        });

        function makeQues() {
          var randomNumber = getRandom();
          $('#question h4').text(questions[randomNumber].question);
          questions[randomNumber].options.forEach((element, i) => {
            $(`#answer${i+1}`).html(i + 1 + '- ' + element);
          });

          questions.splice(randomNumber, 1);
          count++;
        }

        function chechAnwser(keyCode, answer) {
          if (keyCode == answer[0]) {
            player1.increaseResult();
          }
          if (keyCode == answer[1]) {
            player2.increaseResult();
          };
        }
      } // end of show qiestion

      var randomNumber = getRandom();

      $('#question h4').text(questions[randomNumber].question);
      questions[randomNumber].options.forEach((element, i) => {
        $(`#answer${i+1}`).html(i + 1 + '- ' + element);
      });
      questions.splice(randomNumber, 1);
      count++;
    }
  }); // end of click

  function getRandom() {
    return Math.floor(Math.random() * Math.floor(questions.length - 1));
  }
}); // end of ready 