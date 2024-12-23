function through(e) {
  e.preventDefault();
  if (redFlag == true) {
    window.location.replace("quiz.html");
  }
}

var inputLength = document.getElementById("username");

function nameLengthChecker(e) {
  if (e.target.value.length < 3) {
    nameError.innerText = "Name should be greater than 2 character";
    nameError.style.display = "block";
    return;
  }
  if (!regex.test(e.target.value)) {
    nameError.innerText = "Numbers not allowed";
    nameError.style.display = "block";
    return;
  }
  nameError.style.display = "none";
  redFlag = true;
  var userData = {
    username: e.target.value,
  };
  localStorage.setItem("userName", JSON.stringify(userData));
}

var nameError = document.getElementById("error");
var redFlag = false;
var regex = /^[a-zA-Z\s]*$/;
