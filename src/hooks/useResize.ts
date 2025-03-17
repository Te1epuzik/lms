import { useState, useEffect, useLayoutEffect } from "react";

type TSize = Readonly<{ 
	width: number; 
	height: number; 
	isTablet: boolean; 
	isDesktop: boolean; 
}>

export const useResize = () => {
  const [size, setSize] = useState<TSize>({
		width: 0,
		height: 0,
		isTablet: false,
		isDesktop: false,
	});

	useLayoutEffect(() => {
		if (size.width > 0) {
			return;
		}

		setSize({
			width: window.innerWidth,
			height: window.innerHeight,
			isTablet: window.innerWidth > 768 && window.innerWidth <= 1024,
			isDesktop: window.innerWidth > 1024,
		});
	})

  const handleResize = () => {
    setSize({
      width: window.innerWidth,
      height: window.innerHeight,
      isTablet: window.innerWidth > 768 && window.innerWidth <= 1024,
      isDesktop: window.innerWidth > 1024,
    });
  };

  useEffect(() => {

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  });

  return size;
};
