import ClickOutHandler from "react-clickout-handler";

export function Popup({children,open,onClickOut}){
    const visibleClass = open?'block':'hidden';
    return(
        <div className={"w-screen h-screen absolute top-0 left-0 z-20 flex " + visibleClass} style={{ backgroundColor: 'rgba(0,0,0,.8)' }}>
            <ClickOutHandler onClickOut={()=>{onClickOut()}}>
                <div className="border border-reddit_dark-brightest w-3/4  md:w-1/2 bg-reddit_dark p-5 text-reddit_text mx-auto self-center rounded-md ">
                    {children}
                </div>
            </ClickOutHandler>
        </div>
    )
}