import React from "react";
import "antd/dist/antd.css";
import { Input, Button } from "antd";
import "./Input.css";

function InputWithSubmit(props) {
  return (
    <div className="app__input">
      <Input
        value={props.value}
        type="text"
        placeholder="enter the task "
        onChange={props.onChange}
        onPressEnter={props.onSubmit}
      />

      <Button
        type="primary"
        className="app__button,btn btn-success"
        onClick={props.onSubmit}
      >
        add{" "}
      </Button>
    </div>
  );
}

export default InputWithSubmit;
