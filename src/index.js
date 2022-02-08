import React from "react";
import ReactDOM from 'react-dom';
import {TodoList} from "./components/todoList";
import {Header} from "./components/header";
import {SearchPanel} from "./components/searchPanel";
import {ItemStatusFilter} from "./components/itemStatusFilter";
import './index.css'

const App = () => {
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


ReactDOM.render(<App/>,
    document.getElementById('root'));