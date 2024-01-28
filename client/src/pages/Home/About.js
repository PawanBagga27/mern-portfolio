import React from 'react'
import SectionTitle from '../../components/SectionTitle'

function About() {
    const skill = [
        "PHP",
        "C#",
        "NodeJS",
        "MySQL"
    ]
    return (
        <div>
            <SectionTitle title="About" />
            <div className='flex w-full items-center sm:flex-col'>
                <div className='h-[70vh] w-1/2 sm:w-full'>
                    <dotlottie-player
                        src="https://lottie.host/e734ea6a-1b4d-4877-b0e3-bcf97d08ba5a/CKA32yr0VC.json"
                        background="transparent"
                        speed="1" loop autoplay>
                    </dotlottie-player>
                </div>
                <div className='flex flex-col gap-5 w-1/2 sm:w-full'>
                    <p className='text-white'>MAKE PARAGRAPH HERE</p>
                    <p className='text-white'>MAKE PARAGRAPH HERE</p>
                </div>
            </div>
            <div className='py-5'>
                <h1 className='text-tertiary text-xl'>Technologies I am Good Into</h1>
                <div className='flex flex-wrap gap-10 mt-5'>
                    {skill.map((skill, index) => (
                        <div className='border border-gray-500 p-4 py-3 px-5'>
                            <h1 className='text-tertiary text-xl'>{skill}</h1>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default About
