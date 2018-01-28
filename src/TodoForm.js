import React, {Component} from 'react';
import './TodoForm.css';

class TodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: ''
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({inputValue: e.target.value})
    }

    onSubmit(e) {
        e.preventDefault();
        let content = this.state.inputValue;
        this.setState({inputValue: ''});
        this.props.createTodo(content);
    }

    render() {

        const {handleSubmit} = this.props;
        const inputValue = this.state.inputValue;
        return (
            <form onSubmit={this.onSubmit}>
            <input className="input-form" 
                onChange = {this.onChange}
                type='text' 
                placeholder="what's stopping you from being awesome?"
                value={inputValue}
                />
            <input className="submit-btn" type='submit' value='add'/>
            </form>
        )
    }
}

export default TodoForm;