import Link from 'next/link';

export default function footer() {
    return (
        <div className="flex-col bg-[#3F3D56] text-white" >
            <footer className="p-4  rounded-lg shadow md:px-6 md:py-8 ">
                <div className="lg:flex ">
                    <div className="flex-1 w-20">
                        <img src="src/zamlogowhite.png" className="mr-3 w-36" alt="Zamaqo Logo" />
                    </div>
                    <div className="flex-1 w-60 justify-center">
                        <ul className="flex flex-wrap items-center mb-6 text-sm sm:mb-0 content-center object-center ">
                            <li>
                                <a href="#" className="mr-4 hover:underline md:mr-6 "><span className="font-bold underline">Tel:</span> 087 550 1748</a>
                            </li>
                            <li>
                                <a href="#" className="mr-4 hover:underline md:mr-6"><span className="font-bold underline">Email:</span> info@zamaqo.com</a>
                            </li>
                            <li>
                                <a href="#" className="mr-4 hover:underline md:mr-6 ">Cape Town, South Africa</a>
                            </li>
                        </ul>
                    </div>
                    <div className="flex-1 w-20">
                        <Link href="/popia">
                            <a>POPIA</a>
                        </Link>
                    </div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span className="block text-sm  sm:text-center ">© 2022 <a href="#" className="hover:underline">Zamaqo™</a>. All Rights Reserved.
                </span>
            </footer>
        </div>
    )
}