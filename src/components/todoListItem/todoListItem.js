import React from 'react';
import './todoListItem.css'

export class TodoListItem extends React.Component {

   state= {
       done: false
   }

    onLabelClickHandler = () => {
        this.setState( {
            done: !this.state.done
        })
    };

    render() {
        const {label, important = false} = this.props;
        const {done} = this.state

        const style = {
            color: important ? 'steelblue' : 'black',
            fontWeight: important ? 'bold' : 'normal',
        };
        return (
            <span className={this.state.done ? 'todo-list-item done' : 'todo-list-item'}>
      <span
          className="todo-list-item-label"
          style={style}
          onClick={this.onLabelClickHandler}
      >
        {label}
      </span>

      <button type="button"
              className="btn btn-outline-success btn-sm float-right">
        <i className="bi bi-exclamation"/>
      </button>

      <button type="button"
              className="btn btn-outline-danger btn-sm float-right">
        <i className="bi bi-trash"/>
      </button>
    </span>
        );

    }
}