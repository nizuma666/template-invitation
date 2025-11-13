import love from "!/landing/icon-love-landing-section2.svg"
import glass from "!/landing/icon-glass-landing-section2.svg"
import makeup from "!/landing/icon-makeup-landing-section2.svg"
import Image from "next/image"
import img from "!/landing/img-section2-landing.png"
const Section2 = () => {
    return (
        <section className="w-full min-h-screen bg-white relative pt-[80px] px-16">
            <div className="bg-white border w-[1200px] border-rose4 rounded-xl p-8 flex justify-center items-center gap-8 absolute -top-20 z-30 mx-auto left-1/2 -translate-x-1/2">
                <div className="flex items-center justify-center gap-4">
                    <Image src={love} width={64} height={64} alt="Meaningful" />
                    <div className="flex flex-col gap-1">
                        <p className="text-neutral-text5 text-subheading1 font-semibold">Meaningful</p>
                        <p className="text-neutral-text4">Dirancang untuk menyampaikan kisah cintamu.</p>
                    </div>
                </div>
                <div className="h-16 border-rose3 border" />
                <div className="flex items-center justify-center gap-4">
                    <Image src={glass} width={64} height={64} alt="Meaningful" />
                    <div className="flex flex-col gap-1">
                        <p className="text-neutral-text5 text-subheading1 font-semibold">Effortless</p>
                        <p className="text-neutral-text4">Siap dalam hitungan menit, persiapan tanpa ribet.</p>
                    </div>
                </div>
                <div className="h-16 border-rose3 border" />
                <div className="flex items-center justify-center gap-4">
                    <Image src={makeup} width={64} height={64} alt="Meaningful" />
                    <div className="flex flex-col gap-1">
                        <p className="text-neutral-text5 text-subheading1 font-semibold">Personalized</p>
                        <p className="text-neutral-text4">Undangan bisa disesuaikan dengan keinginan kamu.</p>
                    </div>
                </div>
            </div>
            <div className="w-full h-full flex flex-col gap-10 p-16">
                <div className="flex flex-col justify-center items-center gap-4 text-center px-[175px]">
                    <p className="!font-playfair font-semibold text-heading1">Kemudahan di Persiapan Nikahmu</p>
                    <p className="text-subheading2 text-neutral-text4">Karena setiap momen berharga pantas dijalani tanpa stres. Biarkan Arunara bantu kamu menikmati setiap langkah menuju hari bahagia.</p>
                </div>
                <div className="flex gap-6 justify-center items-stretch">
                    <div className="bg-rose5 rounded-2xl border border-rose3 flex flex-col gap-6 p-10 w-1/4">
                        <p className="text-center font-bold text-heading2">Fitur Arunara</p>
                        <div className="rounded-lg border border-rose3 bg-white py-4 text-center text-rose1">Unlimited Guess</div>
                        <div className="rounded-lg border border-rose3 bg-rose3 py-4 text-center text-rose1">Ubah Tanpa Ribet</div>
                        <div className="rounded-lg border border-rose3 bg-rose1 py-4 text-center text-white">Real-Time Preview</div>
                        <div className="rounded-lg border border-rose3 bg-white py-4 text-center text-rose1">Atur Rekening Gift</div>
                        <div className="rounded-lg border border-rose3 bg-white py-4 text-center text-rose1">Instan Share</div>
                        <div className="rounded-lg border border-rose3 bg-white py-4 text-center text-rose1">Link to Google Maps</div>
                        <div className="rounded-lg border border-rose3 bg-white py-4 text-center text-rose1">RSVP & Wedding Wishes</div>
                        <div className="rounded-lg border border-rose3 bg-white py-4 text-center text-rose1">Countdown Timer</div>
                    </div>
                    <div className="w-3/4 p-10 rounded-2xl border border-[#D9D9D9] flex flex-col gap-8 justify-center items-center">
                        <Image src={img} width={808} height={400} alt="Real Time" className="w-full h-full object-cover rounded-2xl" />
                        <div className="flex flex-col gap-2">
                            <p className="font-bold font-playfair text-2xl">Lihat Hasilnya Secara Real-Time</p>
                            <p className="text-subheading2 text-neutral-text4">Setiap perubahan yang kamu buat langsung terupdate tanpa harusmenunggu lama. Kamu bisa memastikan foto, dan teks tampil seindah yang kamu bayangkan. Dengan pengalaman yang cepat dan responsif, membuat undangan jadi terasa menyenangkan dan intuitif.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )

}

export default Section2