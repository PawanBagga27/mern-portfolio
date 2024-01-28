import React from 'react'
import SectionTitle from '../../components/SectionTitle'

function Contact() {
    const user = {
        name: "Pawan Bagga",
        gender: "Male",
        email: "PBAGGA.KL1@GMAIL.COM",
        mobile: "+91-9958982494",
        country: "INDIA"
    }
    return (
        <div>
            <SectionTitle title="Say Hello" />

            <div className='flex sm:flex-col items-center'>
                <div className='flex flex-col gap-1'>
                    <p className='text-tertiary'> {'{'} </p>
                    {Object.keys(user).map((key) => (
                        <p className='text-tertiary'>
                            <span className='text-tertiary'>{key} :</span>
                            <span className='text-tertiary'>{user[key]}</span>
                        </p>
                    ))}
                    <p className='text-tertiary'> {'}'} </p>
                </div>

                <div className='h-[500px]'>

                    <dotlottie-player src="https://lottie.host/0c362db6-aa14-472c-802b-ae8fada238df/kYMuOcV2D2.json" background="transparent" speed="1" loop autoplay></dotlottie-player>
                </div>
            </div>
        </div>
    )
}

export default Contact
