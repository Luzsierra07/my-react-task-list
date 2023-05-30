import { useState, useEffect } from "react";
import { Taskmodel } from "./object/task";

const useTaskManagement = () => {
  const [tasks, setTasks] = useState(() => {
    const storedTasks = localStorage.getItem("tasks");
    return storedTasks ? JSON.parse(storedTasks) : [];
  });

  const createTask = (newTask) => {
    const task = new Taskmodel(
      newTask.id,
      newTask.title,
      newTask.state,
      newTask.date
    );
    setTasks([...tasks, task]);
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const updateTask = (taskId, updatedTask) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === taskId) {
          return { ...task, ...updatedTask };
        }
        return task;
      })
    );
  };

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return {
    tasks,
    createTask,
    deleteTask,
    updateTask,
  };
};

export default useTaskManagement;
