import React, { useEffect, useState } from 'react'
import { FaCheck, FaPlus } from 'react-icons/fa';

interface AddTodo {
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
        <form className='p-3' onSubmit={handleSubmit}  >
            <div className={`${isEditing ? 'scale-110 bg-slate-100 text-slate-800' : 'bg-slate-800 text-slate-200'} flex justify-center items-center border-2 border-slate-600  overflow-hidden rounded-md px-5 w-[90%] m-auto transition-transform`}>
                <input
                    type="text"
                    value={isEditing ? editText : text}
                    onChange={(e) => {
                        setText(e.target.value);
                        setEditText(e.target.value)
                    }}
                    placeholder={isEditing ? `${editText}` : 'Add new todo'}
                    className='p-3 h-full bg-transparent focus:outline-none w-full overflow-hidden transition-transform font-bold' />
                <button type='submit' className=' flex justify-center items-center bg-slate-100 p-1 rounded-full text-slate-800 hover:scale-110 transition-transform'>
                    {isEditing ? <FaCheck /> : <FaPlus />}
                </button>
            </div>
        </form>
    )
}

export default AddTodo