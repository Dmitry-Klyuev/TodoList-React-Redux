import React from "react";
import {TodoListItem} from "./todoListItem";
import './todoList.css'

export const TodoList = ({todos}) => {

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
};


