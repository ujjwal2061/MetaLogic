import type { ReactNode } from "react";

interface ContextProps{
    children:ReactNode
}
const Screen=({children}:ContextProps)=>{
    return(
        <>
          {children}
        </>
    
    )
}
export default Screen;