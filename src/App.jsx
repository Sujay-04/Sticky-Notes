import React, { useState } from 'react'
import Card from './components/Card';
import Form from './components/Form';

const App = () => {

  const [task, settask] = useState(()=>{
    const SavedTask= localStorage.getItem("tasks");
    return SavedTask ? JSON.parse(SavedTask) : []; 
  })
  const addNote = (title, desc) => {
    const updatedTasks = [...task, { title, desc }];
    settask(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  }
  const deleteFnc = (idx) => {
    let copyTask = [...task]
    copyTask.splice(idx, 1)
    settask(copyTask)
    localStorage.setItem("tasks",JSON.stringify(copyTask))
  }
  return (

    <div className='min-h-screen bg-black text-white flex flex-col lg:flex-row p-10 gap-10'>

      <Form addNote={addNote} />

      <div className='w-full lg:w-1/2 border-t lg:border-t-0 lg:border-l pt-10 lg:pt-0'>
        <h1 className='pb-5 text-4xl font-bold ml-5 text-center'>Your Recent Notes</h1>
        <div className=' flex flex-wrap gap-5 mt-5 ml-5 justify-center lg:justify-start'>
          {task.map((elm, idx) => {

            return (
              <Card
                key={idx}
                idx={idx}
                title={elm.title}
                desc={elm.desc}
                deleteFnc={deleteFnc}
              />
            )
          })}

        </div>
      </div>

    </div>
  )
}

export default App