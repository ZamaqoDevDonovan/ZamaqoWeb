import Link from 'next/link';
import { Disclosure, Transition } from '@headlessui/react'

export default function quickContact(props) {
    function sendEmail(email, name, number, body) {
        const subject = "From Web x587";
        var arrBody = [];
        // if (number != null) {
        //     body.push("Please Contact " + name + " On tel: " + number+" or email: "+email)
        // }else{
        //     body.push("Please Contact " + name + " On email: "+email)
        // }
        //window.open('mailto:info@zamaqo.com?subject=' + subject + '&body=' + body);
    }
    return (
       
                    <div className="border-2 p-0 w-[80%] " >
                        <div className=''>
                        <div className='p-2'>
                            <textarea className='w-[100%] border-b-2 focus:border-[#435a99] focus:border-b-2 focus:outline-none' placeholder={props.formInfo[3]}></textarea>
                        </div>
                        <div className='flex flex-col md:flex-row'>
                            <div className='p-2 w-[100%]'>
                                <input className='w-[100%] border-b-2 focus:border-[#435a99] focus:border-b-2 focus:outline-none' type="text" placeholder={props.formInfo[0]}></input>
                            </div>
                            <div className='p-2 w-[100%]'>
                                <input className='w-[100%] border-b-2 focus:border-[#435a99] focus:border-b-2 focus:outline-none' type="text" placeholder={props.formInfo[1]}></input>
                            </div>
                        </div>
                        <div className='p-2'>
                            <input className='w-[100%] border-b-2 focus:border-[#435a99] focus:border-b-2 focus:outline-none' type="text" placeholder={props.formInfo[2]} required></input>
                        </div>
                        <div className='relative'>
                            <button className='absolute right-0 p-1 m-2 text-white bg-slate-600' onClick={sendEmail()}>Send</button>
                        </div>
                        </div>

                    </div>
    )
}