import React from "react";
import "antd/dist/antd.css";
import { Button } from "antd";
import "./Footer.css";

function Footer(props) {
  return (
    <div>
      <Button
        className="btn btn-secondary footer_button"
        onClick={props.showAllTasks}
      >
        All
      </Button>
      <Button
        className="btn btn-secondary footer_button"
        onClick={props.showActiveTasks}
      >
        Active
      </Button>
      <Button
        className="btn btn-secondary footer_button"
        onClick={props.showCompletedTasks}
      >
        Completed
      </Button>

      <Button
        className="btn btn-secondary footer_button"
        onClick={props.clearCompletedTasks}
      >
        Clear Completed
      </Button>
    </div>
  );
}

export default Footer;
