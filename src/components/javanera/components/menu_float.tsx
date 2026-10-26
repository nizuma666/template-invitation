import React, { useState } from 'react';
import { Plus, X, Heart, Calendar, Image as ImageIcon, Gift } from 'lucide-react';

const MenuFloat = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const y = element.getBoundingClientRect().top + window.pageYOffset + 10;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const menuItems = [
    { id: "1", icon: <Heart size={22} strokeWidth={2.5} />, label: 'Mempelai' },
    { id: "2", icon: <Calendar size={22} strokeWidth={2.5} />, label: 'Acara' },
    { id: "3", icon: <ImageIcon size={22} strokeWidth={2.5} />, label: 'Gallery' },
    { id: "4", icon: <Gift size={22} strokeWidth={2.5} />, label: 'Gift' },
  ];

  return (
    <div className="fixed bottom-10 right-6 flex flex-col items-center gap-3 z-30">
      <div
        className={`flex flex-col gap-3 transition-all duration-300 ease-in-out origin-bottom ${
          isOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-90 translate-y-8 pointer-events-none'
        }`}
      >
        {menuItems.map((item) => (
          <button
            onClick={() => handleScroll(item.id)}
            key={item.id}
            title={item.label}
            aria-label={item.label}
            className="w-12 h-12 cursor-pointer bg-javanera-accent rounded-full flex items-center justify-center text-white shadow-md active:scale-90 transition-transform border-2 border-white hover:bg-[#8a4b31]"
          >
            {item.icon}
          </button>
        ))}
      </div>

      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? 'Tutup menu' : 'Buka menu'}
        className="w-14 h-14 cursor-pointer bg-javanera rounded-full flex items-center justify-center text-white shadow-lg active:scale-90 transition-all duration-300 border-2 border-white"
      >
        {isOpen ? <X size={30} strokeWidth={2.5} /> : <Plus size={30} strokeWidth={2.5} />}
      </button>
    </div>
  );
};

export default MenuFloat;
