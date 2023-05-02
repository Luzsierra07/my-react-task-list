import Header from "./Components/Header"
import TaskList from "./Components/TaskList"
import './App.css'


function App() {
  return (
    <>
    <Header />
    <div className="container">
    <TaskList/>
   
    
    </div>
    <button type= "button" id="button2" className="sbt">Show Selected tasks</button>
    <h2>Selected tasks</h2>
    <ul id="Task" className="Tasklist"></ul>
    
    
    </>
  )
}
  
export default App
