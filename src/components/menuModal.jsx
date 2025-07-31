import { useState } from "react";
import { menuList } from "../constants/constants";
import { MouseTracker } from "./MouseTracker";
import { GithubOutlined, MailOutlined } from "@ant-design/icons";
import { Alert } from "./components";

export const MenuModal = ({sectionRefs, isMenuModalOpen, setIsMenuModalOpen, currentSection, setCurrentSection}) => {

    const [mouseOverMenu, setMouseOverMenu] = useState("")
    const [isAlertOn, setIsAlertOn] = useState(false)

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

    function copyText (v) {
        setIsAlertOn(false)
        navigator.clipboard.writeText(v)
        .then(() => {
            setIsAlertOn(true)
            setTimeout(()=>setIsAlertOn(false), 1000)
        }).catch((err) => {
        console.error("복사 실패:", err);
      });
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
                        <span onClick={()=>copyText("010-8835-7380")}>010.8835.7380</span>
                        <span onClick={()=>copyText("cometome1212@gmail.com")}>cometome1212@gmail.com</span>
                        <a href="" target="_blank" rel="noopener noreferrer" ><GithubOutlined /></a>
                    </div>
                </div>
            </nav>
            <Alert on={isAlertOn}/>
            <MouseTracker/>
        </>

    )
}