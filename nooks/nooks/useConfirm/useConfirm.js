export const useConfirm = (message = "", onConfirm, onCancel) => {
   if (typeof onConfirm === "function") {
      const confirmAction = () => {
         if (window.confirm(message)) {
            onConfirm();
         } else if (typeof onCancel === "function") {
            onCancel();
         }
      };
      return confirmAction;
   }
};
