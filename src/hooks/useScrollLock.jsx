import { useEffect, useRef } from "react";

// 컴포넌트 바깥에 선언 가능
export function useScrollLock() {
  const lockedRef = useRef(false);

  useEffect(() => {
    const onWheel = (e) => { if (lockedRef.current) e.preventDefault(); };
    const onTouchMove = (e) => { if (lockedRef.current) e.preventDefault(); };
    const onKeyDown = (e) => {
      if (!lockedRef.current) return;
      const block = ["ArrowUp","ArrowDown","PageUp","PageDown","Home","End"," ","Spacebar"];
      if (block.includes(e.key)) e.preventDefault();
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("touchmove", onTouchMove, { passive: false });
    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  const lock = (v) => {
    lockedRef.current = v;
    document.body.style.overflow = v ? "hidden" : "";
    document.body.style.touchAction = v ? "none" : "";
  };

  return lock;
}
