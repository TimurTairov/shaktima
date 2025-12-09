import Link from 'next/link'
import Image from 'next/image'
import logo from '@/public/ShaktiMa-logo.webp'
import localFont from "next/font/local"

const izmir = localFont({
  src: "../app/fonts/dsizmir_normal.ttf",
  variable: "--font-izmir",
});

const Logo = () => {

  return (
    <Link href='/' className="dark:hover:bg-gray-700">
      <div className="flex items-center space-x-2 font-medium">
        <Image
          src={logo}
          width="32"
          alt="N"
          height="32"
          loading="eager"
          className="w-8 rounded-full"
        />
        <h2 className={`text-3xl xl:text-4xl font-great-vibes text-red-500 ${izmir.className}`}>
          ШактиМа
        </h2>
      </div>
    </Link >
  )
}

export default Logo