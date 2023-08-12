const container = document.querySelector(".click-event");

const btn1 = document.querySelector("#btn-1");
const btn2 = document.querySelector("#btn-2");
const btn3 = document.querySelector("#btn-3");
const btn4 = document.querySelector("#btn-4");
const btn5 = document.querySelector("#btn-5");

btn1.addEventListener("click", () => {
  container.classList.toggle;
  container.style.borderRadius = "10px";
});

btn2.addEventListener("click", () => {
  container.classList.toggle;
  container.style.borderRadius = "15px";
});

btn3.addEventListener("click", () => {
  container.classList.toggle;
  container.style.borderRadius = "20px";
});

btn4.addEventListener("click", () => {
  container.classList.toggle;
  container.style.borderRadius = "30px";
});

btn5.addEventListener("click", () => {
  container.classList.toggle;
  container.style.borderRadius = "40px";
});
