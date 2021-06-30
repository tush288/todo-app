import React from "react";
import { Checkbox, Button, Popconfirm, Input } from "antd";

function Table(props) {
  return (
    <div>
      <table className="table">
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
              <td scope="row">
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
                <Button onClick={() => props.onEdit(index)}>edit</Button>

                <Popconfirm
                  title="Are you sure to delete this task?"
                  onConfirm={() => props.onDelete(index)}
                  onCancel={() => {}}
                  okText="Yes"
                  cancelText="No"
                >
                  <Button>delete</Button>
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
