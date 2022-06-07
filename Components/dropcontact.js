import Link from 'next/link';
import { Disclosure, Transition } from '@headlessui/react'
import QuickContact from '../Components/quickcontact'

export default function qucikContact(props) {
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
        <Disclosure>
            <Disclosure.Button className="p-3 text-left w-[100%] text-slate-500 hover:text-zinc-300" >
                Send us your requirements...
            </Disclosure.Button>
            <Transition
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
            >
                <Disclosure.Panel className="text-gray-500">
                    <QuickContact formInfo={props.formInfo}></QuickContact>
                </Disclosure.Panel>
            </Transition>

        </Disclosure>

    )
}