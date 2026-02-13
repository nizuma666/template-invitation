import Image from "next/image"
import img from "!/landing/img-section5-landing.png"

const Section5 = () => {
    return (
        <section className="bg-rose5 p-6 lg:p-16 flex flex-col lg:flex-row items-center justify-center gap-10">
            <Image src={img} alt="Cara Kerja Arunara" className="lg:w-2/5 w-full" />
            <div className="w-full lg:w-3/5 flex flex-col gap-10">
                <h2 className="font-playfair text-text-title text-[32px] lg:text-[40px]">
                    Cara Kerja Arunara:
                    <br />4 Langkah Simpel Buat Undangan Digital
                </h2>
                <div className="flex flex-col gap-6 w-full">
                    <div className="flex lg:items-center gap-6">
                        <div className="bg-rose2 w-[12%] lg:w-10 h-10 relative overflow-hidden rounded-lg">
                            <p className="text-white text-heading1 absolute -bottom-3 right-2 font-bold">
                                1
                            </p>
                        </div>
                        <div className="flex flex-col gap-2 w-5/6 max-w-[700px]">
                            <h4 className="text-neutral-text5 text-subheading2 font-medium">
                                Pilih Template Favoritmu
                            </h4>
                            <p className="text-neutral-text4 text-sm lg:text-base">
                                Temukan desain yang paling menggambarkan kisah cintamu di
                                arunara.id
                            </p>
                        </div>
                    </div>
                    <div className="flex lg:items-center gap-6">
                        <div className="bg-rose2 w-[12%] lg:w-10 h-10 relative overflow-hidden rounded-lg">
                            <p className="text-white text-heading1 absolute -bottom-3 right-2 font-bold">
                                2
                            </p>
                        </div>
                        <div className="flex flex-col gap-2 w-5/6 max-w-[700px]">
                            <h4 className="text-neutral-text5 text-subheading2 font-medium">
                                Pesan & Dapatkan Dashboard Pribadi
                            </h4>
                            <p className="text-neutral-text4 text-sm lg:text-base">
                                Setelah memesan, kamu langsung mendapatkan akses ke dashboard
                                khusus untuk mengatur semua detail undanganmu dengan mudah.
                            </p>
                        </div>
                    </div>
                    <div className="flex lg:items-center gap-6">
                        <div className="bg-rose2 w-[12%] lg:w-10 h-10 relative overflow-hidden rounded-lg">
                            <p className="text-white text-heading1 absolute -bottom-3 right-2 font-bold">
                                3
                            </p>
                        </div>
                        <div className="flex flex-col gap-2 w-5/6 max-w-[700px]">
                            <h4 className="text-neutral-text5 text-subheading2 font-medium">
                                Atur & Desain Undanganmu
                            </h4>
                            <p className="text-neutral-text4 text-sm lg:text-base">
                                Edit acara, tambahkan foto dan backsound. Semua perubahan
                                tampil secara real-time agar kamu tahu hasil akhirnya sebelum
                                dibagikan.
                            </p>
                        </div>
                    </div>
                    <div className="flex lg:items-center gap-6">
                        <div className="bg-rose2 w-[12%] lg:w-10 h-10 relative overflow-hidden rounded-lg">
                            <p className="text-white text-heading1 absolute -bottom-3 right-2 font-bold">
                                4
                            </p>
                        </div>
                        <div className="flex flex-col gap-2 w-5/6 max-w-[700px]">
                            <h4 className="text-neutral-text5 text-subheading2 font-medium">
                                Kirim Undanganmu dengan Mudah
                            </h4>
                            <p className="text-neutral-text4 text-sm lg:text-base">
                                Bagikan link undangan melalui WhatsApp, media sosial, atau pesan pribadi. Tamu bisa langsung membuka, RSVP, dan meninggalkan ucapan hangat untukmu.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Section5