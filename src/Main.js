import React from "react";
import { useState, useEffect } from "react";
import List from "./List";
import Input from "./Input";
import Header from "./Header";
import "./Main.css";
import { connect } from "react-redux";
import { addTodo, changeInput, deleteTodo, updateState } from "./redux/Actions";

function Main(props) {
  const [activeEditIndex, setActiveEditIndex] = useState(null);
  const [sort, setSort] = useState("asc");
  const [status, setStatus] = useState("all");

  const {
    list,
    addTodo,
    deleteTodo,
    updateState,
    filteredList,
    input,
    changeInput,
  } = props;

  useEffect(() => {
    let updatedList = [];
    if (status === "active") {
      updatedList = list.filter((task) => !task.status);
      updateState({ filteredList: updatedList });
    } else if (status === "completed") {
      updatedList = list.filter((task) => task.status);
      updateState({ filteredList: updatedList });
    } else {
      updateState({ filteredList: list });
    }
  }, [status, list]);

  const handleAddTask = (e) => {
    if (!input) {
      console.log("enter");
    } else {
      const newTask = { name: input, status: false, date: new Date() };
      addTodo(newTask);

      changeInput("");
    }
  };

  const handleSort = () => {
    const updatedList = [...list];
    if (sort === "asc") {
      updatedList.sort((a, b) => a.date.getTime() - b.date.getTime());
      updateState({ list: updatedList });
      setSort("desc");
    } else {
      updatedList.sort((a, b) => b.date.getTime() - a.date.getTime());
      setSort("asc");
    }
    updateState({ list: updatedList });
  };

  const onDateChange = (index, date) => {
    console.log(index, date);
    const task = { ...list[index], date: date };

    const updatedList = [...list];

    updatedList[index] = task;
  };

  const handleInputChange = (e) => changeInput(e.target.value);

  const onChangeTaskStatus = (e, index) => {
    const status = e.target.checked;

    const task = { ...list[index], status: status };
    const updatedList = [...list];
    updatedList[index] = task;
    updateState({ list: updatedList });
  };

  const showAllTasks = () => {
    setStatus("all");
  };
  const showActiveTasks = () => {
    setStatus("active");
  };
  const showCompletedTasks = () => {
    setStatus("completed");
  };
  const clearCompletedTasks = () => {
    const activeTasksList = list.filter((task) => !task.status);
    updateState({ list: activeTasksList });
  };

  const onEditHandle = (index) => {
    setActiveEditIndex(index);
  };
  const onDeleteHandle = (index) => {
    deleteTodo(index);
  };
  const onChangeTaskName = (e, index) => {
    console.log("clicked");
    const name = e.target.value;
    const task = { ...list[index], name: name };
    const updatedList = [...list];

    updatedList[index] = task;
    updateState({ list: updatedList });
  };
  const onEnterTaskName = (e, index) => {
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
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    list: state.list,
    filteredList: state.filteredList,
    input: state.input,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (task) => dispatch(addTodo(task)),
    deleteTodo: (taskIndex) => dispatch(deleteTodo(taskIndex)),
    updateState: (data) => dispatch(updateState(data)),
    changeInput: (value) => dispatch(changeInput(value)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Main);
