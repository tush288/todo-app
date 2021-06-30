import React from 'react'
import 'antd/dist/antd.css';
import  { List,Typography,Checkbox} from 'antd';
import './List.css'

function TodoList(props) {
  
    return (
        
             <List
        className="app__list"
        bordered
        dataSource={props.data}
        renderItem={(item, index) => (
          <List.Item>
            <Typography.Text mark>
              <Checkbox className="app__list__checkbox"
                type="checkbox"
                checked={props.data[index].status}
                onChange={(e) => props.onChangeCheckBox(e, index)}
              />
            </Typography.Text>
            {item.name}
          </List.Item>
        )}
      />
      
        
    )
}

export default TodoList
