import { useState, useEffect } from "react";

const useScroll = () => {
  const [bodyOffset, setBodyOffset] = useState(
    document.body.getBoundingClientRect()
  );
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [scrollDown, setScrollDown] = useState(false);

  const listener = (e) => {
    setBodyOffset(document.body.getBoundingClientRect());
    setScrollDown(lastScrollTop < -bodyOffset.top);
    setLastScrollTop(-bodyOffset.top);
  };

  useEffect(() => {
    window.addEventListener("scroll", listener);
    return () => {
      window.removeEventListener("scroll", listener);
    };
  });

  return {
    scrollDown,
  };
};

export default useScroll;
