import Image from "next/image"
import Link from "next/link"
import baner from "@/public/img/Mahashivaratri25.webp"

const BanerMahashivaratri25 = () => {
  return (
    <div className="w-full flex justify-center">
      <Link href='/mdc-events/mahashivaratri2025' className="w-full lg:max-w-screen-lg">
        <Image src={baner} alt="Махашиваратри 2025" className="w-full h-auto rounded-3xl border-2 border-amber-400" />
      </Link>

    </div>
  )
}

export default BanerMahashivaratri25