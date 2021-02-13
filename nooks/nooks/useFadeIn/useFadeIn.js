import { useEffect, useRef } from "react";

export const useFadeIn = (duration = 1, delay = 0) => {
   const element = useRef();

   useEffect(() => {
      if (
         element.current &&
         typeof duration === "number" &&
         typeof delay === "number"
      ) {
         const { current } = element;
         current.style.opacity = 1;
         current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
      }
   }, []);

   return { ref: element, style: { opacity: 0 } };
};
