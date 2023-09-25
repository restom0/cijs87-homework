import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Col, Row } from 'react-bootstrap';

const Todo = ({ todo, updateTodo, editTodo, deleleTodo, theme }) => {
    const { isCompleted, id, estPomodoros } = todo;
    const [item, setItem] = useState('');
    const [edit, setEdit] = useState(false);
    const changeEditTodo = (old) => {
        setEdit(!edit);
        setItem(old);
    }
    const handleEditTodo = (event) => {
        if (event.key === "Enter" && item) {
            editTodo(id, item);
            setEdit(false);
            setItem('');
        }
    }
    
    return (
        <li className="list-group-item" id={theme}>
            <Row>
                <Col className='col-md-8'>
                    <input className="form-check-input me-1" type="checkbox" checked={isCompleted} onChange={() => updateTodo(id)} />
                    {
                        edit === true ?
                            <input type="text" value={item} onChange={(e) => (setItem(e.target.value))} onKeyDown={handleEditTodo} />
                            :
                            (isCompleted === true ?
                                <label className="form-check-label" onDoubleClick={() => changeEditTodo(todo.text)} ><s>{todo.text}</s></label>
                                :
                                <label className="form-check-label" onDoubleClick={() => changeEditTodo(todo.text)}>{todo.text}</label>
                            )
                    }
                </Col>
                <Col className='col-md-2'>
                    {todo.estPomodoros}
                </Col>
                <Col className='col-md-2'>
                    <Button variant="danger" onClick={() => { deleleTodo(todo.id) }}>Xóa</Button>
                </Col>
            </Row>
        </li >
    );
}

export default Todo;
