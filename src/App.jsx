import React, { useState } from 'react'

const App = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [task, settask] = useState([])
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Form Submitted");

    let CopyTask = [...task]
    CopyTask.push({ title, desc })
    settask(CopyTask)

    setTitle("");
    setDesc("");
  }
  const deleteFnc = (idx)=>{
    let copyTask = [...task]
    copyTask.splice(idx,1)
    settask(copyTask)
  }
  return (

    <div className='min-h-screen bg-black text-white flex flex-col lg:flex-row p-10 gap-10'>


      <div className='w-full lg:w-1/2'><h1 className='pb-5 text-4xl font-bold ml-5 text-center'>Add Notes</h1>
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

      <div className='w-full lg:w-1/2 border-t lg:border-t-0 lg:border-l pt-10 lg:pt-0'>
        <h1 className='pb-5 text-4xl font-bold ml-5 text-center'>Your Recent Notes</h1>
        <div className=' flex flex-wrap gap-5 mt-5 ml-5 justify-center lg:justify-start'>
          {task.map((elm, idx) => {
            
            return (
              <div key={idx} className='h-48 w-44 bg-gradient-to-br from-yellow-100 to-yellow-200 shadow-xl rounded-lg p-4 flex flex-col relative border-t-8 border-yellow-400 rotate-1 hover:rotate-0 transition-transform cursor-pointer'>

                <div className="absolute top-[-10px] left-1/2 -translate-x-1/2 w-8 h-8 bg-red-500 rounded-full shadow-md"></div>

                <h3 className='text-gray-800 text-xl font-bold border-b border-yellow-300 pb-2 mb-2 break-words'>{elm.title}</h3>
                <p className='text-gray-600 text-sm overflow-y-auto leading-tight'>{elm.desc}</p>
                <button 
                // Sahi tarika brackets ke sath parameter bhejne ka
onClick={() => deleteFnc(idx)}
                className='absolute bottom-2 right-2 bg-red-500 hover:bg-red-600 text-white text-[10px] px-2 py-1 rounded shadow-sm transition-colors font-bold'
                >
                  Delete</button>
              </div>
            )
          })}

        </div>
      </div>

    </div>
  )
}

export default App