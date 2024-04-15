const form = document.querySelector("form");
const input = document.querySelector("input");
const output = document.querySelector(".output");
const message = document.querySelector(".message-container");

function getTodo(value) {
  let todo = document.createElement("div");
  let textEle = document.createElement("span");
  textEle.innerHTML = value;
  textEle.appendChild(textEle);
  message.classList.toggle("success");
  message.textContent = "Item Added";

  setTimeout(() => {
    message.classList.toggle("success");
  }, 2000);

  let closeEle = document.createElement("span");
  closeEle.innerHTML = "&times";
  closeEle.classList.add("delete");

  closeEle.addEventListener("click", () => {
    output.removeChild(todo);
    message.classList.toggle("error");
    message.textContent = "Item Deleted";

    setTimeout(() => {
      message.classList.toggle("error");
    }, 2000);
  });

  todo.appendChild(closeEle);
  todo.classList.add("todo");
  return todo;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let value = input.value;
  if (!value.trim()) return;
  output.appendChild(getTodo(value));
  input.value = "";
});
  
}
