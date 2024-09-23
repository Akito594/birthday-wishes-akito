const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () => {
  question.innerHTML = "HAPPY BIRTHDAY!";
  gif.src =
"https://media4.giphy.com/media/RhZfZ7fc7FYlivxte3/giphy.gif?cid=6c09b952xixhibb1w5l5kbh20gyc3objqpozxpez8bffbjio&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=s"  ;
});

noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});




