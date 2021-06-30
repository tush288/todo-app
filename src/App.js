import "./App.css";
import { useState, useEffect } from "react";
import "antd/dist/antd.css";
import Footer from "./Footer";
// import List from "./List"
import Input from "./Input";
import Table from "./Table";
import Header from "./Header";

function App() {
  const [list, setList] = useState([]);
  const [input, setInput] = useState("");
  const [filteredList, setFilteredList] = useState(list);
  const [activeEditIndex, setActiveEditIndex] = useState(null);

  useEffect(() => {
    setFilteredList(list);
  }, [list]);

  const handleAddTask = (e) => {
    const newTask = { name: input, status: false };
    const data = [...list, newTask];
    setList(data);
    setInput("");
    console.log(list);
  };
  const handleInputChange = (e) => setInput(e.target.value);

  const onChangeTaskStatus = (e, index) => {
    const status = e.target.checked; //reading latest state of checkbox
    // console.log("oldtask",list[index])
    const task = { ...list[index], status: status }; //copying task in question and updating its status
    // console.log("updatedtask",task)
    const updatedList = [...list]; //copying list
    // console.log("list",updatedList)
    updatedList[index] = task; //updating index with latest task state
    // console.log("updatedlist",updatedList)

    setList(updatedList);
  };

  const showAllTasks = () => {
    setFilteredList(list);
    console.log(list);
  };
  const showActiveTasks = () => {
    const activeTasksList = list.filter((task) => !task.status);
    setFilteredList(activeTasksList);
  };
  const showCompletedTasks = () => {
    const completedTasksList = list.filter((task) => task.status);
    setFilteredList(completedTasksList);
  };
  const clearCompletedTasks = () => {
    const activeTasksList = list.filter((task) => !task.status);
    setList(activeTasksList);
    // setFilteredList(activeTasksList);
  };

  const onEditHandle = (index) => {
    setActiveEditIndex(index);
  };
  const onDeleteHandle = (index) => {
    const updatedList = [...list];
    updatedList.splice(index, 1);
    setList(updatedList);
  };
  const onChangeTaskName = (e, index) => {
    console.log("clicked");
    const name = e.target.value;
    const task = { ...list[index], name: name };
    const updatedList = [...list]; //copying list

    updatedList[index] = task; //updating index with latest task state

    setList(updatedList);
  };
  const onEnterTaskName = (e, index) => {
    // onChangeTaskName(e,index)
    setActiveEditIndex(null);
  };

  return (
    <div className="app ">
      <div
        className="card,app__card, mx-auto border "
        style={{ width: "40rem" }}
      >
        <Header />

        <Input
          className="w-50"
          value={input}
          onChange={handleInputChange}
          onSubmit={handleAddTask}
        />

        <Table
          data={filteredList}
          onChangeCheckBox={onChangeTaskStatus}
          onEdit={onEditHandle}
          onDelete={onDeleteHandle}
          activeIndex={activeEditIndex}
          onChangeTaskName={onChangeTaskName}
          onEnterTaskName={onEnterTaskName}
        />

        {/* <List
       data={filteredList}
       onChangeCheckBox={onChangeTaskStatus}
       />
        */}
        <Footer
          showAllTasks={showAllTasks}
          showActiveTasks={showActiveTasks}
          showCompletedTasks={showCompletedTasks}
          clearCompletedTasks={clearCompletedTasks}
        />
      </div>
    </div>
  );
}

export default App;
