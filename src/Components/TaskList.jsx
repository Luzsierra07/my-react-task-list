import { useState, useEffect } from "react";
import Task from "./Task";
import { Taskmodel } from "./object/task";




const myTasksData = [
  new Taskmodel("1", "Send activity 1", false, "May 07, 2023"),
  new Taskmodel("2", "Send activity 2", true, "May 10, 2023"),
  new Taskmodel("3", "Send activity 3", true, "May 15, 2023"),
];

function TaskList() {
  const [tasks, setTasks] = useState(() =>{
    const storedTasks = localStorage.getItem("tasks");
    return storedTasks ? JSON.parse(storedTasks) : myTasksData
  });    
  const handleClick = () => {
    const newTask = new Taskmodel (
      "4",
      "send activity 4",
       false, 
       "May 30, 2023"
    );
    setTasks ([...tasks, newTask]);
  };
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);
 
  const [selectedTasks, setSelectedTasks] = useState([]);

  const handleShowSelectedTasks = () => {
  const selectedTaskElements = tasks.filter((task) =>
    selectedTasks.includes(task.id)
  );
  setTasks([...tasks.filter((task) => !selectedTasks.includes(task.id)), ...selectedTaskElements]);
  };
  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };  
 
 
  return (
    
    <>
   
   <button type= "button" id="button2" className="sbt" onClick={handleShowSelectedTasks}>Selected tasks</button>
     <button className="Add" onClick={handleClick}>Add new task</button>
      {tasks.map((task, index) => {
       const handleCheckboxChange = (event) => {
        const taskId = event.target.value;
        if (event.target.checked) {
          setSelectedTasks([...selectedTasks, taskId]);
        } else {
          setSelectedTasks(selectedTasks.filter((id) => id !== taskId));
        }
      };
      const handleTaskDelete = () => {
        handleDeleteTask(task.id);
      };    
        
        return ( 
          <div key={index}>
            <div className="target">
              
              <Task 
              id={task.id} 
              title={task.title}
              state={task.state} 
              date={task.date}
              handleClick={handleClick}
              onDelete={handleTaskDelete}
              ></Task>
                <div> 
                 
                   
            <label className="checked"> Check</label>
            <input type="CheckBox"
            className="cbox"
                   id={`cbox-${task.id}`}
                   value={task.id}
                   onChange={handleCheckboxChange}
                   
            />
            </div>
              
              
              
            </div>
            
          </div>
         
        );
      })}
      
    </>  );
    }
export default TaskList;
