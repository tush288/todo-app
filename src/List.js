import React from "react";
import "antd/dist/antd.css";
import { List, Typography, Checkbox, Input, Button, Popconfirm } from "antd";
import "./List.css";
import DateTimePicker from "react-datetime-picker";
import { BsFillClockFill } from "react-icons/bs";
import { Modal } from "react-bootstrap";

function TodoList(props) {
  return (
    <div className="list_modal">
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>
            Tasks
            <Button onClick={props.handleSort}>sort</Button>
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div className="list">
            <List
              className="app__list"
              bordered
              dataSource={props.data}
              renderItem={(item, index) => (
                <List.Item>
                  <Typography.Text mark>
                    <Checkbox
                      className="app__list__checkbox"
                      type="checkbox"
                      checked={props.data[index].status}
                      onChange={(e) => props.onChangeCheckBox(e, index)}
                    />
                  </Typography.Text>
                  {props.activeIndex !== index ? (
                    <div className="list_mapitem">{item.name}</div>
                  ) : (
                    <Input
                      className="list_input"
                      value={item.name}
                      onChange={(e) => props.onChangeTaskName(e, index)}
                      onPressEnter={(e) => props.onEnterTaskName(e, index)}
                    />
                  )}
                  <div className="table_data_datepicker">
                    <DateTimePicker
                      className="table_data_datepicker"
                      value={item.date}
                      onChange={(date) => props.onDateChange(index, date)}
                      calendarIcon={<BsFillClockFill />}
                      format="y-MM-dd h:mm a"
                    ></DateTimePicker>
                  </div>
                  <div className="list_buttons">
                    <Button
                      className="btn btn-warning table_button_edit "
                      onClick={() => props.onEdit(index)}
                    >
                      edit
                    </Button>

                    <Popconfirm
                      title="Are you sure to delete this task?"
                      onConfirm={() => props.onDelete(index)}
                      onCancel={() => {}}
                      okText="Yes"
                      cancelText="No"
                    >
                      <Button className="btn btn-danger">delete</Button>
                    </Popconfirm>
                  </div>
                </List.Item>
              )}
            />
          </div>
        </Modal.Body>

        <Modal.Footer>
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
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
}

export default TodoList;
