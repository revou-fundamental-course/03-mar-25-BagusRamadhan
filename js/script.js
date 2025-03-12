// Ini File Javascript

// Nama User
function replaceName() {
  let name = prompt("Siapa nama kamu?", "");
  document.getElementById("name").innerHTML = name;
  alert("Selamat datang " + name + " di website saya!");
}
replaceName();

// Image Slide (Slideshow)
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs((slideIndex += n));
}

function showDivs(n) {
  var i;
  var imglist = document.getElementsByClassName("img-slide");
  if (n > imglist.length) slideIndex = 1;
  else if (n < 1) slideIndex = imglist.length;

  for (i = 0; i < imglist.length; i++) {
    imglist[i].style.display = "none";
  }

  imglist[slideIndex - 1].style.display = "block";
}

setInterval(() => {
  plusDivs(1);
}, 5000);

// Message Form Validation
function validateForm() {
  const name = document.forms["message-form"]["full-name"].value;
  const birthDate = document.forms["message-form"]["tgl-lahir"].value;
  const gender = document.forms["message-form"]["gender"].value;
  const messages = document.forms["message-form"]["messages"].value;

  if (name == "" || birthDate == "" || gender == "" || messages == "") {
    alert("Tidak boleh ada yang kosong");
    return false;
  }

  setSenderUI(name, birthDate, gender, messages);

  return false;
}

function setSenderUI(name, birthDate, gender, messages) {
  document.getElementById("sender-full-name").innerHTML = name;
  document.getElementById("sender-birth-date").innerHTML = birthDate;
  document.getElementById("sender-gender").innerHTML = gender;
  document.getElementById("sender-messages").innerHTML = messages;
}
