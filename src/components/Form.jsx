import React, { useState } from 'react'

const Form = ({ addNote }) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();

        // App.jsx se aaye huye function ko call karenge
        addNote(title, desc);

        // Form khali karne ke liye
        setTitle("");
        setDesc("");
    }
    return (
        <div className='w-full lg:w-1/2'>
            <h1 className='pb-5 text-4xl font-bold ml-5 text-center'>Add Notes</h1>
            <form onSubmit={submitHandler} className='flex flex-col gap-4'>
                <input
                    type="text" required
                    placeholder='Enter Notes Heading'
                    className='px-5 py-2 border-2 border-white bg-transparent outline-none rounded font-medium w-full'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <textarea
                    placeholder='Write Details'
                    className='px-5 py-2 border-2 border-white bg-transparent outline-none rounded font-medium h-32 w-full'
                    value={desc}
                    onChange={(e) => setDesc(e.target.value)}
                ></textarea>
                <button className='bg-white text-black font-bold py-2 px-5 rounded w-full hover:bg-gray-200 transition-colors'>
                    Add Note
                </button>
            </form>
        </div>
    )
}

export default Form
