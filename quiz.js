var QuestionArr = [
  {
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "Home Tool Markup Language",
      "Hyperlinks and Text Markup Language",
      "Hyper Tool and Markup Language",
    ],
    Correctopt: "Hyper Text Markup Language",
  },
  {
    question: "Which programming language is known as the language of the web?",
    options: ["Python", "JavaScript", "C++", "Ruby"],
    Correctopt: "JavaScript",
  },
  {
    question: "Which symbol is used for comments in JavaScript?",
    options: ["//", "<!-- -->", "#", "/* */"],
    Correctopt: "//",
  },
  {
    question: "What does CSS stand for?",
    options: [
      "Cascading Style Sheets",
      "Creative Style Sheets",
      "Colorful Style Sheets",
      "Computer Style Sheets",
    ],
    Correctopt: "Cascading Style Sheets",
  },
  {
    question: "Which HTML tag is used to define an unordered list?",
    options: ["<ul>", "<ol>", "<list>", "<li>"],
    Correctopt: "<ul>",
  },
  {
    question: "What is the correct syntax for declaring a JavaScript variable?",
    options: ["var myVar;", "variable = myVar;", "v myVar;", "declare myVar;"],
    Correctopt: "var myVar;",
  },
  {
    question: "What is the default value of the position property in CSS?",
    options: ["static", "relative", "absolute", "fixed"],
    Correctopt: "static",
  },
  {
    question: "Which HTML element is used for the largest heading?",
    options: ["<h1>", "<heading>", "<h6>", "<head>"],
    Correctopt: "<h1>",
  },
  {
    question: "What is the correct file extension for JavaScript files?",
    options: [".js", ".java", ".script", ".jsx"],
    Correctopt: ".js",
  },
  {
    question: "What does the 'alt' attribute in <img> tag do?",
    options: [
      "Defines image size",
      "Provides alternative text for the image",
      "Sets the image position",
      "Links the image to another file",
    ],
    Correctopt: "Provides alternative text for the image",
  },
  {
    question: "Which HTML attribute is used to define inline styles?",
    options: ["class", "style", "id", "css"],
    Correctopt: "style",
  },
  {
    question:
      "Which JavaScript function is used to display data in a dialog box?",
    options: ["alert()", "display()", "message()", "show()"],
    Correctopt: "alert()",
  },
  {
    question: "What is the correct way to link a CSS file to an HTML document?",
    options: [
      "<link rel='stylesheet' href='style.css'>",
      "<style src='style.css'>",
      "<css file='style.css'>",
      "<stylesheet>style.css</stylesheet>",
    ],
    Correctopt: "<link rel='stylesheet' href='style.css'>",
  },
  {
    question:
      "Which operator is used to assign a value to a variable in JavaScript?",
    options: ["=", "==", "===", ":"],
    Correctopt: "=",
  },
  {
    question: "What is the correct HTML element for inserting a line break?",
    options: ["<lb>", "<br>", "<break>", "<line>"],
    Correctopt: "<br>",
  },
  {
    question: "Which tag is used to define a section of navigation links?",
    options: ["<nav>", "<menu>", "<navigation>", "<ul>"],
    Correctopt: "<nav>",
  },
  {
    question: "Which CSS property controls text color?",
    options: ["text-color", "color", "font-color", "style-color"],
    Correctopt: "color",
  },
  {
    question: "What does the <canvas> element in HTML do?",
    options: [
      "Displays video",
      "Creates a graphics container",
      "Displays an image",
      "Defines a frame",
    ],
    Correctopt: "Creates a graphics container",
  },
  {
    question: "What is the purpose of the 'defer' attribute in a script tag?",
    options: [
      "Loads the script asynchronously",
      "Delays script execution until the HTML is parsed",
      "Preloads the script",
      "Executes the script in the background",
    ],
    Correctopt: "Delays script execution until the HTML is parsed",
  },
  {
    question: "Which attribute specifies the URL of an image in an <img> tag?",
    options: ["src", "href", "alt", "url"],
    Correctopt: "src",
  },
  {
    question: "What is the purpose of the <meta> tag in HTML?",
    options: [
      "Defines metadata about the HTML document",
      "Creates a link to a CSS file",
      "Inserts a script",
      "Defines the document's header",
    ],
    Correctopt: "Defines metadata about the HTML document",
  },
  {
    question: "Which method is used to find an element by ID in JavaScript?",
    options: [
      "document.querySelector()",
      "document.getElementById()",
      "document.findElement()",
      "document.getElementByName()",
    ],
    Correctopt: "document.getElementById()",
  },
  {
    question: "Which HTML attribute specifies that an input field is required?",
    options: ["required", "mandatory", "necessary", "obligatory"],
    Correctopt: "required",
  },
  {
    question: "What does 'JSON' stand for?",
    options: [
      "JavaScript Object Notation",
      "Java Source Object Notation",
      "JavaScript Offline Notation",
      "JavaScript Object Namespace",
    ],
    Correctopt: "JavaScript Object Notation",
  },
  {
    question: "Which event is triggered when a form is submitted?",
    options: ["submit", "send", "formSubmit", "save"],
    Correctopt: "submit",
  },
  {
    question: "Which HTML element is used to play audio files?",
    options: ["<audio>", "<sound>", "<music>", "<media>"],
    Correctopt: "<audio>",
  },
  {
    question:
      "What is the correct syntax for writing a function in JavaScript?",
    options: [
      "function myFunction() {}",
      "def myFunction() {}",
      "function = myFunction {}",
      "func myFunction() {}",
    ],
    Correctopt: "function myFunction() {}",
  },
  {
    question: "Which CSS property is used to make the text bold?",
    options: ["font-weight", "bold", "font-style", "text-bold"],
    Correctopt: "font-weight",
  },
  {
    question: "What does the 'console.log()' function do in JavaScript?",
    options: [
      "Logs data to the browser's console",
      "Writes data to the webpage",
      "Creates a log file",
      "Displays an alert box",
    ],
    Correctopt: "Logs data to the browser's console",
  },
  {
    question: "What does the <header> tag represent in HTML?",
    options: [
      "A footer section",
      "An introductory content section",
      "A side navigation bar",
      "A main content block",
    ],
    Correctopt: "An introductory content section",
  },
];
var form = document.getElementById("form");
var main = document.getElementById("main");
var mainCont = document.getElementsByClassName("main-cont")[0];

