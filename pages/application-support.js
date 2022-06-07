import { useState } from "react";
import Contentsec from '../Components/contentsection'
import Footer from '../Components/footer'
import InfoCard from '../Components/infocard'
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

            <div className='p-2 sm:p-5 md:p-15 lg:p-18 lg:w-[95vw] xl:w-[70vw] m-auto'>
                <div className='flex flex-col sm:flex-col md:flex-col lg:flex-row p-0 py-5 sm:p-5 justify-items-center content-center place-items-center'>
                    <div className='w-[100%] md:w-[100%] lg:w-[50%] justify-items-center content-center place-items-center p-5 px-0 md:p-5'>
                        <Contentsec heading={"Application Support"} body={["Zamaqo offers application support including management of the setup, technical, maintenance and security aspects of such an application. We ensure your staff can concentrate on YOUR BUSINESS and not IT."]} type={""}></Contentsec>
                        <div className="flex">
                            <div>
                                <img src="src/Cloudy.svg"></img>
                            </div>
                            <div className=" hidden md:block">
                                <img src="src/screenguy.svg"></img>
                            </div>
                        </div>
                    </div>
                    <div className='w-[100%] lg:w-[50%] px-5 sm:px-20 md:px-120 lg:px-10 xl:px-5'>
                        <InfoCard heading={"What is “Application Support” "} body={"Is a service that supports all aspects of your Business Software Applications & Services. It may be described as a type of hybrid service where we act as “Virtual Director” to your current IT staff. "}></InfoCard>
                    </div>
                </div>
                <div className="grid gap-x-4 grid-flow-row md:grid-flow-row lg:grid-flow-col">
                    <div className="row-span-1 order-1"><Contentsec heading={"Why should your business use ZAMAQO for Application Support?"} body={["Zamaqo will be your backup support when major issues arrise.","Zamaqo Application Support services complements your organisations IT skills so that your organsation does not need to cover every eventuality of skills required internally.", "Reduce staffing costs. You don’t need highly qualified IT staff. ", "Your IT personell concentrate on 1st line desktop tasks and use ZAMAQO to do all backend/resource intense tasks.", "Zamaqo monitors and updates your applications & servers etc in the background.", "Zamaqo advises and manages any legacy applications.","Zamaqo fills the gap so that you do not have to hire more staff", "Zamaqo acts as a sounding board to management on all IT-related functions"]} type={"list"}></Contentsec></div>
                    <div className="col-span-1 order-3 md:order-2 "><Contentsec heading={"How does Application support differ from traditonal Desktop support?"} body={["Application support is primarily concerned with the functions and technical & maintenance aspects of running your applications and servers.", "Application support ensures that your applications are up to date both in function and security.", "Application support manages all aspects including user creation, from user registration, management including security and functional updates  through technical management of Sofware Applications used in your business. Let Zamaqo Pty Ltd remove that burden from you. "]} type={"list"}></Contentsec> <DropContact formInfo={["Name","Tel","Email","Message"]}></DropContact></div>
                    <div className="row-span-2 col-span-1 order-2 md:order-3"><Contentsec heading={"Example Scenarios of how “Application Support” applies:"} body={["#B=U=Company A# is a business that has organically grown in the last 10 years with no existing IT Department that uses a niche application for its business. Zamaqo can help a company like this by taking support ownership, allowing its staff to focus on business operations.", "#B=U=Company B# uses a legacy application that “does the job”, although it has some flaws which the employees have found a way to work around, but at the cost of work efficiency. Zamaqo will ensure that those problems are eliminated.", "#B=U=Company C# is a large organization with more than 100 employees using a suite of commercially available software. The software runs smoothly most of the time, but every now and then it “doesn’t work”! . It is not cost effective for this company to hire someone on a full time basis thus Zamaqo can fill the gap and support this company's needs in a cost-effective manner.", "#B=U=Company D# has decided to outsource their application support as they want their internal team to work on new products instead of taking time monitoring and maintaining their existing software. Zamaqo will ensure that everything runs smoothly and that your business is kept informed.", "#B=U=Company E# is a relatively small company of eight employees who has managed to secure multi-nationals as their clients for a custom-written web application. Company E does not have the resources or personnel to support their multi-national clients. Company E has partnered with Zamaqo to support their multinationals cleints on their behalf."]} type={"list"}></Contentsec></div>
                </div>
                <div className="grid gap-x-4 grid-cols-1 lg:grid-cols-2 grid-flow-row  md:grid-flow-row lg:grid-flow-col">
                    <div className="col-span-1 "><Contentsec heading={"How does Application support differ from traditonal Desktop support?"} body={["Application support is primarily concerned with the functions and technical & maintenance aspects of running your applications and servers.", "Application support ensures that your applications are up to date both in function and security.", "Application support manages all aspects including user creation, from user registration, management including security and functional updates  through technical management of Sofware Applications used in your business. Let Zamaqo Pty Ltd remove that burden from you. "]} type={"list"}></Contentsec> <DropContact formInfo={["Name","Tel","Email","Message"]}></DropContact></div>
                </div>
            </div>



            <Footer></Footer>

        </div>

    )
}

// }