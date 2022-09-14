import express from "express";
import cors from "cors";
import { pool } from "./db.js";
const app = express();

app.use(cors());
app.use(express.json());

//ROUTES

//Create a todo

app.post("/todos", async (req, res) => {
	try {
		const { description } = req.body;
		const newTodo = await pool.query(
			"INSERT INTO todo (description) VALUES($1) RETURNING *",
			[description]
		);

		res.json(newTodo.rows[0]);
	} catch (err) {
		console.error(err.message);
	}
});

//Get all todos

app.get("/todos", async (req, res) => {
	try {
		const allTodos = await pool.query("SELECT * FROM todo");
		res.json(allTodos.rows);
	} catch (err) {
		console.error(err.message);
	}
});

//Get a todo

app.get("/todos/:id", async (req, res) => {
	try {
		const { id } = req.params;
		const todo = await pool.query("SELECT * FROM todo WHERE todo_id = $1", [
			id,
		]);
		res.json(todo.rows);
	} catch (err) {
		console.error(err.message);
	}
});

//Update a todo

app.put("/todos/:id", async (req, res) => {
	try {
		const { id } = req.params;
		const { description } = req.body;
		const updateTodo = await pool.query(
			"UPDATE todo SET description = $1 WHERE todo_id = $2",
			[description, id]
		);

		res.json("Todo was updated");
	} catch (err) {
		console.error(err.message);
	}
});

//Delete a todo

app.delete("/todos/:id", async (req, res) => {
	try {
		const { id } = req.params;
		const deleteTodo = await pool.query(
			"DELETE FROM todo WHERE todo_ud = $1",
			[id]
		);
		res.json("Todo was deleted");
	} catch (err) {
		console.error(err.message);
	}
});

app.listen(5001, () => {
	console.log("server has started on port 5001");
});
