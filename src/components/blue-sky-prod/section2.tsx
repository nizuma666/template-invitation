import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { InstagramLogoIcon } from "@phosphor-icons/react";
/* eslint-disable @typescript-eslint/no-explicit-any */

export default function Section2({ content }: { content: any }) {
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section className="w-full bg-white py-16 px-10 flex flex-col items-center overflow-x-hidden">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={itemVariants}
        className=" mb-12"
      >
        <p className="text-[#629BC0] font-allison text-[32px] mb-[-10px]">Couple</p>
        <h2 className="text-[#212121] font-sarabun text-[28px] font-bold">Two Souls, One Story</h2>
        <p className="text-[#757575] font-sarabun text-[14px] mt-4 max-w-[300px] mx-auto leading-relaxed">
          Two souls brought together by grace, now ready to begin a lifetime of love and devotion.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true }}
        className="flex flex-col items-center mb-16"
      >
        <div className="bg-white p-4 rounded-xl shadow-xl shadow-blue-100/50 mb-6">
          <div className="relative w-[240px] h-[240px] overflow-hidden rounded-lg">
            <Image
              src={content?.image_pengantin_wanita}
              alt={content?.nama_pengantin_wanita}
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

        <h3 className="text-[#629BC0] font-sarabun text-[24px] font-bold">{content?.nama_pengantin_wanita}</h3>
        <p className="text-[#629BC0] font-allura text-[18px]">Putri dari</p>
        <p className="text-[#212121] font-sarabun text-[14px] font-medium text-center">
          Bpk. {content?.nama_pengantin_bapak_wanita} & Ibu {content?.nama_pengantin_ibu_wanita}
        </p>
        {content?.sosial_media_wanita && (
          <div className="inline-flex items-center gap-1 px-3 mt-3 bg-[#629BC01A] font-sarabun py-1 rounded-full text-xs lg:text-sm text-[#629BC0] font-medium">
            <InstagramLogoIcon size={16} />
            {content?.sosial_media_wanita}
          </div>
        )}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true }}
        className="flex flex-col items-center"
      >
        <div className="bg-white p-4 rounded-xl shadow-xl shadow-blue-100/50 mb-6">
          <div className="relative w-[240px] h-[240px] overflow-hidden rounded-lg">
            <Image
              src={content?.image_pengantin_pria}
              alt={content?.nama_pengantin_pria}
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

        <h3 className="text-[#629BC0] font-sarabun text-[24px] font-bold">{content?.nama_pengantin_pria}</h3>
        <p className="text-[#629BC0] font-allura text-[18px]">Putra dari</p>
        <p className="text-[#212121] font-sarabun text-[14px] font-medium text-center">
          Bpk. {content?.nama_pengantin_bapak_pria} & Ibu {content?.nama_pengantin_ibu_pria}
        </p>
        {content?.sosial_media_pria && (
          <div className="inline-flex items-center gap-1 px-3 mt-3 bg-[#629BC01A] font-sarabun py-1 rounded-full text-xs lg:text-sm text-[#629BC0] font-medium">
            <InstagramLogoIcon size={16} />
            {content?.sosial_media_pria}
          </div>
        )}
      </motion.div>
    </section>
  );
}
