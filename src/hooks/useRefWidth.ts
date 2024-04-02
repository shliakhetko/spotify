import { RefObject, useEffect, useState } from "react"

const useRefWidth = (ref : RefObject<any>) => {
    const [width, setWidth] = useState<number>(0);
    useEffect(() => {
      if (!ref.current) return;
      const resizeObserver = new ResizeObserver(() => {
        setWidth(ref.current?.clientWidth || 0);
      });
      resizeObserver.observe(ref.current);
      return () => resizeObserver.disconnect();
    }, []);

    return width;
  }

  export default useRefWidth;