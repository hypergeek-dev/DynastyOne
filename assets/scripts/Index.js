// loose variables
const title = document.querySelector("#title");
const content = document.querySelector("#content");
const sender = document.querySelector("#sender");
const image = document.querySelector("#image");

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
}

// Function to select CardBackGround
function Changeimage(event) {
  image.src = "assets/images/" + event.value + ".jpg";
}

// Transform card in downloadable png
$("#btn_convert").on('click', function () {
  html2canvas(document.getElementById("html-content-holder"),		{
    allowTaint: true,
    useCORS: true
  }).then(function (canvas) {
    var anchorTag = document.createElement("a");
    document.body.appendChild(anchorTag);
    document.getElementById("previewImg").appendChild(canvas);			anchorTag.download = "filename.jpg";
    anchorTag.href = canvas.toDataURL();
    anchorTag.target = '_blank';
    anchorTag.click();
  });
});
