import { useState } from "react";
import { useRouter } from 'next/router'
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import Link from 'next/link'

const navigation = [
  { name: 'Home', href: "/" },
  { name: 'Premium Support', href: "support" },
  { name: 'Application Support', href: "application-support" },
  { name: 'Custom Solutions', href: "custom-software" },
  { name: 'POPIA Compliance', href: "popia" },
  { name: 'Contact Us', href: 'contact' }
]

export default function Nav({activePage}) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Disclosure as="nav" className="bg-white-800 absolute top-0 w-full ">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center lg:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <Link href='/'>
              <div className="flex-1 flex items-center justify-center lg:items-stretch lg:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <img
                    className="block lg:hidden h-11 w-auto"
                    src="/src/zamlogo.png"
                    alt="Logo"
                  />
                  <img
                    className="hidden lg:block h-11 w-auto"
                    src="/src/zamlogo.png"
                    alt="Logo"
                  />
                </div>

              </div>
              </Link>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 lg:static lg:inset-auto lg:ml-6 lg:pr-0">
                <div className="hidden lg:block lg:ml-6">
                  <div className="flex space-x-4">
                    {navigation.map((item, index) => (
                      <Link href={item.href}>
                        <a
                          onClick={() => setActiveIndex(index)}
                          key={item.name}
                          className={`px-3 py-2 rounded-md text-sm font-medium ${index === activeIndex ? 'bg-gray-900 text-white' : 'text-gray-800 hover:bg-gray-700 hover:text-white'}`}
                          aria-current={index === activeIndex ? 'page' : undefined}
                        >
                          {item.name}
                        </a>
                      </Link>
                    ))}
                  </div>
                </div>
                <button
                  type="button"
                  className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                >
                  <a href="http://help.zamaqo.com">
                    <span className="sr-only">View notifications</span>
                    <BellIcon className="h-6 w-6" aria-hidden="true" />
                  </a>
                </button>

                {/* Profile dropdown */}
                <Menu as="div" className="ml-3 relative">
                  <div>
                    <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full "
                        src="src/account.png"
                        alt=""
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={`${active ? 'bg-gray-100' : ''} block px-4 py-2 text-sm text-gray-700`}
                          >
                            Raise Ticket
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="internal"
                            className={`${active ? 'bg-gray-100' : ''} block px-4 py-2 text-sm text-gray-700`}
                          >
                            Internal Login
                          </a>
                        )}
                      </Menu.Item>
                      
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="lg:hidden bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={`${item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'} block px-3 py-2 rounded-md text-base font-medium`}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
