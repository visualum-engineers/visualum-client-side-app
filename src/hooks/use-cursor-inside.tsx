import { useEffect, useState } from "react";

const useCursorInside = (el: HTMLElement | null) => {
  const [inside, setInside] = useState(false);
  useEffect(() => {
    const hoverInFunc = () => setInside(true);
    const hoverOutFunc = () => setInside(false);
    const touchDown = () => setInside((state) => !state);
    if (!el) return;
    el.addEventListener("mouseenter", hoverInFunc);
    el.addEventListener("mouseleave", hoverOutFunc);
    el.addEventListener("touchdown", touchDown);
    const cleanup = () => {
      el.removeEventListener("mouseenter", hoverInFunc);
      el.removeEventListener("mouseleave", hoverOutFunc);
      el.removeEventListener("touchdown", touchDown);
    };
    return () => cleanup();
  });
  return inside;
};
export default useCursorInside;
