import Image from "next/image";
import { motion } from "motion/react"
import pengantinWanita from "!/b&w/pengantinWanita.png"
import pengantinPria from "!/b&w/pengantinPria.png"
/* eslint-disable @typescript-eslint/no-explicit-any */
export default function Section2({data}: {data: any}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        visible: { transition: { staggerChildren: 0.3 } },
      }}
      className="relative z-20 flex flex-col gap-y-10">
      {/* Bagian teks atas */}
      <div className="bg-black p-10 rounded-br-[80px]">
        <p className="font-alice text-[28px]">
          We are Getting Married
        </p>
        <p className="text-sm">
          With hearts full of love and gratitude, we are delighted to share the most beautiful chapter of our story. We warmly invite you to join us in celebrating our wedding day.
        </p>
      </div>

      {/* Bagian Bride dan Groom */}
      <div className="flex flex-col gap-y-6 px-10 py-10">
        {/* Bride */}
        <motion.div
          initial={{ opacity: 0, x: -80, rotateY: -10 }}
          whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="flex flex-col gap-y-[11px]"
        >
          <div className="px-[50px]">
            <div className="flex items-center gap-x-3">
              <p className="text-subheading2 font-akatab">Bride</p>
              <div className="bg-white h-0.5 w-full" />
            </div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="border-2 border-white p-2 mt-2"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="border-8 border-white/50"
              >
                <Image src={data.image_pengantin_wanita} alt="Jane Angelina" width={200} height={200} />
              </motion.div>
            </motion.div>
            <p className="font-alice text-heading1 text-center mt-3">{data.pengantin_wanita}</p>
          </div>
          <p className="font-akatab text-sm text-center text-nowrap">
            Bpk. {data.nama_pengantin_bapak_wanita} & Ibu {data.nama_pengantin_ibu_wanita}
          </p>
        </motion.div>

        {/* Groom */}
        <motion.div
          initial={{ opacity: 0, x: 80, rotateY: 10 }}
          whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="flex flex-col gap-y-[11px]"
        >
          <div className="px-[50px]">
            <div className="flex items-center gap-x-3">
              <div className="bg-white h-0.5 w-full" />
              <p className="text-subheading2 font-akatab">Groom</p>
            </div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="border-2 border-white p-2 mt-2"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="border-8 border-white/50"
              >
                <Image src={data?.image_pengantin_pria} alt="Nguyen Fanhouten" width={200} height={200} />
              </motion.div>
            </motion.div>
            <p className="font-alice text-heading1 text-center mt-3">{data.pengantin_pria}</p>
          </div>
          <p className="font-akatab text-sm text-center text-nowrap">
            Bpk. {data.nama_pengantin_bapak_pria} & {data.nama_pengantin_ibu_pria}
          </p>
        </motion.div>
      </div>
    </motion.div>
  )
}