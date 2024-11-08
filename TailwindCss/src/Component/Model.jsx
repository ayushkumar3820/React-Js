import React from 'react';
import { createPortal } from 'react-dom';

export default function Modal({ isOpen, setIsOpen, header, footer, children }) {
  const portalElement = document.getElementById('portal');

  // Log the props to see what is being passed
  console.log("Modal Props:", { isOpen, header, footer, children });

  if (!portalElement) {
    console.error("Portal element not found");
    return null; // Return null if the portal element is not found
  }

  if (!isOpen) return null; // Don't render if the modal is not open

  return createPortal(
    <div
      onClick={() => setIsOpen(false)}
      className="fixed inset-0 flex items-center justify-center bg-black/40 px-4"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="max-w-2xl grow rounded-lg bg-white p-4 shadow-lg"
      >
        {header}
        <div className="-mx-4 my-3 flex flex-wrap gap-4 border-y px-4 py-4">
          {React.Children.map(children, (child) => {
            if (React.isValidElement(child)) {
              return child;
            } else {
              console.error("Invalid child passed to Modal:", child);
              return null; // Return null for invalid children
            }
          })}
        </div>
        {footer}
      </div>
    </div>,
    portalElement
  );
}