"use client"
import React from 'react'
import { AiOutlineClose } from "react-icons/ai";
const Modal = ({isOpen,onClose,children}) => {
  
    if (!isOpen) {
        return null;
      }

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center modal-overlay bg-black bg-opacity-50">
  <div className="bg-white p-4 rounded modal w-1/2 overflow-auto relative">
    <button
      className="absolute top-2 right-2 bg-orange-900 hover:text-gray-900 cursor-pointer rounded text-white font-bold py-2 px-4"
      onClick={onClose}
    >
      <AiOutlineClose />
    </button>
    {children}
  </div>
</div>

  )
}

export default Modal