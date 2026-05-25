const input = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");
const todoList = document.getElementById("todo-list");

addBtn.addEventListener("click", addTodo);
input.addEventListener("keypress", function (e) {
  if (e.key === "Enter") addTodo();
});
console.log("test code reviewer");
function addTodo() {
  const value = input.value.trim();
  if (!value) return;
  const li = document.createElement("li");
  li.textContent = value;
  const removeBtn = document.createElement("button");
  removeBtn.textContent = "Remove";
  removeBtn.onclick = function () {
    todoList.removeChild(li);
  };
  li.appendChild(removeBtn);
  todoList.appendChild(li);
  input.value = "";
}
