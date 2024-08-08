import React, { useEffect, useState } from 'react'
type AddTodo = {
    addTodo: (text: string) => void
    isEditing: boolean
    editText: string
    setEditText: (text: string) => void
}

const AddTodo: React.FC<AddTodo> = ({ addTodo, isEditing, editText, setEditText }) => {
    const [text, setText] = useState(editText);

    useEffect(() => {
        setText(editText)
    }, [editText])

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!text.trim()) return;
        addTodo(text);
        setText("")
    }

    return (
        <form className='border' onSubmit={handleSubmit}  >
            <input
                type="text"
                value={text}
                onChange={(e) => {
                    setText(e.target.value);
                    setEditText(e.target.value)
                }}
                placeholder={isEditing ? 'Edit todo' : 'Add new todo'} />
            <button type='submit'>
                {isEditing ? 'Update' : 'Add'}
            </button>
        </form>
    )
}

export default AddTodo