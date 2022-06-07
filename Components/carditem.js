export default function carditem({title,body}) {
    return (
        <div className="border-[1px] border-[#283045] w-[100%] min-h-[100%] ">
            <div className="bg-[#283045] text-white text-center font-bold py-2">{title}</div>
            <div className="p-7">{body}</div>
        </div>
    )
}