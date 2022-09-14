const addTodo = document.querySelector(".addTodoButton");
let newTodo = document.querySelector(".todoInput");
let todoList = document.querySelector(".todoList");
let todoKey = 0;
let todoText = "";
//	addTodo.addEventListener("click", NewTodo);
//newTodo.addEventListener("keypress", (e) => {
//	if (e.key === "Enter") {
//		NewTodo();
//	}
//});

function NewTodo() {
	let todoText = newTodo.value;
	todoKey += 1;

	const newDiv = document.createElement("div");
	newDiv.className = "todo";
	newDiv.id = `${todoKey}`;
	newDiv.setAttribute("key", `${todoKey}`);
	todoList.appendChild(newDiv);

	const newDeleteButton = document.createElement("button");
	newDeleteButton.className = "delete-button";
	newDeleteButton.setAttribute("id", `delete-${todoKey}`);
	newDeleteButton.innerText = "X";
	newDeleteButton.onclick = (e) => {
		deleteTodo(e);
	};
	newDiv.appendChild(newDeleteButton);

	const newItem = document.createElement("li");
	newItem.className = "font-effect-outline";
	newItem.setAttribute("id", `item-${todoKey}`);
	newItem.innerText = `${todoText}`;
	newItem.addEventListener("dblclick", editTodo);
	newDiv.appendChild(newItem);

	const newEditButton = document.createElement("button");
	newEditButton.className = "edit-button";
	newEditButton.setAttribute("id", `edit-${todoKey}`);
	newEditButton.innerText = "Edit";
	newEditButton.onclick = (e) => {
		editTodo(e);
	};
	newDiv.appendChild(newEditButton);

	const newCompleteButton = document.createElement("button");
	newCompleteButton.className = "complete-button";
	newCompleteButton.setAttribute("id", `complete-${todoKey}`);
	newCompleteButton.innerText = "Done";
	newCompleteButton.onclick = (e) => {
		completeTodo(e);
	};
	newDiv.appendChild(newCompleteButton);

	console.log("Task added: " + todoText);
	newTodo.value = "";
}

function deleteTodo(e) {
	let key = e.target.id.slice(7);
	const text = document.getElementById(`item-${key}`);
	const div = document.getElementById(`${key}`);
	console.log("Task deleted: " + text.innerText);
	div.remove();
}

function editTodo(e) {
	let key = e.target.id.slice(5);
	const text = document.getElementById(`item-${key}`);
	let oldText = text.innerText;
	text.style.textDecoration = "none";
	// const edit = document.getElementById(`edit-${key}`);
	// edit.hidden = true;
	// const done = document.getElementById(`complete-${key}`);
	// done.hidden = true;

	let newText = document.createElement("input");
	newText.className = "edit-input";
	newText.id = `item-${key}`;
	newText.type = "text";
	newText.value = `${oldText}`;
	text.replaceWith(newText);
	newText.select();
	newText.addEventListener("keypress", (e) => {
		if (e.key === "Enter") {
			saveTodo(e);
		}
	});
}

function saveTodo(e) {
	let text = e.target.value;
	let id = e.target.id;
	const input = document.getElementById(id);
	const newText = document.createElement("li");
	newText.addEventListener("keypress", saveTodo);
	newText.addEventListener("dblclick", editTodo);
	newText.className = "font-effect-outline";
	newText.setAttribute("id", `${id}`);
	newText.innerText = `${text}`;
	input.replaceWith(newText);
	console.log("Task edited: " + text);
}

function completeTodo(e) {
	let key = e.target.id.slice(9);
	const text = document.getElementById(`item-${key}`);
	const div = document.getElementById(`${key}`);
	const button = document.getElementById(`complete-${key}`);
	div.style.backgroundColor = "transparent";
	text.style.textDecoration = "line-through";
	console.log("Task completed: " + todoText);
	button.remove();
}
