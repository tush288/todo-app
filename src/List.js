import React from "react";
import "antd/dist/antd.css";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { Button } from "react-bootstrap";

import "./List.css";

import { Modal, Nav, ListGroup, Form } from "react-bootstrap";

function TodoList(props) {
  console.log("props", props);
  return (
    <div className="list_modal w-100">
      <Modal.Dialog className="shadow-lg">
        <Modal.Header className="d-flex justify-content-between">
          <Modal.Title>Tasks</Modal.Title>

          <Button variant="primary" onClick={props.handleSort}>
            sort
          </Button>
        </Modal.Header>

        <Modal.Body>
          <div className=" ">
            <ListGroup className="d-flex justify-content-between">
              {props.data.map((item, index) => (
                <div className="list_grp">
                  <ListGroup.Item>
                    <Form.Check
                      aria-label="option 1"
                      checked={props.data[index].status}
                      onChange={(e) => props.onChangeCheckBox(e, index)}
                    />
                    {props.activeIndex !== index ? (
                      <div className="list_mapitem">{item.name}</div>
                    ) : (
                      <div className="list_input">
                        <Form.Control
                          value={item.name}
                          onChange={(e) => props.onChangeTaskName(e, index)}
                          onPressEnter={(e) => props.onEnterTaskName(e, index)}
                          type="text"
                          placeholder="Normal text"
                        />
                      </div>
                    )}
                    <div className="list_icons">
                      <AiFillEdit onClick={() => props.onEdit(index)} />

                      <AiFillDelete
                        style={{
                          fontSize: "25px",
                          marginLeft: "20%",
                        }}
                      />
                    </div>
                  </ListGroup.Item>
                </div>
              ))}
            </ListGroup>
          </div>
        </Modal.Body>

        <Modal.Footer>
          <div className="list_nav mx-auto">
            <Nav variant="pills" defaultActiveKey="/home">
              <Nav.Item>
                <Nav.Link eventKey="1" onClick={props.showAllTasks}>
                  all
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  eventKey="2"
                  data-toggle="tab"
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
