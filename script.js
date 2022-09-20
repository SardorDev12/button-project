const btns = document.querySelectorAll(".buttons > button");
const btnSet = document.querySelector(".buttons");
const texts = document.querySelectorAll(".texts p");
const textBorder = document.querySelector(".texts");
const addBtn = document.querySelector(".input");

let aBtn = document.createElement("button");
aBtn.classList.add("pink");
aBtn.textContent = "pink";
let btnss = Array.from(btns);
btnSet.appendChild(aBtn);
btnss.push(aBtn);
console.log(btnss);

btnss.forEach((btn) => {
  let elClass = btn.className;
  btn.style.backgroundColor = `${elClass}`;

  btn.addEventListener("click", () => {
    texts.forEach((p) => {
      p.style.color = `${elClass}`;
    });
    textBorder.style.borderColor = `${elClass}`;
  });
});
