import { useState } from "react";
import Link from 'next/link';
import Nav from '../Components/nav'
import Collapse from '../Components/collapsible'
import Contentsec from '../Components/contentsection'
import Footer from '../Components/footer'
import InfoCard from '../Components/infocard'
import QuickContact from '../Components/quickcontact'
import DropContact from '../Components/dropcontact'

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
            <div className='p-2 sm:p-5 md:p-15 lg:p-18 lg:w-[95vw] xl:w-[70vw] m-auto'>
                <div className='flex flex-col sm:flex-col md:flex-col lg:flex-row p-0 py-5 sm:p-5 justify-items-center content-center place-items-center'>
                    <div className='w-[100%] md:w-[100%] lg:w-[50%] justify-items-center content-center place-items-center p-5 px-0 md:p-5'>
                        <Contentsec heading={"Custom Web Applications"} extra={"-LETS BUILD IT TOGETHER"} body={["Zamaqo offers exceptional service in creating a custom solution for your business needs. The traditional applications that “run” on a computer are slowly being phased out by “web-based” alternatives as the browsers and web technologies have improved recently. We believe in less than 15 years 99% of applications will be web based and only highly graphics intense applications will remain native to the PC/Mac as we know"]} type={""}></Contentsec>

                    </div>
                    <div className='w-[100%] lg:w-[50%] px-5 sm:px-20 md:px-120 lg:px-10 xl:px-5'>
                        <InfoCard heading={"What is a custom web application? "} body={"Is a purpose developed application to your own specifications that runs in a browser."}></InfoCard>
                    </div>
                </div>
                <div className="">
                    <img src="src/table.svg" className="w-[75%] m-auto"></img>
                </div>
                <div className='flex flex-col sm:flex-col md:flex-col lg:flex-row p-0 py-5 sm:p-5 justify-items-center content-center place-items-center'>
                    <div className='w-[100%] md:w-[100%] lg:w-[50%] justify-items-center content-center place-items-center p-5 px-0 md:p-5'>
                        <Contentsec heading={"Why custom web applications and software makes sense:"} body={["When the particular solution you are looking for is not available  “Off the shelf” or you need special features that are unique to your workflow or process.", "-Tailor your software to your specific business needs", "The major advantage is that you can get exactly what your business needs as well as eliminate the unwanted ."]} type={"par"}></Contentsec>

                    </div>
                    <div className='w-[100%] lg:w-[50%] px-5 sm:px-20 md:px-120 lg:px-10 xl:px-5'>
                        <InfoCard heading={"Major Advantages of Web applications?"} body={"Cross platform (PC/MAC/Linux/Mobile). NO install. NO per PC licencse.  Always available online. Remain in Full control of all features and functions. Main Disadvantage : Initial Investment"}></InfoCard>
                    </div>
                </div>
                <div className='flex flex-col sm:flex-col md:flex-col lg:flex-row p-0 py-5 sm:p-5 justify-items-center content-center place-items-center'>
                    <div className='w-[100%] md:w-[100%] lg:w-[50%] justify-items-center content-center place-items-center p-5 px-0 md:p-5'>
                        <Contentsec heading={"Why would your business invest in custom software"} body={["Non Availability-The system your business needs is not available.", "Legislation -Need Specific requirement by legislation.", "Competitive advantage", "Centerelisation-Unification of all departments and business units-Large organization  with complex workflow/ business environment", "Niche Requirements", "Save money over long term -More cost effective for large user base", "Integration - Web app vs many 3rd party apps", "Derisk from 3rd party software vendors", "Own the intelectual property", "More control over features, functions and capabilities", "Simplification of software environment"]} type={"list"}></Contentsec>

                    </div>
                    <div className='w-[100%] lg:w-[50%] px-20 sm:px-40 md:px-120 lg:px-10 xl:px-20'>
                        <img src='src/supportimg.svg' className='w-[80vw]' />
                        <div>
                            <p className="funky">INVEST IN YOUR BUSINESS</p>
                            <p>Let us build an application that will provide competitive advantage over your competitors.</p>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4">
                    <div className=""><Contentsec heading={"Solution Scenario 1"} body={["Your business has a geographically distributed operation with each office working as an 'independent' unit. Let us help you 'unify' your offices through enabling technology to work for you. We are able to design and implement OTS (off the shelf) or create bespoke systems to best suit your business needs."]} type={""}></Contentsec></div>
                    <div className=""><Contentsec heading={"Solution Scenario 2"} body={["Your business uses a set of legacy software and programs creating many integration, conversion, delay etc.  problems which results in Obfuscation. Let us help you define what you need and implement the necessary tools and services to simplify your workflow and process! This WILL improve your bottom line."]} type={""}></Contentsec></div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4">
                    <div className=""><Contentsec heading={"Solution Scenario 3"} body={["Zamaqo takes full responsibility. ", "You don’t need highly qualified IT staff. ", "Your persons responsible for IT use ZAMAQO as a consultant.", "Zamaqo monitors and updates your applications in the background.", "Zamaqo advises and manages any legacy applications.", "Zamaqo acts as a sounding board to management on all IT-related functions"]} type={"list"}></Contentsec></div>
                    <div className="">
                        <Contentsec heading={"Solution Scenario X"} body={[""]} type={""}></Contentsec>
                        <QuickContact formInfo={["Name","Tel","Email","Message"]}></QuickContact>
                    </div>
                </div>
                <div className='flex flex-col sm:flex-col md:flex-col lg:flex-row
                                    p-0 py-5 sm:p-5 
                                    justify-items-center content-center place-items-center'>

                    <div className='w-[100%] md:w-[100%] lg:w-[50%] 
                                        justify-items-center content-center place-items-center 
                                        p-5 px-0 md:p-5'>

                        <Contentsec heading={"Should your business consider it’s own Custom Application?"} extra={""} body={["YES if: your business will gain competitive advantage by:", "Being quicker: A custom web app can make your business processes quicker. ", "Impress your Customers as your system can create estimates/quotes timeously.", "Being more accurate - Get the information to your customers accurately and efficiently.", "Being organised. - A good web application can organise your business tasks efficiently and keep track of what is still to be done.", "Keeping your customers happy: A good web application will keep your customers happy with updates as required. No more lost emails or calls etc. "]} type={"list"}></Contentsec>

                    </div>
                    <div className='w-[100%] lg:w-[50%] px-20 sm:px-40 md:px-120 lg:px-10 xl:px-20'>
                        <img src='src/customSoft.svg' className='w-[80vw]' />
                    </div>
                </div>
                <Contentsec heading={"Custom software vs purchased software:"} extra={""} body={["Purchasing off-the-shelf software is arguably the most cost-effective option, but at the cost of some major limitations. Your business and staff are constrained by the functionality offered, whereas you should have software that works around your business needs.", "With custom software, your needs are taken into consideration and a software solution is built with your business processes in mind. This will give you a business advantage as your processes become much more efficient. While the initial investment is greater, you don't need to purchase multiple software solutions that integrate poorly with each other. Open the possibility of investing in your business."]} type={"par"}></Contentsec>
                <DropContact formInfo={["Name","Tel","Email","Message"]}></DropContact>
            </div>



            <Footer></Footer>

        </div>

    )
}

// }