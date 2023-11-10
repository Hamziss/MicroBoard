const ResizeBar = () => {
    return (
        <div className="flex justify-center items-center w-[9rem] h-full border border-solid border-slate-300">
            <p className="text-xl border-r border-solid border-slate-300 h-full flex items-center justify-center">--</p>
            <p className="text-xl border-r border-solid border-slate-300 h-full flex items-center justify-center">100%</p>
            <p className="text-xl h-full flex items-center justify-center">+</p>
        </div>
    )
}

export default ResizeBar