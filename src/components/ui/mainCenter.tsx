import { MousePointer2, Hand, Square, Circle, Pen, Image, Eraser, MoveRight, Minus } from 'lucide-react'
const MainCenter = () => {
    return (
        <div className="flex h-10 w-[33rem] items-center justify-between rounded-md border border-solid border-slate-200 px-4 cursor-pointer hover:shadow-lg">
            <div className='flex justify-between items-center w-full'>
                <div className='center-icon'><MousePointer2 /></div>
                <div className='center-icon'><Hand /></div>
                <div className='center-icon'><Square /></div>
                <div className='center-icon'><Circle /></div>
                <div className='center-icon'><Pen /></div>
                <div className='center-icon'><Image /></div>
                <div className='center-icon'><Eraser /></div>
                <div className='center-icon'><MoveRight /></div>
                <div className='center-icon'><Minus /></div>
            </div>
        </div>
    )
}

export default MainCenter