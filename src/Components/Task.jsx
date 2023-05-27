
export function Task(props){
   const {id, title, onDelete}=props;

   const handleDelete = () => {
    onDelete();
  };
    return(
        <div>
           
          
           <h3 className="text">{id}</h3>
            <h4 className="text">{title}</h4>
            <button className="btn btnDelte"onClick={handleDelete}>
                DELETE
            </button>
           
        

        <label className="date">
        Date:  </label>
        <input type="date" name="date" id="dte"/>
        
        <label className="ste"> State: </label>
           <select name="state" >
            <option>Select state</option>
            <option>Done</option>
            <option>Unrealized</option>
            <option>Priority</option>
            <option>Not priority</option>
           </select>
        </div>
    );
    
}
export default Task;