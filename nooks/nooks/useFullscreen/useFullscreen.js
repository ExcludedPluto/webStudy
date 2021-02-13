import { useRef } from "react";

export const useFullScreen = (callback) => {
   const element = useRef();

   const implementCallback = (isFull) => {
      if (callback && typeof callback === "function") {
         callback(true);
      }
   };
   const triggerFullScreen = () => {
      if (element.current) {
         if (element.current.requestFullscreen) {
            element.current.requestFullscreen();
         } else if (element.current.mozRequestFullScreen) {
            element.current.mozRequestFullScreen();
         } else if (element.current.webkitRequestFullscreen) {
            element.current.mozRequestFullScreen();
         } else if (element.current.msRequestFullscreen) {
            element.current.mozRequestFullScreen();
         }
         implementCallback(true);
      }
   };
   const exitFull = () => {
      if (document.exitFullscreen) {
         document.exitFullscreen();
      } else if (document.mozCancelFullScreen) {
         document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
         document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
         document.msExitFullscreen();
      }
      implementCallback(false);
   };
   return { element, triggerFullScreen, exitFull };
};
