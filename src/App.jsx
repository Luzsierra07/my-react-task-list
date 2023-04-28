import Header from "./Componentes/Header"
import TaskList from "./Componentes/TaskList"
import './App.css'

function App() {
  return (
    <>
    <Header />
    <div className="container">
    <TaskList Id={"Task 1"} Task={"Send activity 1"} Date={""} Esate={""}/>
    <TaskList Id={"Task 2"} Task={"Send activity 2"} Date={""} Esate={""}/>
    <TaskList Id={"Task 3"} Task={"Send activity 3"} Date={""} Esate={""}/>
    <TaskList Id={"Task 4"} Task={"Send activity 4"} Date={""} Esate={""}/>
    </div>
    <button type= "button" id="button2" className="sbt">Show Selected tasks</button>
    <h2>Selected tasks</h2>
    <ul id="Task" className="Tasklist"></ul>
    
    
    </>
  )
}
  
export default App
