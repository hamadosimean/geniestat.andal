import React, { useState } from "react";

function BlocNotes() {
  const [task, setTask] = useState(["Morning routine"]);
  const [newtask, setNewTask] = useState("");

  const handleNewTask = (event) => {
    setNewTask(event.target.value);
  };
  const addTask = () => {
    if (newtask.trim() !== "") {
      setTask((prevTask) => [...prevTask, newtask]);
      setNewTask("");
    }
  };

  const tasks = task.map((task, i) => (
    <ol>
      <li key={i}>{task}</li>
      <button onClick={() => deleteTask(i)}>Delete</button>
      <button onClick={() => moovTaskUp(i)}>Moov Up</button>
      <button onClick={() => moovTaskDown(i)}>Moov Down</button>
    </ol>
  ));
  const deleteTask = (index) => {
    const deleteTasks = task.filter((_, i) => i !== index);
    setTask(deleteTasks);
  };
  const moovTaskUp = () => {};
  const moovTaskDown = () => {};
  return (
    <div className="container">
      <h2>FatihamBloc Notes</h2>
      <div className="task-input">
        <input type="text" value={newtask} onChange={handleNewTask} />
        <button onClick={addTask}>Add task</button>
      </div>
      <div className="tasks">{tasks}</div>
    </div>
  );
}

export default BlocNotes;
