import React, { ReactNode } from "react"

interface IconElementProps {
    children: ReactNode
}
const IconElement: React.FC<IconElementProps> = ({ children }) => {
    return (
        <div className="w-10 h-10 flex text-center bg-red-400">{children}</div>
    )
}

export default IconElement