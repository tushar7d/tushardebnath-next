import { useState } from "react";
import { Dialog } from "@headlessui/react";

const Img = ({s,w,h}) => {
    let [isOpen, setIsOpen] = useState(false);
    return (
      <div>
        <img
          src={s}
          onClick={() => setIsOpen(true)}
          className="mx-auto mb-4 cursor-pointer"
          width={w}
          height={h}
        />
  
        <Dialog
          open={isOpen}
          onClose={() => setIsOpen(false)}
          className="fixed inset-0 z-10 overflow-y-auto"
        >
          <div className="flex items-center justify-center min-h-screen">
            <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
            
  
            <div className="relative p-4 m-12 mx-auto bg-white rounded max-w-fit">
            <img src={s} />
            <button onClick={() => setIsOpen(false)} className="absolute top-0 right-0 p-4 text-black bg-white">
              close

            </button>
              
              
            </div>
          </div>
        </Dialog>
      </div>
    );
  };
  export default Img