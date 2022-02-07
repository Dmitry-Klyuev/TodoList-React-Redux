import React from "react";
import ReactDOM from 'react-dom';
import {TodoList} from "./components/todoList";
import {Header} from "./components/header";
import {SearchPanel} from "./components/searchPanel";

const App = () => {
    return <div>
        <Header/>
        <SearchPanel/>
        <TodoList/>
    </div>
}


ReactDOM.render(<App/>,
    document.getElementById('root'));