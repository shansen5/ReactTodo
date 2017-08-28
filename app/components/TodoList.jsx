import React from 'react';
import { connect } from 'react-redux';
import Todo from 'Todo';
import TodoApi from 'TodoApi';

export class TodoList extends React.Component {
    render() {
        var { todos, showCompleted, searchText } = this.props;
        var renderTodos = () => {
            if ( todos.length === 0 ) {
                return (
                    <p className="container__message">Nothing to do</p>
                )
            }
            return TodoApi.filterTodos( todos, showCompleted, searchText ).map( (todo) => {
                return (
                    // ... is spread function.  Each attribute of todo is passed
                    // as a property with the key's name.
                    <Todo key={todo.id} {...todo}/>
                )
            })
        }
        return (
            <div>
                {renderTodos()}
            </div>
        )
    }
}

export default connect( 
    ( state ) => {
        return state;
    }
)( TodoList );