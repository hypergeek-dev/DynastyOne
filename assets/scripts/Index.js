// loose variables
const title = document.querySelector("#title");
const content = document.querySelector("#content");
const sender = document.querySelector("#sender");

// Function to Change card status
function changeCard() {
  const setTitle = document.querySelector("#setTitle").value;
  const setContent = document.querySelector("#setContent").value;
  const setSender = document.querySelector("#setSender").value;

  title.innerHTML = setTitle;
  content.innerHTML = setContent;
  sender.innerHTML = setSender;

  if (setTitle.length && setContent.length && setSender.length >= 1) {
    console.log("is working");
  } else {
    console.log("incomplete");
  }
}
// Function to reset all fields
function reset() {
  title.innerHTML = "";
  content.innerHTML = "";
  sender.innerHTML = "";
  document.getElementById("image").style.backgroundImage = "url()";
}

// Function to select CardBackGround
function Changeimage(event) {
  document.getElementById("image").style.backgroundImage =
    "url(assets/images/" + event.value + ".jpg)";
}
// Transform card in downloadable png
$("#btn_convert").on("click", function () {
  html2canvas(document.getElementById("html-content-holder"), {
    allowTaint: true,
    useCORS: true,
  }).then(function (canvas) {
    var anchorTag = document.createElement("a");
    document.body.appendChild(anchorTag);
    anchorTag.download = "filename.jpg";
    anchorTag.href = canvas.toDataURL();
    anchorTag.target = "_blank";
    anchorTag.click();
    
  });
});
// Volume control function
function start() {
  const audio = document.querySelector("#bgAudio");
  audio.volume = 0.01;
}

function stop() {
  const audio = document.querySelector("#bgAudio");
  audio.pause()
}
function play() {
  const audio = document.querySelector("#bgAudio");
  audio.currentTime = 0
  audio.play()
}

// Email js code

function sendEmail() {
  let params = {
    image: canvas,
    testEmail: document.getElementById("testEmail").value,
    testMessage: document.getElementById("testMessage").value
  }
  const service_id = "myService"
  const template_id = "Jingle_Bingle"
  
  emailjs
    .send(service_id, template_id, params)
    .then((res) => {
      document.getElementById("image").value = ""
      document.getElementById("testEmail").value = ""
      document.getElementById("testMessage").value = ""
      console.log(res)
      alert("sucess")
    })
    .catch((err)=> console.log(err))
}
