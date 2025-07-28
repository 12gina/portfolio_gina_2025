
import { useEffect, useRef, useState } from 'react';
import { CircularText } from "./components";

export const MouseTracker = () => {

    const [pointerOn, setPointerOn] = useState(false);
    const [mouseStopped, setMouseStopped] = useState(false);
    const [textPop, setTextPop] = useState(false);
    const stopTimer = useRef(null);

    const cursorRef = useRef(null);
    const pos = useRef({ x: 0, y: 0, tx: 0, ty: 0 });

    useEffect(() => {
        const cursor = cursorRef.current;
        if (!cursor) return;

        const handleMouseMove = (e) => {
            pos.current.tx = e.pageX + 10; // 실제 마우스 위치(목표 위치)
            pos.current.ty = e.pageY + 10;

            const el = document.elementFromPoint(e.clientX, e.clientY); // 마우스 위치의 요소 확인
            if (el) {
                const cursorStyle = window.getComputedStyle(el).cursor;
                setPointerOn(cursorStyle === 'pointer');
            }

            setMouseStopped(false); // handleMouseMove 이벤트가 실행되면 지속적으로 setMouseStopped 값을 false로 하고 타이머를 실행함.
            clearTimeout(stopTimer.current);
            stopTimer.current = setTimeout(() => {
                setMouseStopped(true);
            }, 3000); // 3초간 handleMouseMove가 실행되지 않으면 멈춤으로 판단
        };

        const animate = () => {
            // lerp 계수: 0.1 → 10%씩 따라감
            pos.current.x += (pos.current.tx - pos.current.x) * 0.1;  // 현재 ".pointer"의 위치
            pos.current.y += (pos.current.ty - pos.current.y) * 0.1;  // 0.05~0.2 사이의 숫자를 곱해 끌리는 정도 조절
            cursor.style.left = pos.current.x + 'px';
            cursor.style.top  = pos.current.y + 'px';
            requestAnimationFrame(animate);
        };

        document.addEventListener('mousemove', handleMouseMove);
        animate();

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            clearTimeout(stopTimer.current);
        };
    }, []);

    useEffect(()=>{
        if (!pointerOn && mouseStopped) {
            // setTimeout(()=>setTextPop(true), 3000)
            setTextPop(true)
        } else {
            setTextPop(false)
        }
    }, [pointerOn, mouseStopped])
    

    return (
        <div className={`pointer`} ref={cursorRef}>
            <div>
                <div className={`${pointerOn? "on" : "off"}`} />
                <CircularText className={`${textPop? "on" : "off"}`} />
            </div>
        </div>
    );
};
