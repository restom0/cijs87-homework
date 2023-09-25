import React, { useState, createContext, useEffect } from 'react';
import TodoHeader from '../components/TodoHeader';
import TodoList from '../components/TodoList';
import TodoFooter from '../components/TodoFooter';
import { TODOS } from '../data/Todos';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../components/Header';
import { Container, Row } from 'react-bootstrap';

export const ThemeContext = createContext(null);
const TodoPage = () => {
    const [todos, setTodos] = useState([]);
    const [theme, setTheme] = useState('light');
    const getTodo = () => {
        fetch('https://650cecd347af3fd22f680d9a.mockapi.io/todo')
            .then((res) => res.json()).then((res) => {
                setTodos(res);
            });
    }
    const addTodo = (newTodo) => {
        setTodos((prevTodos) => [...prevTodos, newTodo]);
    };

    const updateTodo = (id) => {
        setTodos(
            todos.map((todo) => {
                if (todo.id === id) {
                    todo.isCompleted = !todo.isCompleted;
                }
                return todo;
            })
        );
    };
    const editTodo = (id, text) => {
        setTodos(
            todos.map((todo) => {
                if (todo.id === id) {
                    todo.text = text;
                }
                return todo;
            })
        );
    };
    const deleteTodo = (id) => {
        setTodos((todos) => (todos.filter((todo) => todo.id !== id)))
    };
    const calculateRemainingTasks = () => {
        return todos.filter(todo => todo.isCompleted === false).length;
    };
    const toggleTheme = () => {
        setTheme((cur) => (cur === 'light' ? 'dark' : 'light'));
    }
    useEffect(() => {
        getTodo();
    }, [])
    return (
        <div>
            <ThemeContext.Provider value={{ theme, toggleTheme }}>
                <Header theme={theme} toggleTheme={toggleTheme} />
                <div className="mb-5" id={theme}>
                    <Container>
                        <Row className="row justify-content-center" id={theme}>
                            <h1 className="text-center mb-4">Todo App</h1>
                            <TodoHeader addTodo={addTodo} theme={theme} toggleTheme={toggleTheme} />
                            <TodoList todos={todos} updateTodo={updateTodo} editTodo={editTodo} deleleTodo={deleteTodo} theme={theme} />
                            <TodoFooter todos={todos} calculateRemainingTasks={calculateRemainingTasks} />
                        </Row>
                    </Container>
                </div>
            </ThemeContext.Provider>
        </div>
    );
}
export default TodoPage;
