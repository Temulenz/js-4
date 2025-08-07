let listData = [];
const ul = document.querySelector("ul");
const body = document.querySelector("body");
const input = document.createElement("input");
const button = document.createElement("button");
// img.className("img");
button.innerText = "click here";

const render = () => {
  ul.innerHTML = "";
  listData.map((element, index) => {
    const li = document.createElement("li");
    const button2 = document.createElement("button");
    const image = document.createElement("img");
    image.src =
      "https://assets.streamlinehq.com/image/private/w_300,h_300,ar_1/f_auto/v1/icons/vector-icons-4/edit-flwwwz417de3u3nzvstgpu.png/edit-qtep4ftgzlsz4sl22a43m9.png?_a=DATAg1AAZAA0";
    button2.innerText = "x";
    button2.addEventListener("click", () => {
      const newlistData = listData.filter((el, i) => {
        return i !== index;
      });
      listData = newlistData;
      render();
    });
    li.innerText = element;
    ul.appendChild(li);
    li.appendChild(button2);
    li.appendChild(image);
  });
};

function printInput(value) {
  listData.push(value);
}
button.addEventListener("click", () => {
  if (input.value !== "") {
    printInput(input.value);
    render();
    input.value = "";
  }
});

body.appendChild(input);
body.appendChild(button);
