
export function Task(props){
   const {id, title, onDelete, description, onDateChange, onStateChange, checked}=props;

   const handleDelete = () => {
    onDelete(id);
  };

  const handleDateChange = (event) => {
    onDateChange(event);
  };

  const handleStateChange = (event) => {
    onStateChange(event);
  };

    return(
        <div>
           
            <h4  className={`text ${checked ? 'checked-title' : ''}`}>{title}</h4>
            {description && <p>{description}</p>} {/* Mostrar la descripción si existe */}
            <button className="btn btnDelte"onClick={handleDelete}>
                DELETE
            </button>
           
        

        <label className="date">
        Date:  </label>
        <input type="date" name="date" id="dte" onChange={handleDateChange}/>
        
        <label className="ste"> State: </label>
           <select name="state" onChange={handleStateChange} >
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