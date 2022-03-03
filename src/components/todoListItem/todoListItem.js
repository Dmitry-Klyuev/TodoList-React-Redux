import React from 'react';

export class TodoListItem extends React.Component {

    onLabelClickHandler = () => {
        console.log(`Done: ${this.props.label} `);
    };

    render() {
        const {label, important = false} = this.props;
        const style = {
            color: important ? 'steelblue' : 'black',
            fontWeight: important ? 'bold' : 'normal',
        };
        return (
            <span className="todo-list-item">
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