import "./App.css";
import { useState, useEffect } from "react";
import "antd/dist/antd.css";
import Footer from "./Footer";
import List from "./List";
import Input from "./Input";
// import Table from "./Table";
import Header from "./Header";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [list, setList] = useState([]);
  const [input, setInput] = useState("");
  const [filteredList, setFilteredList] = useState(list);
  const [activeEditIndex, setActiveEditIndex] = useState(null);
  const [sort, setSort] = useState("asc");

  useEffect(() => {
    setFilteredList(list);
  }, [list]);

  const handleAddTask = (e) => {
    if (!input) {
      console.log("enter");
    } else {
      const newTask = { name: input, status: false, date: new Date() };
      const data = [...list, newTask];
      setList(data);
      setInput("");
      console.log(list);
    }
  };

  const handleSort = () => {
    const updatedList = [...list];
    if (sort === "asc") {
      updatedList.sort((a, b) => a.date.getTime() - b.date.getTime());
      setList(updatedList);
      setSort("desc");
    } else {
      updatedList.sort((a, b) => b.date.getTime() - a.date.getTime());
      setSort("asc");
    }
    setList(updatedList);
  };

  const onDateChange = (index, date) => {
    console.log(index, date);
    const task = { ...list[index], date: date };

    const updatedList = [...list];

    updatedList[index] = task;

    setList(updatedList);
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
    <div className="app">
      <Header />

      <Input
        className="h"
        value={input}
        onChange={handleInputChange}
        onSubmit={handleAddTask}
      />
      {/* {filteredList.length !== 0 && (
        <Table
          data={filteredList}
          onChangeCheckBox={onChangeTaskStatus}
          onEdit={onEditHandle}
          onDelete={onDeleteHandle}
          activeIndex={activeEditIndex}
          onChangeTaskName={onChangeTaskName}
          onEnterTaskName={onEnterTaskName}
          onDateChange={onDateChange}
          handleSort={handleSort}
          list={list}
        />
      )} */}
      {/* {filteredList.length !== 0 && ( */}
      <List
        data={filteredList}
        onChangeCheckBox={onChangeTaskStatus}
        onChangeTaskName={onChangeTaskName}
        showAllTasks={showAllTasks}
        showActiveTasks={showActiveTasks}
        showCompletedTasks={showCompletedTasks}
        clearCompletedTasks={clearCompletedTasks}
        activeIndex={activeEditIndex}
        onEnterTaskName={onEnterTaskName}
        onEdit={onEditHandle}
        onDelete={onDeleteHandle}
        handleSort={handleSort}
      />
      {/* )} */}

      {/* {filteredList.length !== 0 && (
        <Footer
          showAllTasks={showAllTasks}
          showActiveTasks={showActiveTasks}
          showCompletedTasks={showCompletedTasks}
          clearCompletedTasks={clearCompletedTasks}
        />
      )} */}
    </div>
  );
}

export default App;
