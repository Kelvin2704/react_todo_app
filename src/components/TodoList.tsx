import React from 'react'
import TodoItem from './TodoItem'

interface TodoListProps {
    todos: { id: number, text: string, completed: boolean }[]
    deleteTodo: (id: number) => void
    toggleTodo: (id: number) => void
    startEditing: (id: number, text: string) => void

}


const TodoList: React.FC<TodoListProps> = ({ todos, deleteTodo, toggleTodo, startEditing }) => {
    const completedTodo = todos.filter((todo) => todo.completed);
    const imcompletedTodo = todos.filter((todo) => !todo.completed);
     
    return (
        <div className='p-3 h-full grid grid-cols-1 md:grid-cols-2 gap-2'>
            <div className='space-y-2'>
                <h1 className='w-full text-center text-xl font-bold'>Need to do</h1>
                <div className='space-y-2'>
                    {imcompletedTodo.map((todo) => (
                        <TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo} toggleTodo={toggleTodo} startEditing={startEditing} />
                    )
                    )}
                </div>
            </div>
            {/* map all todo that have completed is true */}
            <div className='space-y-2'>
                <h1 className='w-full text-center text-xl font-bold'>Completed</h1>
                <div className='space-y-2'>
                    {completedTodo.map((todo) => (
                        <TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo} toggleTodo={toggleTodo} startEditing={startEditing} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default TodoList