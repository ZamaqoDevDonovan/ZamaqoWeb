
export default function infocard({heading,body}) {
    return (
        <div className="p-5 bg-white" >
            <img src="src/infoicon.png" className=" infoicon"></img>
            <div className=" m-5 border-black border-solid border-[3px] flex-col p-8">
                <div className="py-2">
                    <p className="infoHead font-bold underline">{heading}</p>
                </div>
                <div className="py-2">
                    <p className="infoBody">{body}</p>
                </div>
            </div>
        </div>
    )
}