import {Header} from "../header/header";
import {SearchPanel} from "../searchPanel/searchPanel";
import {ItemStatusFilter} from "../itemStatusFilter/itemStatusFilter";
import {TodoList} from "../todoList/todoList";
import React from "react";
import './app.css'

export const App = () => {
    const todoData = [
        {id: 1, label: 'Drink coffee', important: false},
        {id: 2, label: 'Make Awesome App', important: true},
        {id: 3, label: 'Have a lunch', important: false},
    ];

    return (
        <div className="todo-app">
            <Header toDo={1} done={3}/>
            <div className='top-panel d-flex'>
                <SearchPanel/>
                <ItemStatusFilter/>
            </div>
            <TodoList todos={todoData}/>
        </div>
    );
};