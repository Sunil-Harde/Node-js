import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {



    return (
        <div className='w-screen bg-black h-[50vh] flex flex-col justify-center items-center text-white'>

            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>



        </div>
    )
}

export default Footer
