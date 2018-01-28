import React, { Component } from 'react';
import './TodoList.css';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';
import * as apiCall from './api';

const APIURL = '/api/todos/';
class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos:[],
        }
        this.createTodo = this.createTodo.bind(this);
        this.deleteTodo = this.deleteTodo.bind(this);
        this.updateTodo = this.updateTodo.bind(this);
    }    

    async loadTodos() {
        let todos = await apiCall.getTodos();
        this.setState({todos});
    }

    async deleteTodo(id) {
        await apiCall.deleteTodos(id);
        const todos = this.state.todos.filter((todo) => (todo._id !== id));
        this.setState({todos});
    }

    async updateTodo(id, status) {
        await apiCall.updateTodo(id, status);
        const todos = this.state.todos.map((todo) => {
            if (todo._id === id)
                return {...todo, completed: !status}
            return todo;
        })
        this.setState({todos});

    }

    async createTodo(content) {
        //post to api for create, then receive the new todos, and up
        let todo = await apiCall.createTodo(content);
        this.setState({todos: [...this.state.todos, todo]});
   }
    
    componentWillMount() {
        this.loadTodos();
    }

    render() {
        let todos = this.state.todos.map(todo => (
            <TodoItem 
                updateTodo={this.updateTodo}
                deleteTodo={this.deleteTodo} 
                key={todo._id} 
                {...todo}/> 
        ));

        if (todos.length === 0) todos = <strong> Loading... </strong>

        return (
   
            <div className="todo-container">
                <h1> todo / List </h1>
                <TodoForm createTodo={this.createTodo}/>
                <ul className="todo-list">
                    
                    {todos}
                </ul>
            </div>
       )
   }
}

export default TodoList;