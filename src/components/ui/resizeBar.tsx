import { Minus, Plus } from "lucide-react"
const ResizeBar = () => {
    return (
        <div className="flex text-lg justify-center items-center w-[9rem] h-full border border-solid border-slate-300 text-slate-800 rounded-md bg-white">
            <div className="border-r flex items-center justify-center border-solid border-slate-300 h-full w-full hover:cursor-pointer hover:rounded-tl-md hover:rounded-bl-md hover:bg-slate-200 hover:shadow-lg" >
                <Minus size={16} />
            </div>
            <p className="flex items-center p-4 border-r border-solid border-slate-300 h-full w-full hover:cursor-pointer hover:bg-slate-200">100%</p>
            <div className="w-full h-full flex items-center justify-center hover:cursor-pointer hover:rounded-tr-md hover:rounded-br-md hover:bg-slate-200 hover:shadow-lg">
                <Plus size={16} />
            </div>
        </div>
    )
}
export default ResizeBar