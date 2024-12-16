var QuestionArr = [
  {
    questions: "Who is the father of economics",
    options: ["Adam Smith", "lionel Messi", "Alfred Marshal"],
    correctOption: "Adam Smith",
  },
  {
    questions: "Who is the father of Computer",
    options: ["cristiano ronaldo", "charles babbage", "elon musk"],
    correctOption: "Charles babbage",
  },
  {
    questions: "Who is the father of Computer",
    options: ["cristiano ronaldo", "charles babbage", "elon musk"],
    correctOption: "Charles babbage",
  },
  {
    questions: "Who is the father of Computer",
    options: ["cristiano ronaldo", "charles babbage", "elon musk"],
    correctOption: "Charles babbage",
  },
  {
    questions: "Who is the father of Computer",
    options: ["cristiano ronaldo", "charles babbage", "elon musk"],
    correctOption: "Charles babbage",
  },
  {
    questions: "Who is the father of Computer",
    options: ["cristiano ronaldo", "charles babbage", "elon musk"],
    correctOption: "Charles babbage",
  },
  {
    questions: "Who is the father of Computer",
    options: ["cristiano ronaldo", "charles babbage", "elon musk"],
    correctOption: "Charles babbage",
  },
  {
    questions: "Who is the father of Computer",
    options: ["cristiano ronaldo", "charles babbage", "elon musk"],
    correctOption: "Charles babbage",
  },
  {
    questions: "Who is the father of Computer",
    options: ["cristiano ronaldo", "charles babbage", "elon musk"],
    correctOption: "Charles babbage",
  },
  {
    questions: "Who is the father of Computer",
    options: ["cristiano ronaldo", "charles babbage", "elon musk"],
    correctOption: "Charles babbage",
  },
  {
    questions: "Who is the father of Computer",
    options: ["cristiano ronaldo", "charles babbage", "elon musk"],
    correctOption: "Charles babbage",
  },
  {
    questions: "Who is the father of Computer",
    options: ["cristiano ronaldo", "charles babbage", "elon musk"],
    correctOption: "Charles babbage",
  },
  {
    questions: "Who is the father of Computer",
    options: ["cristiano ronaldo", "charles babbage", "elon musk"],
    correctOption: "Charles babbage",
  },
  {
    questions: "Who is the father of Computer",
    options: ["cristiano ronaldo", "charles babbage", "elon musk"],
    correctOption: "Charles babbage",
  },
  {
    questions: "Who is the father of Computer",
    options: ["cristiano ronaldo", "charles babbage", "elon musk"],
    correctOption: "Charles babbage",
  },
];
var form = document.getElementById("form");

for (var i = 0; i < QuestionArr.length; i++) {
  var questionsDiv = document.createElement("div");
  questionsDiv.setAttribute("class", "qDivs");
  let questions = document.createElement("p");
  questions.innerText = `Q.${i + 1} : ${QuestionArr[i].questions}`;
  questionsDiv.appendChild(questions);

  for (j = 0; j < QuestionArr[i].options.length; j++) {
    var optionsDiv = document.createElement("div");
    optionsDiv.setAttribute("class", "optionsDiv");
    var radioBtns = document.createElement("input");
    radioBtns.setAttribute("type", "radio");
    radioBtns.setAttribute("class", "radio");
    optionsDiv.appendChild(radioBtns);
    var labels = document.createElement("label");
    labels.innerText = QuestionArr[i].options[j];
    labels.setAttribute("for", `${QuestionArr[i].options[j]}`);
    optionsDiv.appendChild(labels);
    console.log(labels);
    questionsDiv.appendChild(optionsDiv);
  }
  form.appendChild(questionsDiv);
}
