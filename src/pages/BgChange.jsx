import React, { useState } from 'react'

const BgChange = () => {
    const [color, setColor] = useState('')
    // let ran = Math.floor(Math.random() * 10) // we use Math.floor for getting the integer value form this function
    // console.log(ran)

    return (
        <div className='w-full h-screen flex-col flex items-center justify-end pb-4' style={{ backgroundColor: color }}>
            <p className='absolute top-[50%] text-lg shadow-2xl p-4 rounded-xl text-white'>{color}</p>

            <div className='bg-white rounded-xl shadow-xl'>
                <button onClick={() => setColor('yellow')} className='bg-yellow-400 p-2 rounded-xl m-3'>Yellow</button>
                <button onClick={() => setColor('red')} className='bg-yellow-400 p-2 rounded-xl m-3'>Red</button>
                <button onClick={() => setColor('green')} className='bg-yellow-400 p-2 rounded-xl m-3'>Green</button>
                <button onClick={() => setColor('blue')} className='bg-yellow-400 p-2 rounded-xl m-3'>Blue</button>
                <button onClick={() => setColor('orange')} className='bg-yellow-400 p-2 rounded-xl m-3'>Orange</button>
                <button onClick={() => setColor('pink')} className='bg-yellow-400 p-2 rounded-xl m-3'>Pink</button>
                <button onClick={() => setColor('purple')} className='bg-yellow-400 p-2 rounded-xl m-3'>purple</button>
                <button onClick={() => setColor('olive')} className='bg-yellow-400 p-2 rounded-xl m-3'>Olive</button>
                <button onClick={() => setColor('black')} className='bg-yellow-400 p-2 rounded-xl m-3'>Black</button>
                <button onClick={() => setColor('')} className='bg-yellow-400 p-2 rounded-xl m-3'>Reset</button>
            </div>
        </div>
    )
}

export default BgChange
