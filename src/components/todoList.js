import React from "react";
import {TodoListItem} from "./todoListItem";

export const TodoList = ({todos}) => {

    const elements = todos.map(item => {
        const {id, ...itemProps} = item

        return <li key={id}>
            <TodoListItem
                {...itemProps}
                //Вверзу тоже саоме что и внизу
                // label={item.label}
                // important={item.important}
            />
        </li>;
    });

    return <ul>
        {elements}
    </ul>;
};