for (var i = 0; i < QuestionArr.length; i++) {
  var questionsDiv = document.createElement("div");
  questionsDiv.setAttribute("class", "qDivs");
  var questions = document.createElement("label");
  questions.innerText = `Q.${i + 1} : ${QuestionArr[i].question}`;
  questions.setAttribute("name", `question${i + 1}`);
  questionsDiv.appendChild(questions);

  for (var j = 0; j < QuestionArr[i].options.length; j++) {
    var optionsDiv = document.createElement("div");
    optionsDiv.setAttribute("class", "optionsDiv");
    var radioBtns = document.createElement("input");
    radioBtns.setAttribute("type", "radio");
    radioBtns.setAttribute("class", "radio");
    radioBtns.setAttribute("name", `question${i + 1}`);
    radioBtns.setAttribute("id", `${QuestionArr[i].options[j]}`);
    radioBtns.setAttribute("value", `${QuestionArr[i].options[j]}`);

    optionsDiv.appendChild(radioBtns);
    var labels = document.createElement("label");
    labels.innerText = QuestionArr[i].options[j];
    labels.setAttribute("for", `${QuestionArr[i].options[j]}`);
    labels.setAttribute("class", "label");
    optionsDiv.appendChild(labels);
    questionsDiv.appendChild(optionsDiv);
  }
  form.appendChild(questionsDiv);
}

function submission(e) {
  e.preventDefault();
  var score = 0;
  for (let i = 0; i < QuestionArr.length; i++) {
    let elements = document.getElementsByName(`question${i + 1}`);
    for (let j = 0; j < elements.length; j++) {
      if (elements[j].checked) {
        if (elements[j].value === QuestionArr[i].Correctopt) {
          score = score + 3.33333333333;
          console.log(score);
        }
        break;
      }
    }
  }
}

let submitBtn = document.createElement("button");
submitBtn.innerText = "Submit";
submitBtn.setAttribute("type", "Submit");
submitBtn.setAttribute("onclick", "result()");
form.appendChild(submitBtn);

function result() {
  let modal = document.createElement("div");
  modal.setAttribute("class", "modal");
  main.appendChild(modal);
  mainCont.remove();
}
