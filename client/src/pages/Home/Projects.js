import React from 'react'
import SectionTitle from '../../components/SectionTitle';
import { projects } from '../../resources/projects';

function Projects() {
    const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);
  return (
    <div>
    <SectionTitle title="Projects" />

      <div className='flex py-20 gap-20 sm:flex-col'>
                <div className='flex flex-col gap-10 border-l-2 border-[#135e4c82] w-1/4 sm:flex-row sm:overflow-scroll sm:w-full'>
                    {projects.map((projects, index) => (
                        <div onClick={() => {
                            setSelectedItemIndex(index);
                        }} className='cursor-pointer'>
                            <h1 className={`text-xl px-5 ${selectedItemIndex === index ? 'text-tertiary border-tertiary border-l-4 -ml-[3px] bg-[#1a7f5a31] p-3 sm:w-full' : 'text-white'}`}>{projects.title}</h1>
                        </div>
                    ))}
                </div>

                <div className='flex flex-col gap-5'>
                    <h1 className='text-secondary text-xl' >{projects[selectedItemIndex].image}</h1>
                    <h1 className='text-tertiary text-xl' >{projects[selectedItemIndex].link}</h1>
                    {/* <p className='text-white'>{experiences[selectedItemIndex].description}</p> */}
                </div>
            </div>
    </div>
  )
}

export default Projects
