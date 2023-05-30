import { useState, useEffect } from "react";
import Task from "./Task";
import useTaskManagement from "./createhook";



const TaskList = () => {
  const { tasks, createTask, deleteTask, updateTask } = useTaskManagement();
  const [selectedTasks, setSelectedTasks] = useState([]);

  const handleClick = () => {
    const newTask = {
      id: "",
      title: "Make project React 1",
      state: true,
      date: "May 30, 2023",
    };
    createTask(newTask);
  };
 
  const handleDeleteTask = (taskId) => {
    deleteTask(taskId);
  };

  const handleCheckboxChange = (event) => {
    const taskId = event.target.value;
    if (event.target.checked) {
      setSelectedTasks([...selectedTasks, taskId]);
    } else {
      setSelectedTasks(selectedTasks.filter((id) => id !== taskId));
    }
  };

  const handleShowSelectedTasks = () => {
    const selectedTaskElements = tasks.filter((task) =>
      selectedTasks.includes(task.id)
    );
    
    setTasks([...tasks.filter((task) => !selectedTasks.includes(task.id)),
       ...selectedTaskElements]);
  };

  useEffect(() => {
    // Guardar las tareas en localStorage cuando se actualizan
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <>
      <button
        type="button"
        id="button2"
        className="sbt"
        onClick={handleShowSelectedTasks}
      >
        Selected tasks
      </button>
      <button className="Add" onClick={handleClick}>
        Add new task
      </button>
      {tasks.map((task, index) => (
        <div key={index}>
          <div className="target">
            <Task
              id={task.id}
              title={task.title}
              state={task.state}
              date={task.date}
              onDelete={() => handleDeleteTask(task.id)}
            />
            <div>
              <label className="checked"> Check</label>
              <input
                type="checkbox"
                className="cbox"
                id={`cbox-${task.id}`}
                value={task.id}
                onChange={handleCheckboxChange}
              />
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default TaskList;