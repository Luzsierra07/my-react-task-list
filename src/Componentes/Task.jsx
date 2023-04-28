export function Task(){
   

    return(
        <div>
            <button className="btn btnDelte">
                DELETE
            </button>
           
        <label>
            <input type="CheckBox" id="cbox" 
            value="checkbox"/>
        </label>

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