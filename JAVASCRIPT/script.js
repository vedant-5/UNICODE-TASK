function validation() {
  var name = document.getElementById("name").value;
  var phone = document.getElementById("phone").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;
  var error = document.getElementById("error");

  var text;

  if (name.length === 0) {
    text = "*Please enter your name";
    error.innerHTML = text;
    return false;
  }
  if (isNaN(phone) || phone.length != 10) {
    text = "*Please enter a valid phone number";
    error.innerHTML = text;
    return false;
  }

  if (message.length === 0) {
    text = "*Please enter the message you want to send";
    error.innerHTML = text;
    return false;
  }

  if (email.indexOf("@") == -1 || email.length < 10) {
    text = "*Please enter a valid email id !";
    error.innerHTML = text;
    return false;
  }

  alert("Form submitted successfully !!");
  return true;
}

function showelement1() {
  document.querySelector(".proj1").style.display = "block";
  document.querySelector(".proj2").style.display = "none";
  document.querySelector(".proj3").style.display = "none";
  document.getElementById("card1").style.border = " 3px solid #f17a7e";
  document.getElementById("card2").style.border = " 1px solid #f17a7e";
  document.getElementById("card3").style.border = " 1px solid #f17a7e";
}

function showelement2() {
  document.querySelector(".proj2").style.display = "block";
  document.querySelector(".proj1").style.display = "none";
  document.querySelector(".proj3").style.display = "none";
  document.getElementById("card2").style.border = " 3px solid #f17a7e";
  document.getElementById("card1").style.border = " 1px solid #f17a7e";
  document.getElementById("card3").style.border = " 1px solid #f17a7e";
}

function showelement3() {
  document.querySelector(".proj3").style.display = "block";
  document.querySelector(".proj1").style.display = "none";
  document.querySelector(".proj2").style.display = "none";
  document.getElementById("card3").style.border = " 3px solid #f17a7e";
  document.getElementById("card2").style.border = " 1px solid #f17a7e";
  document.getElementById("card1").style.border = " 1px solid #f17a7e";
}
