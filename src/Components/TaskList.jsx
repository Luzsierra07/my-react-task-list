import { useState } from "react";
import Task from "./Task";
import { Taskmodel } from "./object/task";

const myTasksData = [
  new Taskmodel("Activity1", "Send activity 1", false, "May 07, 2023"),
  new Taskmodel("Activity2", "Send activity 2", true, "May 10, 2023"),
  new Taskmodel("Activity3", "Send activity 3", true, "May 15, 2023"),
  new Taskmodel("Activity4", "Send activity 4", true, "May 20, 2023"),
  new Taskmodel("Activity5", "Send activity 5", true, "May 27, 2023"),
];

function TaskList() {
  const [tasks, setTasks] = useState(myTasksData);
  return (
    <>
      {tasks.map((task, index) => {
        return (
          <div key={index}>
            <div className="target">
              <Task id={task.id} title={task.title} state={task.state} date={task.date}></Task>
            </div>
          </div>
        );
      })}
      
    </>
  );



}
export default TaskList;
