import React from "react";
import {TodoListItem} from "./todoListItem";

export const TodoList = () => {
    return <ul>
        <li><TodoListItem label='DrinkCoffee'/></li>
        <li><TodoListItem label='Learn React' important/></li>
    </ul>;
}


