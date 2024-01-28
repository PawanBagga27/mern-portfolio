import React from 'react'

function Intro() {
    return (
        <div className='h-[80-vh] bg-primary flex flex-col items-start justify-center gap-8 py-10'>
            <h1 className='text-white'> Hi , I am </h1>
            <h1 className='text-5xl sm:text-3xl text-secondary font-semibold'> Pawan Bagga </h1>
            <h1 className='text-3xl sm:text-1xl text-white font-semibold'> Portfolio</h1>
            <p className='text-white w-2/3'> My profile Text</p>
            <button className='border-2 border-tertiary text-tertiary px-10 py-3 rounded GetStartedbtn'> Get Started </button>
        </div>
    )
}

export default Intro