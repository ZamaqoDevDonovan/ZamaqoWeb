import { useState } from "react";
import Link from 'next/link';
import Nav from '../Components/nav'
import Collapse from '../Components/collapsible'
import Contentsec from '../Components/contentsection'
import Footer from '../Components/footer'
import InfoCard from '../Components/infocard'

export default function Example() {
    const [isAuth, setAuth] = useState(false);


    function authenticate(input) {
        var pin = "pass"//will be hashed
        if (input === pin) {
            setAuth(true)
        } else {
            //pop up-wrong pass
            console.log("wrong pass");
        }
    }

    // if (!isAuth) {
    //     return (
    //         <div className='background pt-28 h-screen'>
    //             <div className="flex flex-col md:flex-row lg:flex-row content-center py-36">
    //                 <div className="flex-auto "></div>
    //                 <div className="flex-auto p-10 md:p-0 lg:p-0 ">
    //                     <div className="grid grid-col-1 content-center h-96 border-8 ">
    //                         <input className="border-2 mx-2 my-2" id="pass" type="text" placeholder="Pass here"></input>
    //                         <button className="border-2 mx-2 my-2" onClick={() => authenticate(document.getElementById('pass').value)}>click</button>
    //                     </div>
    //                 </div>
    //                 <div className="flex-auto"></div>
    //             </div>
    //             <Footer></Footer>
    //         </div>
    //     )

    // } else {
    return (

        <div className='background pt-28'>
            <link href='https://fonts.googleapis.com/css?family=Kaushan Script' rel='stylesheet'></link>
            <div className='pt-20 w-[90vw] lg:w-[60vw] xl:w-[40vw] m-auto '>
                <div className=" pb-5 ">
                    <p className="text-xl text-[#829BDE] funky">Let us know how we can help you</p>
                </div>
                <div className='flex flex-col py-20 border-2'>

                    <div className='flex flex-col md:flex-row w-[100%]'>
                        <div className='p-2 w-[100%]'>
                            <input className='w-[100%] border-b-2 focus:border-[#435a99] focus:border-b-2 focus:outline-none' type="text" placeholder="Name"></input>
                        </div>
                        <div className='p-2 w-[100%]'>
                            <input className='w-[100%] border-b-2 focus:border-[#435a99] focus:border-b-2 focus:outline-none' type="text" placeholder="Tel"></input>
                        </div>
                    </div>
                    <div className='p-2 w-[100%]' >
                        <input className='w-[100%] border-b-2 focus:border-[#435a99] focus:border-b-2 focus:outline-none' type="text" placeholder="Email" required></input>
                    </div>
                    <div className='p-2 w-[100%]'>
                        <textarea className='w-[100%] border-b-2 focus:border-[#435a99] focus:border-b-2 focus:outline-none' placeholder="Message"></textarea>
                    </div>
                    <div className='relative w-[100%]'>
                        <button className='absolute right-0 p-1 m-2 text-white bg-slate-600'>Send</button>
                    </div>

                </div>
            </div>


            <div className="absolute bottom-0 w-[100%]">
                <Footer className=""></Footer>
            </div>


        </div>

    )
}

// }