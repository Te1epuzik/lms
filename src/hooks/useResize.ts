import { useState, useEffect } from "react";

type TSize = Readonly<{ 
	width: number; 
	height: number; 
	isTablet: boolean; 
	isDesc: boolean; 
}>

export const useResize = () => {
  const [size, setSize] = useState<TSize>({
    width: window.innerWidth,
    height: window.innerHeight,
    isTablet: window.innerWidth > 768 && window.innerWidth <= 1024,
    isDesc: window.innerWidth > 1024,
  });

  const handleResize = () => {
    setSize({
      width: window.innerWidth,
      height: window.innerHeight,
      isTablet: window.innerWidth > 768 && window.innerWidth <= 1024,
      isDesc: window.innerWidth > 1024,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  });

  return size;
};
