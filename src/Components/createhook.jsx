import { useState, useEffect } from "react";
import { Taskmodel } from "./object/task";

const useTaskManagement = () => {
  const [tasks, setTasks] = useState(() => {
    const storedTasks = localStorage.getItem("tasks");
    return storedTasks ? JSON.parse(storedTasks) : [];
  });
  const [modifiedTasks, setModifiedTasks] =useState(() => {
    const storedModifiedTasks = localStorage.getItem("modifiedTasks");
    return storedModifiedTasks ? JSON.parse(storedModifiedTasks) : [];
  });

  const createTask = (newTask) => {
    const task = new Taskmodel(
      newTask.id,
      newTask.title,
      newTask.state,
      newTask.date,
      newTask.description,
    );
    setTasks([...tasks, task]);
  };

  const deleteTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  const updateTask = (taskId, updatedTask) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => {
        if (task.id === taskId) {
          const modifiedTasks= { ...task, ...updatedTask };
          setModifiedTasks((prevModifiedTask) => [...prevModifiedTask, modifiedTasks]);
          return modifiedTasks;
        }
        return task;
      })
    );
  };

  useEffect(() => {
    // Guardar las tareas en localStorage cuando se actualizan
    localStorage.setItem("tasks", JSON.stringify(tasks));

    // Guardar las tareas modificadas en localStorage
    if (modifiedTasks.length > 0) {
      const storedModifiedTasks = localStorage.getItem("modifiedTasks");
      const existingModifiedTasks = storedModifiedTasks ? JSON.parse(storedModifiedTasks) : [];
      localStorage.setItem("modifiedTasks", JSON.stringify([...existingModifiedTasks, ...modifiedTasks]));
    }
  }, [tasks, modifiedTasks]);

  useEffect(() => {
    // Recuperar las tareas modificadas del localStorage al cargar el componente
    const storedModifiedTasks = localStorage.getItem("modifiedTasks");
    if (storedModifiedTasks) {
      const parsedModifiedTasks = JSON.parse(storedModifiedTasks);
      setModifiedTasks(parsedModifiedTasks);
    }
  }, []);

  return {
    tasks,
    createTask,
    deleteTask,
    updateTask,
    setModifiedTasks, // Agregado setModifiedTasks al objeto retornado
  };
};

export default useTaskManagement;
