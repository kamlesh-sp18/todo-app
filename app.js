const input = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");
const todoList = document.getElementById("todo-list");

addBtn.addEventListener("click", addTodo);
input.addEventListener("keypress", function (e) {
  if (e.key === "Enter") addTodo();
});

function addTodo() {
  const value = input.value.trim();
  if (!value) return;

  const li = document.createElement("li");

  const span = document.createElement("span");
  span.textContent = value;
  li.appendChild(span);

  const btnGroup = document.createElement("div");
  btnGroup.className = "btn-group";

  const editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.className = "edit-btn";
  editBtn.onclick = function () {
    if (editBtn.textContent === "Edit") {
      const editInput = document.createElement("input");
      editInput.type = "text";
      editInput.value = span.textContent;
      editInput.className = "edit-input";
      li.replaceChild(editInput, span);
      editBtn.textContent = "Save";
      editInput.focus();
      editInput.addEventListener("keypress", function (e) {
        if (e.key === "Enter") editBtn.click();
      });
    } else {
      const editInput = li.querySelector(".edit-input");
      const newValue = editInput.value.trim();
      if (!newValue) return;
      span.textContent = newValue;
      li.replaceChild(span, editInput);
      editBtn.textContent = "Edit";
    }
  };

  const removeBtn = document.createElement("button");
  removeBtn.textContent = "Remove";
  removeBtn.onclick = function () {
    todoList.removeChild(li);
  };

  btnGroup.appendChild(editBtn);
  btnGroup.appendChild(removeBtn);
  li.appendChild(btnGroup);
  todoList.appendChild(li);
  input.value = "";
}
