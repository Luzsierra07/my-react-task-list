import { useState, useEffect } from "react";
import Task from "./Task";
import useTaskManagement from "./createhook";
import TaskForm from "../TaskForm"; 
import {v4 as uuidv4} from "uuid";



const TaskList = () => {
  const { tasks, createTask, deleteTask, updateTask } = useTaskManagement();
  const [selectedTasks, setSelectedTasks] = useState([]);
  const [showForm, setShowForm] = useState (false);
  const [modifiedTasks, setModifiedTasks] = useState([]);

  

  const handleAddTask = (newTask) => {
    const task = {
      id: uuidv4(),
      title: newTask.title,
      state: newTask.state,
      date: newTask.date,
      description: newTask.description,
    };
    createTask(task);
    setShowForm(false); // ocultar el formulario después de agregar la tarea
  };
 
  const handleDeleteTask = (taskId) => {
    deleteTask(taskId);
  };

  const handleCheckboxChange = (event, taskId) => {
    const isChecked = event.target.checked;
    setSelectedTasks((prevSelectedTasks) => {
      if (isChecked) {
        return [...prevSelectedTasks, taskId];
      } else {
        return prevSelectedTasks.filter((id) => id !== taskId);
      }
    });
  };

  const handleDateChange = (event, taskId) => {
    const newDate = event.target.value;
    updateTask(taskId, { date: newDate }, selectedTasks);
    setModifiedTasks((prevModifiedTasks) => {
      const modifiedTaskIndex = prevModifiedTasks.findIndex((task) => task.id === taskId);
      if (modifiedTaskIndex !== -1) {
        const updatedTask = { ...prevModifiedTasks[modifiedTaskIndex], date: newDate };
        return [
          ...prevModifiedTasks.slice(0, modifiedTaskIndex),
          updatedTask,
          ...prevModifiedTasks.slice(modifiedTaskIndex + 1),
        ];
      }
      return [...prevModifiedTasks, { id: taskId, date: newDate }];
    });
  };

  const handleStateChange = (event, taskId) => {
    const newState = event.target.value;
    updateTask(taskId, { state: newState }, selectedTasks);
    setModifiedTasks((prevModifiedTasks) => {
      const modifiedTaskIndex = prevModifiedTasks.findIndex((task) => task.id === taskId);
      if (modifiedTaskIndex !== -1) {
        const updatedTask = { ...prevModifiedTasks[modifiedTaskIndex], state: newState };
        return [
          ...prevModifiedTasks.slice(0, modifiedTaskIndex),
          updatedTask,
          ...prevModifiedTasks.slice(modifiedTaskIndex + 1),
        ];
      }
      return [...prevModifiedTasks, { id: taskId, state: newState }];
    });
  };

  useEffect(() => {
    // Guardar las tareas en localStorage cuando se actualizan
    localStorage.setItem("tasks", JSON.stringify(tasks));

    // Filtrar las tareas modificadas para obtener solo las no completadas
  const uncompletedModifiedTasks = modifiedTasks.filter((task) => !selectedTasks.includes(task.id));

  // Combinar las tareas existentes con las tareas modificadas no completadas
  const allTasks = [...tasks, ...uncompletedModifiedTasks];

    // Guardar todas las tareas en localStorage
  localStorage.setItem("modifiedTasks", JSON.stringify(allTasks));
}, [tasks, modifiedTasks, selectedTasks]);
 

  return (
    <>
    {showForm ? (
      <TaskForm onAddTask={handleAddTask}/>
    ): (
    <>
      
      <button className="Add" onClick={() => setShowForm(true)}>
        Add new task
      </button>
      
      </>
     )}
      {tasks.map((task) => (
        <div key={task.id}>
          <div className="target">
            <Task
              id={task.id}
              title={task.title}
              description={task.description}
              state={task.state}
              date={task.date}
              onDelete={() => handleDeleteTask(task.id)}
              checked={selectedTasks.includes(task.id)}
              onCheckboxChange={(event) => handleCheckboxChange(event, task.id)}
              onDateChange={(event) => handleDateChange(event, task.id)} // Agregado el evento de cambio de fecha
              onStateChange={(event) => handleStateChange(event, task.id)} // Agregado el evento de cambio de estado
            />
            <div>
              <label className="checked"> Check</label>
              <input
                type="checkbox"
                className="cbox"
                id={`cbox-${task.id}`}
                value={task.id}
                checked={selectedTasks.includes(task.id)}
                onChange={(event) => handleCheckboxChange(event, task.id)}
              />
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default TaskList;