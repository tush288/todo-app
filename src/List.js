import React from "react";
import "antd/dist/antd.css";
import { List, Typography, Checkbox, Input, Button, Popconfirm } from "antd";
import "./List.css";
import DateTimePicker from "react-datetime-picker";
import { BsFillClockFill } from "react-icons/bs";
import { Modal, Nav } from "react-bootstrap";

function TodoList(props) {
  // const [active, setActive] = useState("all");
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
              dataSource={props.data}
              renderItem={(item, index) => (
                <List.Item>
                  <Typography.Text mark>
                    <div className="list_checkbox">
                      <Checkbox
                        type="checkbox"
                        checked={props.data[index].status}
                        onChange={(e) => props.onChangeCheckBox(e, index)}
                      />
                    </div>
                  </Typography.Text>
                  {props.activeIndex !== index ? (
                    <div className="list_mapitem">{item.name}</div>
                  ) : (
                    <div className="list_input">
                      <Input
                        value={item.name}
                        onChange={(e) => props.onChangeTaskName(e, index)}
                        onPressEnter={(e) => props.onEnterTaskName(e, index)}
                      />
                    </div>
                  )}

                  {/* <div className="table_data_datepicker">
                    <DateTimePicker
                      className="table_data_datepicker"
                      value={item.date}
                      onChange={(date) => props.onDateChange(index, date)}
                      // calendarIcon={<BsFillClockFill />}
                      format="y-MM-dd h:mm a"
                    ></DateTimePicker>
                  </div> */}
                  <div className="list_buttons">
                    <Button
                      className=" btn "
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
                      <Button className="btn ">delete</Button>
                    </Popconfirm>
                  </div>
                </List.Item>
              )}
            />
          </div>
        </Modal.Body>

        <Modal.Footer>
          <div className="list_nav">
            <Nav variant="pills" defaultActiveKey="/home">
              <Nav.Item>
                <Nav.Link
                  onChange={(e) => console.log(e, "e")}
                  eventKey="1"
                  onClick={props.showAllTasks}
                >
                  all
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  eventKey="2"
                  data-toggle="tab"
                  active
                  onClick={props.showActiveTasks}
                >
                  active
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="3" onClick={props.showCompletedTasks}>
                  completed
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="4" onClick={props.clearCompletedTasks}>
                  clear completed
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </div>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
}

export default TodoList;
