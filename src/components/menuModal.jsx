import { useState } from "react";
import { menuList } from "../constants/constants";
import { MouseTracker } from "./MouseTracker";

export const MenuModal = ({sectionRefs, isMenuModalOpen, setIsMenuModalOpen, currentSection, setCurrentSection}) => {

    const [mouseOverMenu, setMouseOverMenu] = useState("")

    function handleMouseOver (e) {
        setMouseOverMenu(e.target.innerText)
    }

    function handleMouseLeave () {
        setMouseOverMenu("")
    }

    function closeModal (id) {
        const el = sectionRefs.current[id];
        if (el) {
            el.scrollIntoView({ 
            behavior: 'smooth',  
            block: 'start'       // 섹션의 시작 부분이 뷰포트 상단에 맞춰지도록
            });
        }
        setCurrentSection(id);
        setIsMenuModalOpen(false);
    }
    return (
        <>
            <nav className={isMenuModalOpen? "on":""}>
                <div>
                    <div className="main-menu">
                        {menuList.map((v, i)=>(
                            <span key={i} className={(mouseOverMenu===v.menu)||(!mouseOverMenu&&currentSection===v.id)? "on" : ""} onClick={()=>closeModal(v.id)}
                            onMouseOver={(e)=>handleMouseOver(e)} onMouseLeave={handleMouseLeave}>{v.menu}</span>
                        ))}
                    </div>

                    <div>
                        <span>Kim Jinhwa</span>
                        <span>010.8835.7380</span>
                        <span>12cometome@naver.com</span>
                    </div>
                </div>
            </nav>
            <MouseTracker/>
        </>

    )
}