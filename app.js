const input = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');

addBtn.addEventListener('click', addTodo);
input.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') addTodo();
});

function addTodo() {
    const value = input.value.trim();
    if (!value) return;
    const li = document.createElement('li');
    const span = document.createElement('span');
    span.textContent = value;

    const editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.onclick = function() {
        startEdit(li, span, editBtn, removeBtn);
    };

    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.onclick = function() {
        todoList.removeChild(li);
    };

    li.appendChild(span);
    li.appendChild(editBtn);
    li.appendChild(removeBtn);
    todoList.appendChild(li);
    input.value = '';
}

function startEdit(li, span, editBtn, removeBtn) {
    const editInput = document.createElement('input');
    editInput.type = 'text';
    editInput.value = span.textContent;
    const saveBtn = document.createElement('button');
    saveBtn.textContent = 'Save';

    // Replace span and editBtn with input and saveBtn
    li.insertBefore(editInput, span);
    li.insertBefore(saveBtn, editBtn);
    li.removeChild(span);
    li.removeChild(editBtn);

    saveBtn.onclick = function() {
        const newValue = editInput.value.trim();
        if (newValue) {
            span.textContent = newValue;
        }
        li.insertBefore(span, editInput);
        li.insertBefore(editBtn, saveBtn);
        li.removeChild(editInput);
        li.removeChild(saveBtn);
    };

    editInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') saveBtn.onclick();
    });

    editInput.focus();
}
