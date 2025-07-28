import { useEffect, useRef } from "react";

export const MenuButton = ({className="",isMenuButtonOn, onClick, targetRef}) => {
    const menuRef1=useRef(null);
    const menuRef2=useRef(null);
    const menuRef3=useRef(null);

    useEffect(() => {
        const handleScroll = () => {

        if (!targetRef?.current) return;

        const top = targetRef.current.getBoundingClientRect().top;
        const bottom = targetRef.current.getBoundingClientRect().bottom;

        if (top <= 0 && bottom > 0) {
            menuRef1.current.style.backgroundColor = 'white';
            menuRef2.current.style.backgroundColor = 'white';
            menuRef3.current.style.backgroundColor = 'white';
        } else {
            menuRef1.current.style.backgroundColor = 'black';
            menuRef2.current.style.backgroundColor = 'black';
            menuRef3.current.style.backgroundColor = 'black';
        }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <article className={`menu-button ${className} ${isMenuButtonOn? "on":""}`} onClick={onClick} >
            <span ref={menuRef1} />
            <span ref={menuRef2}/>
            <span ref={menuRef3}/>
        </article>
    )
}