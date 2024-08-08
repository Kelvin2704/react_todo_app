import React from 'react'
import TodoItem from './TodoItem'

type TodoListProps = {
    todos: { id: number, text: string, completed: boolean }[]
    deleteTodo: (id: number) => void
    toggleTodo: (id: number) => void
    startEditing: (id: number, text: string) => void

}


const TodoList: React.FC<TodoListProps> = ({ todos, deleteTodo, toggleTodo,startEditing }) => {
    return (
        <div>
            {todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo} toggleTodo={toggleTodo} startEditing={startEditing} />
            )
            )}
        </div>
    )
}

export default TodoList