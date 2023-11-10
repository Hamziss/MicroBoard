import { Undo2 } from 'lucide-react';
const UndoButton = () => {
    return (
        <div className='border-solid border-slate-300 border-r flex justify-center items-center h-full hover:shadow-lg w-full hover:cursor-pointer hover:rounded-tl-md hover:rounded-bl-md hover:bg-slate-200'><Undo2 size={20} /></div>
    )
}

export default UndoButton