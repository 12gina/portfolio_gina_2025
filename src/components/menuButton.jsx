import { useEffect, useRef, useState } from "react";

export const MenuButton = ({isMenuButtonOn, onClick, sectionRefs}) => {
    
    const menuRef1=useRef(null);
    const menuRef2=useRef(null);
    const menuRef3=useRef(null);

    useEffect(() => {
        const handleScroll = () => {

            if (!sectionRefs?.current) return;

            const aboutMeTop = sectionRefs.current.aboutMe?.getBoundingClientRect().top;
            const aboutMeBottom = sectionRefs.current.aboutMe?.getBoundingClientRect().bottom;

            // if (aboutMeTop <= 0 && aboutMeBottom > 0) {
            //     menuRef1.current.style.backgroundColor = 'white';
            //     menuRef2.current.style.backgroundColor = 'white';
            //     menuRef3.current.style.backgroundColor = 'white';
            // } else {
            //     menuRef1.current.style.backgroundColor = 'black';
            //     menuRef2.current.style.backgroundColor = 'black';
            //     menuRef3.current.style.backgroundColor = 'black';
            // }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <article className={`menu-button ${isMenuButtonOn? "on":""}`} onClick={onClick} >
            <span ref={menuRef1} />
            <span ref={menuRef2}/>
            <span ref={menuRef3}/>
        </article>
    )
}