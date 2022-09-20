const btns = document.querySelectorAll(".buttons > button");
const texts = document.querySelectorAll(".texts p");

btns.forEach((btn) => {
  let elClass = btn.className;

  btn.addEventListener("mouseover", () => {
    btn.style.backgroundColor = `${elClass}`;

    texts.forEach((p) => {
      let pClass = p.className;
      // changing color of p with its classname
      if (pClass == elClass) {
        p.style.color = `${pClass}`;
      }

      //   changing color of the whole text with btn's classname
      if (elClass == "yellow") {
        alert(
          "Yellow is difficult to be seen with light bg, so I made it look black"
        );
        p.style.color = "black";
        elClass = "black";
      } else {
        p.style.color = `${elClass}`;
      }
    });
  });
});
