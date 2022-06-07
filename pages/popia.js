import { useState } from "react";
import Link from 'next/link';
import Nav from '../Components/nav'
import Collapse from '../Components/collapsible'
import Contentsec from '../Components/contentsection'
import Footer from '../Components/footer'
import Carditem from '../Components/carditem'

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
                    <div className='w-[100%] md:w-[100%] lg:w-[50%] justify-items-center content-center place-items-center p-5 px-0 md:p-20'>
                        <Contentsec heading={"What is POPI?"} extra={""} body={"POPI is South Africa’s data privacy law and it stands for the Protection of Personal Information Act, 2013. It is sometimes also referred to as POPIA. It governs when and how organisations collect, use, store, delete and otherwise handle personal information."} type={""}></Contentsec>
                        <a href='#' className="hidden">Learn More...</a>
                    </div>
                    <div className='w-[100%] lg:w-[50%] px-20 sm:px-40 md:px-120 lg:px-10 xl:px-20'>
                        <img src='src/PopiGraphic.svg' className='w-[80vw]' />
                    </div>
                </div>
                <Contentsec heading={"What is personal information under POPIA?"} body={"Information that can be used to personally identify a natural or juristic (i.e. organisations) person. This information about a person includes, but is not limited to:"}></Contentsec>
                <img className="py-2" src="src/popiinfoUnder.svg"></img>
                <div className="grid gap-x-4 grid-flow-row md:grid-flow-row lg:grid-flow-col">
                    <div className="row-span-1"><Contentsec heading={"Who does POPI apply to?"} body={"POPI applies to all local and foreign organisations processing (i.e. collecting, using or otherwise handling) personal information in South Africa."}></Contentsec></div>
                    <div className="col-span-1 "><Contentsec heading={"What does this announcement mean for your organisation?"} body={"As the Popia Act is now promulgated into law and the dealine of 1 February 2022 has passed, it means that your organisation should already be compliant or be at risk of Non-compliance and subject to penalties"}></Contentsec></div>
                    <div className="row-span-2 col-span-1"><Contentsec heading={"What do the final POPIA regulations deal with?"} body={["How a data subject can object to the processing of their personal information ","How a data subject can request the correction or deletion of information. ","The responsibilities of an information officer. (Important!) ","How to apply for the regulator to issue a code of conduct. ","How to request marketing consent. (Important!) ","How to submit a complaint to the regulator. ","How the regulator will act as a conciliator in investigations. ","What the regulator must do before it investigates you. ","How the regulator will try to settle complaints.","How the regulator will conduct assessments.","How the regulator will notify people during investigations."]} type={"list"}></Contentsec></div>
                </div>
                <div className="grid gap-x-4 grid-flow-row md:grid-flow-row lg:grid-flow-col">
                    <div className="row-span-1"><Contentsec heading={"What is POPI compliance?"} body={["You will need to establish measures that ensure that you only collect, use, store, delete and otherwise handle personal information in permitted ways and that it is appropriately protected from unauthorised access or loss. The measures that each organisation employs will be different, but in practice, it will mean more policies and procedures for your organisation and you will need to instil a culture of data protection in your organisation"]} type={'par'}></Contentsec><Contentsec heading={"Does POPIA provide any benefit to businesses?"} body={"POPIA provides the opportunity to analyse and have more control over the data handled within your organisation and to better understand its purposes. As data is an increasingly valuable resource, better data management can increase the efficiency and effectiveness of any business."}></Contentsec></div>
                    <div className="row-span-2 col-span-1"><Contentsec heading={"What does POPI mean for consumers?"} body={"Consumers will benefit from POPI’s requirements in that their personal information must be protected and it can only be collected or handled where there is a lawful justification for doing so. POPI gives consumers specific rights in respect of organisations handling their personal information and it gives consumers greater control over their personal information. Consumers are informed about what personal information is collected, by who and why so that consumers are able to make informed decisions."}></Contentsec><Contentsec heading={"Who regulates POPIA?"} body={"POPI is regulated by the **Information Regulator** who can be found at the following website www.inforegulator.org.za . The Information Regulator is empowered to monitor and enforce compliance. "}></Contentsec></div>
                    {/* <div className="col-span-1"><Contentsec heading={""} body={""}></Contentsec></div>  */}
                </div>
                <div className="grid gap-x-4 grid-flow-row md:grid-flow-row lg:grid-flow-col">
                    <div className="row-span-1"><Contentsec heading={"What are the fines and penalties for non-compliance?"} body={"The fines and penalties vary depending on the offence, with a maximum of 10 years in prison or a R10 million fine."}></Contentsec></div>
                    <div className="col-span-1"><Contentsec heading={"Does POPI add anything to my constitutional right to privacy?"} body={"Every person has a constitutional right to privacy, which has many aspects (including privacy in the home, private communications and private information about a person). POPI gives practical effect to that right insofar as it relates to personal information handled by organisations. It provides a direct mechanism through which that aspect of the right can be enforced."}></Contentsec></div>
                    <div className="row-span-2 col-span-1"><Contentsec heading={"Is POPI different from the GDPR?"} body={"POPI is similar to the EU’s data privacy law, called the General Data Protection Regulation but it differs in some respects. The main difference is that POPI regulates corporate personal information, where appropriate, whereas the GDPR does not. Another interesting difference between GDPR and POPI Act is that the GDPR places direct obligations on operators (called processors) whereas the POPI Act simply says there should be a mandate in writing between the responsible party and an operator. This places immense importance on the agreements that a responsible party has with its operators."}></Contentsec></div> 
                </div>
                <Contentsec heading={"Who are the role players in POPIA? "}></Contentsec>
                <img className="py-2" src="src/RoleGraphic.svg"></img>
                <Contentsec heading={"What are their responsibilities?"} body={"Under POPIA and the regulations: The Information Regulator is responsible for ensuring that their organisation complies with the POPI Act. They are a key person in any project or programme. A Responsibly Party is a public or private body or any other person which alone or in conjunction with others determines the purpose of and means for processing personal information."}></Contentsec>
                <Contentsec heading={"An information regulator and responsible party (or body) must:"} body={["encourage compliance with conditions for the lawful processing of personal information,","deal with requests made pursuant to POPIA (presumably by the Information Regulator or Data Subjects),","work with the Regulator in relation to investigations conducted related to prior authorisations (pursuant to Chapter 6 in relation to the body),","otherwise, ensure compliance by the body with the provisions of POPIA,","develop, implement and monitor a compliance framework,","ensure that a personal information impact assessment is done to ensure that adequate measures and standards exist,","develop, monitor, maintain and make available a PAIA manual,","develop internal measures and adequate systems to process requests for access to information,","ensure that internal awareness sessions are conducted, and as may be prescribed.","These responsibilities are set out in section 55 of POPIA."]} type={'list'}></Contentsec>
                <p>The third-party Operator is a person who processes personal information for a responsible party in terms of a contract or mandate, without coming under the direct authority of that party.<br/>
                    <br/>Regardless of the fact that an operator might also be a responsible party in its own right; when instructed or contracted to deliver a processing service on behalf of the responsible party for a specific purpose they act as an operator.</p>
            </div>



            <Footer></Footer>

        </div>

    )
}

// }