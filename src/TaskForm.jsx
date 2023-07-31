import React, {useState} from "react";

const TaskForm = ({onAddTask}) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
       //Antes de guardar la tarea verificar que se haya ingresado el titulo
       if (title.trim() .length < 3 ) {
        alert("The title must have at least 3 characters.");
        return;
       }

        const newTask = {
            title: title,
            description: description,
        };
        onAddTask(newTask);
        //una vez guardada la tarea reiniciar los campos
        setTitle("");
        setDescription("");
       };

return (
    <form className="form-container" onSubmit={handleSubmit}>
        <div>
            <label htmlForm="title">Title:</label>
            <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            />
        </div>
        <div>
            <label htmlFor="description">Description:</label>
            <textarea
            type="text"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Optional"
            />
            
        </div>
        <button type="submit">Add Task</button>
    </form>
);
};

export default TaskForm;