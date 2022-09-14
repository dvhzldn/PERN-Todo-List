import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const DATA = [{ id: "todo-0", name: "Finish homework", completed: true }];

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<App tasks={DATA} />
	</React.StrictMode>
);
