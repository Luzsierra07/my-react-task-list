import React from "react";

const AboutUs = () => {
    return (
    <div>
        <h1>About our Task List Application</h1>
        <p>Welcome to our Task List Application. This app was designed to help you organize your tasks and maintain a high level of productivity.</p>
        <h2>Functionalities</h2>
        <ul>
            <li>Add Tasks: You can add new tasks to your list by providing a title, description (optional), date, and state.</li>
            <li>Delete Tasks: You have the option to delete tasks from your list if they are no longer needed.</li>
            <li>Mark as Completed: You can mark a task as completed by selecting the "Done" state from the dropdown menu and cross out the task by selecting the checkbox.</li>
            <li>Modify Date: If the dates of your tasks change, you can easily update them by selecting a new date in the corresponding field.</li>
        </ul>
        <h2>Technologies Used</h2>
        <p>Our Task List Application was developed using the following technologies:</p>
        <ul>
            <li>React: A popular JavaScript framework for building user interfaces.</li>
            <li>LocalStorage: To store tasks locally in the user's browser and maintain data persistence.</li>
            <li>UUID: To generate inique identifiers for each created task.</li>
        </ul>
        <p> We hope you enjoy using our application and that it helps you keep your tasks organized and achieve your goals effectively! </p>
    </div>
    );
};

export default AboutUs;