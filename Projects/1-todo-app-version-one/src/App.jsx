import AppName from "./components/AppName";
import AddToDo from "./components/AddToDo";
import ToDoItem1 from  "./components/ToDoItem1";
import TodoItem2 from  "./components/TodoItem2";
import "./App.css";

function App() {
  return (
    <center className="todo-container">
      <AppName />
      <AddToDo />
      <div className="items-container">
        <ToDoItem1></ToDoItem1>
        <TodoItem2></TodoItem2>
      </div>
    </center>
  );
}

export default App;