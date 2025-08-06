let listData = [];
const ul = document.querySelector("ul");
const body = document.querySelector("body");
const input = document.createElement("input");
const button = document.createElement("button");

button.innerText = "click here";

const render = () => {
  ul.innerHTML = "";
  listData.map((element, index) => {
    const li = document.createElement("li");
    const button2 = document.createElement("button");
    button2.innerText = "x";
    butten2.addEventListener("click", () => {
      const newlistData = listData.filter((el, i) => {
        return i !== index;
      });
      listData = newlistData;
      render();
      li.innerText = element;
      ul.appendChild(li);
      li.appendChild(button2);
    });
  });
};

function printInput(value) {
  listData.push(value);
}
button.addEventListener("click", () => {
  printInput(input.value);
  render();
});

body.appendChild(input);
body.appendChild(button);
