import { useState } from "react";
import { menuList } from "../constants/constants";
import { MouseTracker } from "./MouseTracker";

export const MenuModal = ({isMenuModalOpen, setIsMenuModalOpen, currentSection}) => {

    const [mouseOverMenu, setMouseOverMenu] = useState("")

    function handleMouseOver (e) {
        setMouseOverMenu(e.target.innerText)
    }

    function handleMouseLeave () {
        setMouseOverMenu("")
    }

    function closeModal () {
        // if (route)
            // navigate(route);
        setIsMenuModalOpen(false);
    }
    return (
        <nav className={isMenuModalOpen? "on":""}>
            <div>
                <div className="main-menu">
                    {menuList.map((v, i)=>(
                        <span key={i} className={(mouseOverMenu===v.menu)||(!mouseOverMenu&&currentSection===v.id)? "on" : ""} onClick={()=>closeModal(v.ref)}
                        onMouseOver={(e)=>handleMouseOver(e)} onMouseLeave={handleMouseLeave}>{v.menu}</span>
                    ))}
                </div>

                <div>
                    <span>Kim Jinhwa</span>
                    <span>010.8835.7380</span>
                    <span>12cometome@naver.com</span>
                </div>
            </div>
            <MouseTracker/>
        </nav>

    )
}