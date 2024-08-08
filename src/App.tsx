import React, { useState } from 'react';
import AddTodo from './components/AddTodo';
import TodoItem from './components/TodoItem';
import TodoList from './components/TodoList';

type Todo = {
  id: number
  text: string
  completed: boolean
}
function App() {
  const [todos, setTodos] = useState<Todo[]>([])
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [editID, setEditID] = useState<number | null>(null);
  const [editText, setEditText] = useState<string>('')

  const addTodo = (text: string) => {
    if (isEditing && editID !== null) {
      updateTodo(editID, text);
      setIsEditing(false);
      setEditID(null);
      setEditText('')
    } else {
      const newTodo: Todo = { id: Date.now(), text: text, completed: false };
      setTodos([...todos, newTodo])
    }
  }
  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }
  const toggleTodo = (id: number) => {
    setTodos(todos.map(todo => (
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    )))
  }

  const updateTodo = (id: number, text: string) => {
    setTodos(todos.map(todo => (
      todo.id === id ? { ...todo, text } : todo
    )))
  }

  const startEditing = (id: number, text: string) => {
    setIsEditing(true);
    setEditID(id);
    setEditText(text)
  }

  return (
    <div className=" text-xl">
      <AddTodo isEditing={isEditing} editText={editText} setEditText={setEditText} addTodo={addTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo} toggleTodo={toggleTodo} startEditing={startEditing} />
    </div>
  );
}

export default App;
