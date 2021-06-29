import React from 'react'
import 'antd/dist/antd.css';
import  {Button} from 'antd';

function Footer(props) {
    return (
        <div>
            <Button onClick={props.showAllTasks}>All</Button>
      <Button onClick={props.showActiveTasks}>Active</Button>
      <Button onClick={props.showCompletedTasks}>Completed</Button>

      <Button onClick={props.clearCompletedTasks}>Clear Completed</Button> 

        </div>
    )
}

export default Footer
