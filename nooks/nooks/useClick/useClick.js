import { useEffect, useRef } from "react";

export const useClick = (onClick) => {
   const element = useRef();

   useEffect(() => {
      const current = element.current;

      if (current && typeof onClick === "function") {
         current.addEventListener("click", onClick);
      }
      return () => {
         if (current && typeof onClick === "function") {
            current.removeEventListener("click", onClick);
         }
      };
   }, [onClick]);

   return element;
};
