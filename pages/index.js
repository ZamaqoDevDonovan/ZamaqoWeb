import Link from 'next/link';
import Nav from '../Components/nav'
import Contentsec from '../Components/contentsection'
import Footer from '../Components/footer'


export default function Example() {
  return (

    <div className='homebg pt-28'>
      <link href='https://fonts.googleapis.com/css?family=Kaushan Script' rel='stylesheet'></link>

      <div className='p-2 sm:p-5 md:p-15 lg:p-18'>
        {/* <Infocard heading={"What is a custom web application?"} body={"Is a purpose developed application to your own specifications that runs in a browser."}></Infocard> */}
        <div className='flex-col md:flex'>
          <div className='w-[100%] md:w-[50%]'>
            <Contentsec className="" heading={"Your partner in Technology"} extra={""} body={""} type={""}></Contentsec>
            <img src='src/homepagecloud.svg' href="#"></img>
            <Contentsec heading={"What we do!"} extra={""} body={""} type={""}></Contentsec>
            <div className=''>
              <Link href='support'>
                <div className='flex'>
                  <p className='underline font-bold mr-[10px]'>Premium Support </p>
                  <p className=' font-bold text-[#829BDE] text-xl funky'>-Get the most out of technology.</p>
                </div>
              </Link>
              <p>We remove complexity from your Software and IT functions, ensuring that your Systems & applications give you competitive advantage.</p>
              <a className='text-xs text-indigo-900 font-bold hover:text-sky-400' alt="SEO IT Support company Capetown" href="support">Learn More...</a>
            </div>
            <div className=' px-2 md:px-[40px] py-6 '>
              <Link href="">
                <div className='flex'>
                  <p className='underline font-bold mr-[10px]'>Custom Solutions:</p>
                  <p className=' font-bold text-[#829BDE] text-xl funky'>-Helping to bring big ideas to life.</p>
                </div>
              </Link>
              <p className='underline font-bold'></p>
              <p>Build amazing web applications using a collaborative process. We develop custom web applications that aid success!</p>
              <a className='text-xs text-indigo-900 font-bold hover:text-sky-400' alt="SEO Software Developers Capetown" href="#" >Learn More...</a>
            </div>
          </div>
          <div className='w-[100%] md:w-[50%]'></div>
        </div>
        {/* <Collapse title="Click Me!" content="this is content 1"></Collapse>
        <Collapse title="Click Me!" content="this is content 2"></Collapse> */}
      </div>


      <Footer></Footer>

    </div>

  )
}