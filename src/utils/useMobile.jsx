
import { useState, useEffect } from "react";

const useMobile = (size) => {

    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
      function handleResize() {
        if(window.innerWidth < size && !isMobile) setIsMobile(true)
        else if(window.innerWidth >= size && isMobile) setIsMobile(false)
      }
      window.addEventListener("resize", handleResize);
      handleResize();
      return () => window.removeEventListener("resize", handleResize);
    }, [isMobile]); 
    return isMobile;
}

export default useMobile;