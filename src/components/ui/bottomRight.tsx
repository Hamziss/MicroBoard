import ResizeBar from "./resizeBar"
import RedoButton from "./redoButton"
import UndoButton from "./undoButton"
const BottomRight = () => {
    return (
        <div className="absolute bottom-0 right-0 mx-8 my-0 flex h-10 w-60 items-center justify-between mb-2">
            <ResizeBar />
            <div className="flex justify-between items-center h-full w-[5.5rem] rounded-md border border-solid border-slate-300 text-slate-800 bg-white">
                <UndoButton />
                <RedoButton />
            </div>
        </div>
    )
}

export default BottomRight