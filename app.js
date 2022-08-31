const newToDoItem = () => {
	const addTodo = document.querySelector(".addTodoButton");
	let newTodo = document.querySelector(".todoInput");
	let todos = document.querySelector(".todos");

	addTodo.addEventListener("click", addNewTodo);
	newTodo.addEventListener("keypress", function (e) {
		if (e.key === "Enter") {
			addNewTodo();
		}
	});

	function addNewTodo() {
		console.log("Task added: " + newTodo.value);
		todos.innerHTML += `<div class="todo">
        <li class="font-effect-outline">${newTodo.value}</li>
        </div>`;
		newTodo.value = "";
	}
};

newToDoItem();
