import React, { useState } from 'react'
type TodoItemProps = {
    todo: { id: number, text: string, completed: boolean }
    deleteTodo: (id: number) => void
    toggleTodo: (id: number) => void
    startEditing: (id: number, text: string) => void

}
const TodoItem: React.FC<TodoItemProps> = ({ todo, deleteTodo, toggleTodo, startEditing }) => {

    return (
        <div className='flex space-x-2'>
            <div className={`flex $${todo.completed ? ' text-green-500' : ''}`}
                onClick={() => toggleTodo(todo.id)}>{todo.text}</div>
            {!todo.completed && <button onClick={() => startEditing(todo.id, todo.text)}>Edit</button>}
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        </div>
    )
}

export default TodoItem