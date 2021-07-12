import React from "react";
import { useState, useEffect } from "react";
import "antd/dist/antd.css";
// import Footer from "./Footer";
import List from "./List";
import Input from "./Input";
// import Table from "./Table";
import Header from "./Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Main.css";
import { connect } from "react-redux";
import { addTodo, updateState } from "./Actions";

function Main(props) {
  const [input, setInput] = useState("");
  const [activeEditIndex, setActiveEditIndex] = useState(null);
  const [sort, setSort] = useState("asc");
  const [status, setStatus] = useState("all");

  console.log("props", props.list);

  useEffect(() => {
    console.log(status);
    let updatedList = [];
    if (status === "active") {
      updatedList = list.filter((task) => !task.status);
      // setFilteredList(updatedList);
      updateState({ filteredList: updatedList });
    } else if (status === "completed") {
      updatedList = list.filter((task) => task.status);
      // setFilteredList(updatedList);
      updateState({ filteredList: updatedList });
    } else {
      // setFilteredList(list);
      updateState({ filteredList: updatedList });
    }
  }, [status, list]);

  const handleAddTask = (e) => {
    if (!input) {
      console.log("enter");
    } else {
      const newTask = { name: input, status: false, date: new Date() };
      console.log("list", props.list);

      props.addTodo(newTask);
      const data = [...list, newTask];
      setList(data);
      setInput("");
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
    // setFilteredList(list);
    setStatus("all");
    console.log(list);
  };
  const showActiveTasks = () => {
    setStatus("active");
    // setFilteredList(activeTasksList);
  };
  const showCompletedTasks = () => {
    setStatus("completed");
    // setFilteredList(completedTasksList);
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

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    list: state.list,
    filetereList: state.filteredList,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (task) => dispatch(addTodo(task)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Main);
