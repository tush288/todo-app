import React from "react";
import { Checkbox, Button, Popconfirm, Input } from "antd";
import "./Table.css";
import { useState } from "react";
import moment from "moment";
import DateTimePicker from "react-datetime-picker";
import { BsFillClockFill } from "react-icons/bs";
import { List } from "rc-field-form";

function Table(props) {
  // const [value, onChange] = useState(new Date());
  // const [show, setShow] = useState(false);
  console.log(props.data);

  return (
    <div>
      <table className="table table table-dark table-hover">
        <thead>
          <tr>
            <th scope="col">Status</th>
            <th scope="col">Name</th>
            <th scope="col">Time</th>
            <th scope="col">Action</th>
            <th scope="col">
              <Button onClick={props.handleSort}>sort</Button>
            </th>
          </tr>
        </thead>
        <tbody>
          {props.data.map((item, index) => (
            <tr key={index}>
              <td>
                <Checkbox
                  className="app__list__checkbox"
                  type="checkbox"
                  checked={props.data[index].status}
                  onChange={(e) => props.onChangeCheckBox(e, index)}
                />
              </td>
              <td>
                {props.activeIndex !== index ? (
                  item.name
                ) : (
                  <Input
                    value={item.name}
                    onChange={(e) => props.onChangeTaskName(e, index)}
                    onPressEnter={(e) => props.onEnterTaskName(e, index)}
                  />
                )}
              </td>
              <td>
                {/* {moment(item.date).format("Do MMM YY,h:mm a")} */}

                <DateTimePicker
                  value={item.date}
                  onChange={(date) => props.onDateChange(index, date)}
                ></DateTimePicker>

                <BsFillClockFill />
              </td>
              <td>
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
              </td>
              <td></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
