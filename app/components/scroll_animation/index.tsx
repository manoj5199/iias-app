import React, { PropsWithChildren, useEffect, useRef, useState } from "react";

const index = ({ children }: PropsWithChildren) => {
  const [visibility, setVisibility] = useState(false);
  const element = useRef<HTMLDivElement>(null);

  const onVisibleHandler = ([
    { isIntersecting },
  ]: IntersectionObserverEntry[]) => {
    setVisibility(isIntersecting);
    console.log(isIntersecting);
  };

  const options: IntersectionObserverInit = {
    root: null,
    rootMargin: "0px",
    threshold: 1,
  };
  useEffect(() => {
    const observer = new IntersectionObserver(onVisibleHandler, options);
    if (element.current) observer.observe(element.current);
    return () => {
      if (element.current) observer.observe(element.current);
    };
  }, [element]);
  return (
    <div ref={element} className={`${visibility ? "animate-pulse" : ""}`}>
      {children}
    </div>
  );
};

export default index;
