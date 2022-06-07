import Link from 'next/link';
import Nav from '../Components/nav'
import Collapse from '../Components/collapsible'
import Contentsec from '../Components/contentsection'
import Footer from '../Components/footer'
import Carditem from '../Components/carditem'
import DropContact from '../Components/dropcontact'




export default function Example() {
    const cards = [
        { "type": "card", "title": "Unlimited Remote Support", "body": "As a client, you will have unlimited access to our Helpdesk Team to resolve and answer any issues you face." },
        { "type": "card", "title": "24/7 Monitoring", "body": "Proactive monitoring defends against Cyber attacks, which can go undetected. Zamaqo has access to tools to monitor your systems, keeping them up to date and protected and will be alerted if there is an attempted Cyber attack on your Business." },
        { "type": "card", "title": "Agreed Response Times", "body": "We always respond promptly to all our clients, but as an added guarantee we work towards a Service Level Agreement (SLA). The response times within our SLAs are usually the worst-case scenario, in most cases we will answer and deal with any issues immediately." },
        { "type": "card", "title": "Cyber Security Audit", "body": "All our Managed IT Support customers are given a FREE Cyber Security Audit. This will highlight any vulnerabilities in your IT Infrastructure and what’s needed to plug those vulnerabilities. To date, we’ve found major security issues with every client we’ve taken on, so this audit is essential." },
        { "type": "img", "title": "src/screenguy.svg", "body": "" },
        { "type": "card", "title": "Virtual IT Director", "body": "We will act as your virtual IT director and work with you to give different options for your future IT Infrastructure. We will create a Technology Roadmap inline with your business needs and help you to achieve your goals." },
        { "type": "card", "title": "Technology Business Review", "body": "Our clients are so important to us, which is why we will regularly meet with you (in person or virtually) to discuss your IT setup, any issues you’re facing and talk about future projects." },
        { "type": "card", "title": "Vendor Management", "body": "If you host your Website elsewhere, pay another vendor for your Office 365 licenses, or have bespoke software which includes Vendor support, we will liaise with those vendors directly to save you acting as the middle-man. You don’t have the time to deal with IT Issues, which is why its up to us to take care of them on your behalf." },
        { "type": "card", "title": "Disaster Recovery", "body": "Zamaqo can formulate & implement a disaster recovery plan for your organisation. After consultation we shall agree on your specific requirements. The implementation can be as simple or complex as the client whishes. " },
        { "type": "card", "title": "Discounts on Other IT Services", "body": "As a regular Managed IT customer, you also will have the chance to receive discounts on our other services such as onsite visits and project work." }];
    return (

        <div className='background pt-28'>

            <div className='p-2 sm:p-5 md:p-15 lg:p-18 lg:w-[95vw] xl:w-[70vw] m-auto'>

                <div className='flex flex-col sm:flex-col md:flex-col lg:flex-row
                                    p-0 py-5 sm:p-5 
                                    justify-items-center content-center place-items-center'>

                    <div className='w-[100%] md:w-[100%] lg:w-[50%] 
                                        justify-items-center content-center place-items-center 
                                        p-5 px-0 md:p-5 lg:p-5 xl:p-5'>

                        <Contentsec heading={"Need Premium IT Support?"} extra={""} body={"Premium Managed IT Support provided to your business is a more proactive and preventative approach! We develop and manage tools to see issues before they arise! Our aim is to free you from all IT complexity & concerns so that you can concentrate what you do best : running your business. "} type={""}></Contentsec>
                        
                        <div>
                            <DropContact formInfo={["Name","Tel","Email","The message here"]}></DropContact>
                        </div>
                    </div>
                    <div className='w-[100%] lg:w-[50%] px-20 sm:px-40 md:px-64 lg:px-10 xl:px-20'>
                        <img src='src/supportimg.svg' className='' />
                    </div>
                </div>
                <Contentsec heading={"What does Premium IT Support Include?"}></Contentsec>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center content-center place-items-center py-10'>
                    {cards.map(function (d, idx) {
                        if (d.type == "img") {
                            return (<div className=" md:w-[100%] flex justify-items-center content-center place-items-center">
                                <img className="px-[0px] sm:px-[5%]  md:px-[20%]  " src={d.title} />
                            </div>)
                        } else {
                            return (<Carditem title={d.title} body={d.body}></Carditem>)
                        }

                    })}
                </div>
                <Contentsec heading={"Frequently Asked Questions:"}></Contentsec>
                <div className='grid grid-cols-1 md:grid-cols-2  gap-10'>
                    <div><Collapse num={1} title="Do you help home users?" content="Unfortunately Not, we only provide premium support to businesses. However we can help Business clients at their homes although this will be discussed on a case by case basis."></Collapse></div>
                    <div><Collapse num={2} title="Can you protect my business from Cyber attack?" content="Yes, We ensure the lowest probability of Cyber Attack! We use the latest technologies to give our clients confidence that their systems are secure as possible."></Collapse></div>
                    <div><Collapse num={3} title="If I want to change my IT company can you help?" content="The process is very simple, your current company will give us access to all the documentation on your systems, it’s quite straightforward and painless!"></Collapse></div>
                    <div><Collapse num={4} title="Customer service is important to me, what makes you think you’re good at it?" content="Our Director has been in customer services for 20+ years, he gives talks on customer services and this culture of customer service is passed onto our staff members."></Collapse></div>
                    <div><Collapse num={5} title="I’m based in Newyork, London or Kathmandu. Can you support my company?" content="99% of work can be completed remotely, but when you require a local onsite engineer we will send someone to you."></Collapse></div>
                    <div><Collapse num={6} title="Will you tie me into a long-term contract?" content="No! You decide the term, even if it is month to month!  Our aim is to deliver exceptional service!"></Collapse></div>
                    <div><Collapse num={7} title="question" content="Answer"></Collapse></div>
                    <div><Collapse num={8} title="Sign me up!" content="Send us your name, Email and phone number and we shall do the rest!" hasContact={true} formInfo={["Name","Tel","Email","message"]}></Collapse></div>
                </div>
            </div>



            <Footer></Footer>

        </div>

    )
}