import { AnimatePresence } from "framer-motion";
import { createContext, useContext, useState } from "react";
import Dialog from "../components/Dialog/Dialog";

const DialogContext = createContext(null);

const DialogProvider = ({ children }) => {
  const [isTemplateDialogOpen, setIsTemplateDialogOpen] = useState(false);

  return (
    <DialogContext.Provider value={{setIsTemplateDialogOpen}}>
      {children}
      <AnimatePresence>
        {isTemplateDialogOpen && (
          <Dialog onClose={() => setIsTemplateDialogOpen(false)}>
            {/* Make this its own component */}
            Test Dialog
          </Dialog>
        )}
      </AnimatePresence>
    </DialogContext.Provider>
  );
};

const useDialog = () => {
  const context = useContext(DialogContext);
  if (!context) {
    throw new Error("useDialog must be used within an DialogProvider");
  }
  return context;
};

export { DialogProvider, useDialog };
