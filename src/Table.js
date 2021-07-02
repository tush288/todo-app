import React from "react";
import { Checkbox, Button, Popconfirm, Input } from "antd";
import "./Table.css";

function Table(props) {
  return (
    <div>
      <table className="table table table-dark table-hover">
        <thead>
          <tr>
            <th scope="col">Status</th>
            <th scope="col">Name</th>
            <th scope="col">Action</th>
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
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
