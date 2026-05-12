import React, { useState } from 'react';
import { Plus, X, Heart, Calendar, Image as ImageIcon, Gift } from 'lucide-react';

const MenuFloat = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

     const handleScroll = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            const yOffset = 10; // menyesuaikan tinggi navbar
            const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

            window.scrollTo({ top: y, behavior: "smooth" });
        }
    };

  // Daftar menu shortcut agar kodenya lebih rapi (DRY)
  const menuItems = [
    { id: 1, icon: <Heart size={24} strokeWidth={2.5} />, label: 'Like' },
    { id: 2, icon: <Calendar size={24} strokeWidth={2.5} />, label: 'Event' },
    { id: 3, icon: <ImageIcon size={24} strokeWidth={2.5} />, label: 'Gallery' },
    { id: 4, icon: <Gift size={24} strokeWidth={2.5} />, label: 'Gift' },
  ];

  return (
    // Wrapper utama, di-set fixed di pojok kanan bawah
    <div className="fixed bottom-10 cursor-pointer right-6 flex flex-col items-center gap-3 z-30">
      
      {/* Container untuk menu shortcut */}
      <div 
        className={`flex flex-col gap-3 transition-all duration-300 ease-in-out origin-bottom ${
          isOpen 
            ? 'opacity-100 scale-100 translate-y-0' 
            : 'opacity-0 scale-90 translate-y-8 pointer-events-none'
        }`}
      >
        {menuItems.map((item) => (
          <button
          onClick={() => handleScroll(item.id)}
            key={item.id}
            title={item.label}
            className="w-12 h-12 bg-[#FDC7A9] rounded-full flex items-center justify-center text-white shadow-md active:scale-90 transition-transform border-2 border-white hover:bg-[#ebad8f]"
          >
            {item.icon}
          </button>
        ))}
      </div>

      {/* Tombol Utama */}
      <button
        onClick={toggleMenu}
        className="w-14 h-14 bg-[#D89F83] rounded-full flex items-center justify-center text-white shadow-lg active:scale-90 transition-all duration-300 border-2 border-white"
      >
        {/* Kondisi: Jika terbuka tampilkan X, jika tertutup tampilkan Plus */}
        {isOpen ? (
          <X size={32} strokeWidth={2.5} className="animate-in spin-in-90" />
        ) : (
          <Plus size={32} strokeWidth={2.5} className="animate-in spin-in-90" />
        )}
      </button>
      
    </div>
  );
};

export default MenuFloat;