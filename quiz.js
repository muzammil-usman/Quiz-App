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
    question: "Which HTML tag is used to create a paragraph?",
    options: ["<h1>", "<div>", "<span>", "<p>"],
    Correctopt: "<p>",
  },
  {
    question: "What is the correct HTML tag for inserting a line break?",
    options: ["<break>", "<br>", "Jupiter", "<hr>"],
    Correctopt: "<br>",
  },
  {
    question:
      "Which attribute specifies a unique identifier for an HTML element?",
    options: ["class", "style", "id", "href"],
    Correctopt: "id",
  },
  {
    question: "What is the correct syntax for creating a hyperlink?",
    options: [
      "<a href= 'url' >Link</a>",
      "<link src= 'url' >Link</link>",
      "<hyperlink>Link</hyperlink>",
      "<url>Link</url>",
    ],
    Correctopt: "<a href= 'url' >Link</a>",
  },
  {
    question: "Which tag is used to define a table in HTML?",
    options: ["<tbl>", "<table>", "<td>", "<tr>"],
    Correctopt: "<table>",
  },
  {
    question: "How do you create an unordered list in HTML?",
    options: ["<ol>", "<list>", "<u>", "<ul>"],
    Correctopt: "<ul>",
  },
  {
    question: "What is the correct HTML for adding a background color?",
    options: [
      "<body style= 'background-color:blue;'>",
      "<body bg='blue'>",
      "<background>blue</background>",
      "<body style='color:blue;'>",
    ],
    Correctopt: "<body style= 'background-color:blue;'>",
  },
  {
    question: "How do you specify a title for a web page?",
    options: ["<meta>", "<head>", "<title>", "<name>"],
    Correctopt: "<title>",
  },
  {
    question: "Which tag is used for emphasized text?",
    options: ["<strong>", "<em>", "<i>", "<b>"],
    Correctopt: "<em>",
  },
  {
    question: "Which tag is used to create a form in HTML?",
    options: ["<form>", "<input>", "<textarea>", "<fieldset>"],
    Correctopt: "<form>",
  },
  {
    question: "What is the correct input type for submitting a form?",
    options: [
      "<input type='text'>",
      "<input type='button'>",
      "<input type='reset'>",
      "<input type='submit'>",
    ],
    Correctopt: "<input type='submit'>",
  },
  {
    question: "Which attribute is used to group form elements?",
    options: ["id", "action", "name", "method"],
    Correctopt: "name",
  },
  {
    question: "What is the correct HTML for making a checkbox?",
    options: [
      "<checkbox>",
      "<input type='check'>",
      "<input type='box'>",
      "<input type='checkbox'>",
    ],
    Correctopt: "<input type='checkbox'>",
  },
  {
    question: "How do you create a dropdown list in HTML?",
    options: ["<dropdown>", "<select>", "<list>", "<ul>"],
    Correctopt: "<select>",
  },
  {
    question: "Which HTML tag is used to define an image?",
    options: ["<picture>", "<image>", "<src>", "<img>"],
    Correctopt: "<img>",
  },
  {
    question: "What is the correct HTML for adding a video?",
    options: ["<movie>", "<media>", "<video controls>", "<vid>"],
    Correctopt: "<video controls>",
  },
  {
    question: "Which attribute is required in the <img> tag?",
    options: ["alt", "src", "width", "height"],
    Correctopt: "src",
  },
  {
    question: "How do you define an audio file in HTML?",
    options: ["<audio>", "<music>", "<sound>", "<voice>"],
    Correctopt: "<audio>",
  },
  {
    question: "What does the <a> tag define?",
    options: [
      "An anchor point",
      "A hyperlink",
      "A text decoration",
      "A paragraph",
    ],
    Correctopt: "A hyperlink",
  },
  {
    question: "Which HTML5 tag is used to define navigation links?",
    options: ["<nav>", "<menu>", "<navigate>", "<ul>"],
    Correctopt: "<nav>",
  },
  {
    question: "What is the <article> tag used for?",
    options: [
      "To define a navigation section",
      "To define the main header",
      "To define self-contained content",
      "To define a paragraph",
    ],
    Correctopt: " To define self-contained content",
  },
  {
    question: "Which tag is used to define a footer for a document?",
    options: ["<bottom>", "<footer>", "<end>", "<tail>"],
    Correctopt: "<footer>",
  },
  {
    question: "What is the purpose of the <aside> tag?",
    options: [
      "To define the main header",
      "To emphasize text",
      "To define content aside from the main content",
      "To create a sidebar",
    ],
    Correctopt: "To define content aside from the main content",
  },
];
var form = document.getElementById("form");

for (var i = 0; i < QuestionArr.length; i++) {
  var questionsDiv = document.createElement("div");
  questionsDiv.setAttribute("class", "qDivs");
  var questions = document.createElement("p");
  questions.innerText = `Q.${i + 1} : ${QuestionArr[i].question}`;
  questionsDiv.appendChild(questions);

  for (j = 0; j < QuestionArr[i].options.length; j++) {
    var optionsDiv = document.createElement("div");
    optionsDiv.setAttribute("class", "optionsDiv");
    var radioBtns = document.createElement("input");
    radioBtns.setAttribute("type", "radio");
    radioBtns.setAttribute("class", "radio");
    radioBtns.setAttribute("name", `question${i + 1}`);
    radioBtns.setAttribute("id", `${QuestionArr[i].options[j]}`);
    radioBtns.setAttribute("value", `${QuestionArr[i].options[j]}`);
    // console.log(radioBtns);

    optionsDiv.appendChild(radioBtns);
    var labels = document.createElement("label");
    labels.innerText = QuestionArr[i].options[j];
    labels.setAttribute("for", `${QuestionArr[i].options[j]}`);
    optionsDiv.appendChild(labels);
    questionsDiv.appendChild(optionsDiv);
  }
  form.appendChild(questionsDiv);
}

let submitBtn = document.createElement("button");
submitBtn.innerText = "Submit";
submitBtn.setAttribute("type", "Submit");
// console.log(submitBtn);
form.appendChild(submitBtn);
