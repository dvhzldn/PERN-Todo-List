const app = () => {
	const addTodo = document.querySelector(".addTodoButton");
	let newTodo = document.querySelector(".todoInput");
	let todoList = document.querySelector(".todos");
	let todoKey = 0;

	addTodo.addEventListener("click", NewTodo);
	newTodo.addEventListener("keypress", function (e) {
		if (e.key === "Enter") {
			NewTodo();
		}
	});

	function NewTodo() {
		todoText = newTodo.value;
		todoKey += 1;
		todoList.innerHTML += `<div class="todo" key=${todoKey}>
        <button class="delete-button">X</button>
        <li class="font-effect-outline">${todoText}</li>
        <button class="complete-button">Done</button>
        <button class="edit-button">Edit</button>
        </div>`;
		console.log("Task added: " + newTodo.value);
		newTodo.value = "";
	}

	function deleteToDo() {
		console.log("Task deleted: " + newTodo.value);
	}
};

app();
