import './App.css';
import {useState,useEffect} from 'react'
import 'antd/dist/antd.css';
import Footer from './Footer'
import List from "./List"
import Input from "./Input"



function App() {
  const [list,setList]=useState([])
  const [input,setInput]=useState('')
  const[filteredList,setFilteredList]=useState(list)

  useEffect(() => {
    setFilteredList(list);
  }, [list]);
  const handleAddTask=(e)=>{
   
    const newTask={name:input,status:false}
    const data=[...list,newTask]
    setList(data)
    setInput('')
    console.log(list)
  }
  const handleInputChange=(e)=>setInput(e.target.value)
  


 

  const onChangeTaskStatus = (e, index) => {
    const status = e.target.checked //reading latest state of checkbox
    console.log("oldtask",list[index])
    const task = { ...list[index], status:status}; //copying task in question and updating its status
    console.log("updatedtask",task)
    const updatedList = [...list]; //copying list
    console.log("list",updatedList)
    updatedList[index] = task; //updating index with latest task state
    console.log("updatedlist",updatedList)

    setList(updatedList);  
  };

  const showAllTasks=()=>{
  setFilteredList(list)

  }
  const showActiveTasks=()=>{
    const activeTasksList=list.filter((task)=> !task.status)
    setFilteredList(activeTasksList);

  }
  const showCompletedTasks=()=>{
    const completedTasksList=list.filter((task)=>task.status)
    setFilteredList(completedTasksList);

  }
  const clearCompletedTasks=()=>{
    const activeTasksList = list.filter((task) => !task.status);
    setList(activeTasksList);
    // setFilteredList(activeTasksList);
  }
  
  
  
  

 
  return (
    <div className="app">
      <h1>TODOS</h1>

     <Input value={input} onChange={handleInputChange}
     onSubmit={handleAddTask} />

       <List
       data={filteredList}
       onChangeCheckBox={onChangeTaskStatus}
       />
    <Footer
    showAllTasks={showAllTasks}
    showActiveTasks={showActiveTasks}
    showCompletedTasks={showCompletedTasks}
    clearCompletedTasks={clearCompletedTasks}
    />
        
      

    </div>
  );
}

export default App;
