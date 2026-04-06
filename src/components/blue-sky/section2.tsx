import Image from "next/image";
import { motion } from "framer-motion";

// Asumsi: Kamu sudah memiliki asset foto pengantin
import PhotoBride from "!/blue-sky/brideProfile.png";
import PhotoGroom from "!/blue-sky/groomProfile.png";

export default function Section2() {
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section className="w-full bg-white py-16 px-10 flex flex-col items-center">
      {/* Header Section */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={itemVariants}
        className="text-center mb-12"
      >
        <p className="text-[#629BC0] font-allison text-[32px] mb-[-10px]">Couple</p>
        <h2 className="text-[#212121] font-sarabun text-[32px] font-bold">Two Souls, One Story</h2>
        <p className="text-[#757575] font-sarabun text-[14px] mt-4 max-w-[300px] mx-auto leading-relaxed">
          Two souls brought together by grace, now ready to begin a lifetime of love and devotion.
        </p>
      </motion.div>

      {/* Profil Pengantin Wanita */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={itemVariants}
        className="flex flex-col items-center mb-16"
      >
        <div className="bg-white p-4 rounded-xl shadow-xl shadow-blue-100/50 mb-6">
          <div className="relative w-[240px] h-[240px] overflow-hidden rounded-lg">
            <Image 
              src={PhotoBride} 
              alt="Jenny Soraya" 
              fill
              className="object-cover"
            />
          </div>
          {/* Titik dekoratif sesuai desain */}
          <div className="flex gap-x-2 mt-4">
            <div className="bg-[#E3EEFA] h-3 w-3 rounded-full" />
            <div className="bg-[#9BD1F4] h-3 w-3 rounded-full" />
            <div className="bg-[#F1EBE5] h-3 w-3 rounded-full" />
            <div className="bg-[#D8C0AF] h-3 w-3 rounded-full" />
          </div>
        </div>
        
        <h3 className="text-[#629BC0] font-sarabun text-[24px] font-bold">Jenny Soraya</h3>
        <p className="text-[#757575] font-allison text-[18px] italic mb-1">Putri dari</p>
        <p className="text-[#212121] font-sarabun text-[14px] font-medium text-center">
          Bpk. Hendra Saputra & Ibu Lina Kartika
        </p>
      </motion.div>

      {/* Profil Pengantin Pria */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={itemVariants}
        className="flex flex-col items-center"
      >
        <div className="bg-white p-4 rounded-xl shadow-xl shadow-blue-100/50 mb-6">
          <div className="relative w-[240px] h-[240px] overflow-hidden rounded-lg">
            <Image 
              src={PhotoGroom} 
              alt="Groom Name" 
              fill
              className="object-cover"
            />
          </div>
          <div className="flex gap-x-2 mt-4">
            <div className="bg-[#E3EEFA] h-3 w-3 rounded-full" />
            <div className="bg-[#9BD1F4] h-3 w-3 rounded-full" />
            <div className="bg-[#F1EBE5] h-3 w-3 rounded-full" />
            <div className="bg-[#D8C0AF] h-3 w-3 rounded-full" />
          </div>
        </div>

        <h3 className="text-[#629BC0] font-sarabun text-[24px] font-bold">Jhon Doe</h3>
        <p className="text-[#757575] font-allison text-[18px] italic mb-1">Putra dari</p>
        <p className="text-[#212121] font-sarabun text-[14px] font-medium text-center">
          Bpk. Nama Ayah & Ibu Nama Ibu
        </p>
      </motion.div>
    </section>
  );
}