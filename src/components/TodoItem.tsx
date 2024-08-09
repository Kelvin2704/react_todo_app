import React, { useState } from 'react'
import { FaPencilAlt, FaTrash } from "react-icons/fa";
interface TodoItemProps {
    todo: { id: number, text: string, completed: boolean }
    deleteTodo: (id: number) => void
    toggleTodo: (id: number) => void
    startEditing: (id: number, text: string) => void

}
const TodoItem: React.FC<TodoItemProps> = ({ todo, deleteTodo, toggleTodo, startEditing }) => {

    return (
        <div className={`${todo.completed ? 'bg-green-500 border-green-400' : 'bg-yellow-500 border-yellow-400 '} p-2 md:p-5 h-full space-y-2 bg-clip-padding backdrop-blur-md bg-opacity-40 rounded-md drop-shadow-lg border-4  hover:scale-105 transition-transform animate-fadeInUp font-bold text-slate-100`}>
            <div className='flex space-x-[3px]'>
                {[1, 2, 3].map((circle, index) => (
                    <div key={index} className="size-[5px] rounded-full bg-slate-50"></div>
                ))}

            </div>
            <div className='flex justify-between items-start'>
                <div className={`${todo.completed ? 'line-through' : ''}  text-pretty w-2/3 h-full capitalize`}
                >
                    <p className='break-words'>
                        {todo.text}
                    </p>
                </div>
                <div className='space-x-2'>
                    {!todo.completed && <button onClick={() => startEditing(todo.id, todo.text)}><FaPencilAlt /></button>}
                    <button onClick={() => deleteTodo(todo.id)}><FaTrash /></button>
                    <input className='cursor-pointer' type="checkbox" checked={todo.completed} onChange={() => toggleTodo(todo.id)} />
                </div>
            </div>
        </div>
    )
}

export default TodoItem