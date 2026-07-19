import React from 'react'

function Top({ h1 = "sdfghj", span, p, p1, btn, setShow, show }) {
    return (
        <div className='h-[60vh] text-white bg-black flex item-center flex-col items-center  justify-center '>


            <div className='w-[40rem] text-center'>

                <p className='text-blue-400 text-xl mb-6'>{p}</p>
                <h1 className='   text-2xl sm:text-4xl md:text-5xl text-center font-bold mb-6' >{h1}  <span className='text-blue-400'>{span}</span></h1>
                <p className="font-bold text-gray-400">{p1}</p>

                <button className="bg-blue-600 px-10 py-4 mt-5 rounded-4xl font-bold" onClick={() => setShow(!show)} >{btn}</button>


            </div>


        </div>
    )
}

export default Top
