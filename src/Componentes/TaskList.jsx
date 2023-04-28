import Task from "./Task";
function TaskList(props){
    return (
        
        <div>
            <div className="target">
                
                 <Task/>
                 <h3>{props.Id}</h3>
                 <h4>{props.Task}</h4>
                 <p>{props.Date}</p>
                 <p>{props.Estate}</p>
            </div>
          
         </div>
    
    )
}
export default TaskList;