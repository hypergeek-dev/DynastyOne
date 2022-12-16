const setData = () => {
  let setTitle = document.getElementById("title-content").value;
  let setContent = document.getElementById("msg-content").value;
  let setSigned = document.getElementById("signed-content").value;
  let title = document.getElementById("title");
  let content = document.getElementById("content");
  let signed = document.getElementById("signed");
  if (setTitle.length && setContent.length && setSigned.length >= 1) {
    content.innerHTML = setContent;
    signed.append(` ${setSigned}`);
    title.innerHTML = setTitle;
  } else {
    console.log("remove");
  }
};
const background = () => {
  let image = document.querySelector(".test");
  image.style.backgroundImage =
    "url('https://picsum.photos/200/300')";
};

const resetData = () => {
  let title = document.getElementById("title");
  let content = document.getElementById("content");
  let signed = document.getElementById("signed");
  let image = document.querySelector(".test");
  image.style.backgroundImage =
    "url('')";
  title.textContent = "title";
  content.textContent = "content";
  signed.textContent = "signed";
};
