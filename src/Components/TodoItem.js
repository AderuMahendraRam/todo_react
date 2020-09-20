import React, { Component } from "react";

class TodoItem extends Component {
    getStyle = (isDone) => {
        if (isDone === "true") {
            return {
                textDecoration: 'line-through'
            }
        }
        else {
            return {
                textDecoration: 'none'
            }
        }
    }
    render() {
        const alwaysTrue = 'true'
        return this.props.todoForItem.map((todo) => (
            <div key={todo._id} className='eachTodo' style={this.getStyle(todo.isdone)}>
                <input type="checkbox" checked={(alwaysTrue === todo.isdone)} onChange={this.props.markComplete.bind(this, todo._id)} />
                {"  "}{todo.name}
                <button onClick={this.props.delTodo.bind(this, todo._id)} style={btnStyle}>X</button>
            </div>
        ));
    };
}

const btnStyle = {
    background: "#ff0000",
    color: '#fff',
    border: 'none',
    paddingLeft: '5px',
    paddingRight: '5px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}
export default TodoItem;
