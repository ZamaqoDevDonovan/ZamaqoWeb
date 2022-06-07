
import List from '../Components/list'


export default function footer({ heading, extra, body, type }) {
    if (type == "list") {

        const data = body.toString().split('+')
        return (
            <div className=''>
                <div className="bg-[#283045] text-white p-3 font-bold">
                    <p className="">{heading}</p>
                    <p className="funky">{extra}</p>
                </div>
                <div className="p-5 px-8">
                    <ol className='list-disc'>
                        {body.map(function (d, idx) {
                            const strArr = d.split('#');
                            let domEll = [];

                            strArr.forEach(element => {
                                var underline = "U="
                                var bold = "B="
                                var ital = "I="
                                var isUnderline = element.includes(underline)
                                var isBold = element.includes(bold)
                                var isItal = element.includes(ital)
                                var styles=""
                                if (isUnderline) {
                                    styles=styles+"underline "
                                    element=element.replace(underline, "")
                                }
                                if (isBold) {
                                    styles=styles+"font-bold "
                                    element=element.replace(bold, "")
                                }
                                if (isItal) {
                                    styles=styles+"italic "
                                    element=element.replace(ital, "") 
                                }
                                element=<span className={styles}>{element}</span>
                                domEll.push(element)
                            });
                            return (
                                <li>{domEll}</li>
                            );

                            //return (<li key={idx}>{d}</li>)
                        })}
                    </ol>
                </div>
            </div>
        )
    } else if (type == "par") {
        return (
            <div className=''>
                <div className="bg-[#283045] text-white p-3 font-bold">
                    <p className="">{heading}</p>
                    <p className="px-20 font-mono text-[#cdecea] funky">{extra}</p>
                </div>
                <div className="p-3">
                    {body.map(function (d, idx) {
                        return (<p className='pb-2' key={idx}>{d}</p>)
                    })}
                </div>
            </div>
        )
    } else {
        return (
            <div className=''>
                <div className="bg-[#283045] text-white p-3 font-bold">
                    <p className="">{heading}</p>
                    <p className="px-20 font-mono text-[#cdecea] funky">{extra}</p>
                </div>
                <div className="p-3">
                    <p>{body}</p>
                </div>
            </div>
        )
    }

}