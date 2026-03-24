import React from 'react'

const Card = ({ title, desc, idx, deleteFnc }) => {
    return (

        <div key={idx} className='h-48 w-44 bg-gradient-to-br from-yellow-100 to-yellow-200 shadow-xl rounded-lg p-4 flex flex-col relative border-t-8 border-yellow-400 rotate-1 hover:rotate-0 transition-transform cursor-pointer'>

            <div className="absolute top-[-10px] left-1/2 -translate-x-1/2 w-8 h-8 bg-red-500 rounded-full shadow-md"></div>

            <h3 className='text-gray-800 text-xl font-bold border-b border-yellow-300 pb-2 mb-2 break-words'>{title}</h3>
            <p className='text-gray-600 text-sm overflow-y-auto leading-tight'>{desc}</p>
            <button
                // Sahi tarika brackets ke sath parameter bhejne ka
                onClick={() => deleteFnc(idx)}
                className='absolute bottom-2 right-2 bg-red-500 hover:bg-red-600 text-white text-[10px] px-2 py-1 rounded shadow-sm transition-colors font-bold'
            >
                Delete</button>
        </div>

    )
}

export default Card
