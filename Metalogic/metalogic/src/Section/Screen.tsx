import type { ReactNode } from "react";

interface ContextProps{
    children:ReactNode
}
const Screen=({children}:ContextProps)=>{
    return(
        <div className="min-h-screen">
          {children}
        </div>
    )
}
export default Screen;