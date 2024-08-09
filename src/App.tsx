import React, { useState } from 'react';
import AddTodo from './components/AddTodo';
import TodoItem from './components/TodoItem';
import TodoList from './components/TodoList';
import { FaSquarePen } from "react-icons/fa6";

interface Todo {
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
      const newTodo: Todo = { id: Date.now(), text, completed: false };
      setTodos([...todos, newTodo])
    }
  }
  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
    setIsEditing(false);
    setEditID(null);
    setEditText('')
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
    setEditText(text);
    console.log(editID)
  }

  return (
    <div className='bg-slate-900 text-slate-200'>
      <div className="container max-w-screen-sm mx-auto py-10">
        <div className='space-y-3'>
          <h1 className='text-6xl underline underline-offset-8 decoration-yellow-400 text-slate-200 font-bold w-full flex items-center justify-center gap-1 p-3'>Just do it! </h1>
          <div className='space-y-2'>
            <AddTodo isEditing={isEditing} editText={editText} setEditText={setEditText} addTodo={addTodo} />
            <TodoList todos={todos} deleteTodo={deleteTodo} toggleTodo={toggleTodo} startEditing={startEditing} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
