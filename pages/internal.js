import { useState } from "react";
import Contentsec from '../Components/contentsection'
import Footer from '../Components/footer'
import InfoCard from '../Components/infocard'
import DropContact from '../Components/dropcontact'
import Link from 'next/link';

function Example({ posts }) {
    const [isAuth, setAuth] = useState(true);
    var array = [];
    posts.forEach(element => {
        element.links.forEach(objectItem => {
            var object = { "name": objectItem.name, "link": objectItem.link, "Description": objectItem.Description }
            array.push(object);
        });

    });
    function GetSortOrder(prop) {
        return function (a, b) {
            if (a[prop] > b[prop]) {
                return 1;
            } else if (a[prop] < b[prop]) {
                return -1;
            }
            return 0;
        }
    }
    array.sort(GetSortOrder("link"));
    console.log(array)

    function authenticate(input) {
        var pin = "pass"//will be hashed
        if (input === pin) {
            setAuth(true)
        } else {
            //pop up-wrong pass
            console.log("wrong pass");
        }
    }

    if (!isAuth) {
        return (
            <div className='background pt-28 h-screen'>
                <div className="flex flex-col md:flex-row lg:flex-row content-center py-36">
                    <div className="flex-auto "></div>
                    <div className="flex-auto p-10 md:p-0 lg:p-0 ">
                        <div className="grid grid-col-1 content-center h-96 border-8 ">
                            <input className="border-2 mx-2 my-2" id="pass" type="text" placeholder="Pass here"></input>
                            <button className="border-2 mx-2 my-2" onClick={() => authenticate(document.getElementById('pass').value)}>click</button>
                        </div>
                    </div>
                    <div className="flex-auto"></div>
                </div>
                <Footer></Footer>
            </div>
        )

    } else {
        return (

            <div className='background pt-28'>

                <div className='p-2 sm:p-5 md:p-15 lg:p-18 lg:w-[95vw] xl:w-[70vw] m-auto'>
                    <div className='flex flex-col sm:flex-col md:flex-col lg:flex-row p-0 py-5 sm:p-5 justify-items-center content-center place-items-center'>
                        <div className='w-[100%] p-5 px-0 md:p-5'>

                            <table className="w-[95%] md:w-[80%] m-auto">
                                <thead className="text-left">
                                    <tr className="border-2">
                                        <th>Name</th>
                                        <th>Description</th>
                                        <th>Link</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {array.map(function (d, idx) {
                                        return (
                                            <tr className="border-2">
                                                <td>{d.name}</td>
                                                <td>{d.Description}</td>
                                                <td><Link href={d.link}>Click Here...</Link></td>
                                            </tr>

                                        )
                                    })}

                                </tbody>
                            </table>

                        </div>
                    </div>
                </div>



                <Footer></Footer>

            </div>

        )
    }

}

export async function getStaticProps() {
    // Call an external API endpoint to get posts.
    // You can use any data fetching library
    let json = await require('../Components/data.json');
    const posts = json.data;
    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return {
        props: {
            posts,
        },
    }
}

export default Example