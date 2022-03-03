import React from "react";
import {TodoListItem} from "../todoListItem/todoListItem";
import './todoList.css'

export class TodoList extends React.Component {

    render() {
        const {todos} = this.props
        const elements = todos.map(item => {
            const {id, ...itemProps} = item

            return <li key={id} className="list-group-item">
                <TodoListItem
                    {...itemProps}
                    //Вверху тоже саоме что и внизу
                    // label={item.label}
                    // important={item.important}
                />
            </li>;
        });

        return <ul>
            {elements}
        </ul>;
    }

}


