import React from 'react';
import Todo from './Todo';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Row, Table } from 'react-bootstrap';

const TodoList = ({ todos, updateTodo, editTodo, deleleTodo, theme }) => {
    return (
        <div className="row mb-3" id={theme}>
            <ul className="list-group" id={theme}>
                <li className="list-group-item" id={theme}>
                    <Row>
                        <Col className='col-md-8'>Tên task</Col>
                        <Col className='col-md-2'>estPromodoro</Col>
                        <Col className='col-md-2'>Tùy chỉnh</Col>
                    </Row>
                </li>
                {
                    todos.length > 0
                        ?
                        todos.map((todo) => (
                            <Todo key={todo.id} todo={todo} isCompleted={todo.isCompleted} updateTodo={updateTodo} editTodo={editTodo} theme={theme} deleleTodo={deleleTodo} />

                        ))
                        :
                        <div></div>
                }
            </ul>
        </div>
    );
}

export default TodoList;
