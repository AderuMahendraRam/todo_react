import React, { Component } from "react";
import TodoItem from './TodoItem';
import Axios from 'axios';
import Loader from '../Common/Loader';
import AddTodo from '../Components/AddTodo';

class Todo extends Component {

    state = {
        nodoTodoList: [],
        loading: true
    }

    /*  componentDidMount() {
         console.log("called fetch");
         fetch('https://cors-anywhere.herokuapp.com/https://todo-node-mongo.herokuapp.com/viewTodos').then(response => {
             return response.json();
         })
             .then(todoListRes => {
                 this.setState({ nodoTodoList: todoListRes })
             });
     } */
    componentDidMount() {
        this.viewTodoList();
    }

    viewTodoList = () => {
        Axios.get('https://cors-anywhere.herokuapp.com/https://todo-node-mongo.herokuapp.com/viewTodos').then(response => {
            this.setState({ nodoTodoList: response.data })
            this.setState({ loading: false })
        });
    }

    updateTodo = (id, reqBody) => {
        Axios.patch(`https://cors-anywhere.herokuapp.com/https://todo-node-mongo.herokuapp.com/updateTodo/${id}`, reqBody)
            .then(resp => {
                this.viewTodoList();
            });
    }

    markComplete = (id) => {
        for (var todo in this.state.nodoTodoList) {
            var currentId = this.state.nodoTodoList[todo]._id;
            if (currentId === id) {
                var reqBody = {};
                if (this.state.nodoTodoList[todo].isdone === "true") {
                    reqBody = { isdone: "false" }
                }
                else {
                    reqBody = { isdone: "true" }
                }
                this.updateTodo(currentId, reqBody);
            }
        }
    }

    updateTodo = (id, reqBody) => {
        this.setState({ loading: true })
        Axios.patch(`https://cors-anywhere.herokuapp.com/https://todo-node-mongo.herokuapp.com/updateTodo/${id}`, reqBody)
            .then(resp => {
                this.viewTodoList();
            });
    }

    delTodo = (id) => {
        this.setState({ loading: true })
        Axios.delete(`https://cors-anywhere.herokuapp.com/https://todo-node-mongo.herokuapp.com/deleteTodo/${id}`)
            .then(resp => {
                this.viewTodoList();
            });
    }

    render() {
        if (this.state.loading) return <Loader />;
        return (
            <div>
                <AddTodo />
                <TodoItem todoForItem={this.state.nodoTodoList} markComplete={this.markComplete} delTodo={this.delTodo} />
            </div>
        );
    }
}

export default Todo;
