import { Plus } from 'lucide-react'
import React from 'react'

const menuFloat = () => {
  return (
     <button className="fixed bottom-10 right-6 w-14 h-14 bg-[#D89F83] rounded-full flex items-center justify-center text-white shadow-lg active:scale-90 transition-transform z-50">
        <Plus size={32} weight="bold" />
      </button>
  )
}

export default menuFloat