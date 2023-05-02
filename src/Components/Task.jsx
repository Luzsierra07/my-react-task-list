export function Task(props){
   const {id, title, state,date}=props;

    return(
        <div>
            <label>
            <input type="CheckBox" id="cbox" 
            value="checkbox"/>
        </label>
          
            <h3 className="text">{id}</h3>
            <h4 className="text">{title}</h4>

            <button className="btn btnDelte">
                DELETE
            </button>
           
        

        <label className="date">
        Date:  </label>
        <input type="date" name="date" id="dte"/>
        
        <label className="ste"> State: </label>
           <select>
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