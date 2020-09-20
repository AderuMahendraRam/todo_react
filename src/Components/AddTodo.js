import React, { Component } from "react";
import Axios from 'axios';
class AddTodo extends Component {

    state = {
        name: ''
    }

    onChangeName = (e) => this.setState({ name: e.target.value })

    onSubmitTodo = (e) => {
        //alert("name : " + this.state.name)
        // const url = "https://cors-anywhere.herokuapp.com/https://todo-node-mongo.herokuapp.com/addTodo";
        const respBody = {
            name: this.state.name,
            isdone: "false"
        }
        // alert("name : " + this.state.name)
        Axios.post('https://cors-anywhere.herokuapp.com/https://todo-node-mongo.herokuapp.com/addTodo', respBody)
            .then(resp => {
                alert(resp)
                //this.viewTodoList();
            });
    }

    render() {
        return (
            <form onSubmit={this.onSubmitTodo} style={{ display: 'flex' }}>
                <input type="text" name="name" placeholder="Enter Todo"
                    style={{ flex: '10' }} value={this.state.name} onChange={this.onChangeName} />
                <input type="submit" value="Add Todo" className="btn" style={{ flex: '1' }} />
            </form>
        )

    };
}

export default AddTodo;
