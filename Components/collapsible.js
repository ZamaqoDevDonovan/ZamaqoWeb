import { Disclosure, Transition } from '@headlessui/react'
import QuickContact from '../Components/quickcontact'
import { useState } from "react";

export default function Collapsible(props) {
  if(props.hasContact){
    return (
      <Disclosure>
        <Disclosure.Button className="p-3 text-left bg-[#283045] w-[100%] text-white" >
          {props.title}
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
            {props.content}
            <QuickContact formInfo={props.formInfo}></QuickContact>
          </Disclosure.Panel>
        </Transition>
  
      </Disclosure>
    );
  }else{
    return (
      <Disclosure>
        <Disclosure.Button className="p-3 text-left bg-[#283045] w-[100%] text-white" >
          {props.title}
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
            {props.content}
          </Disclosure.Panel>
        </Transition>
  
      </Disclosure>
    );
  }
  
}