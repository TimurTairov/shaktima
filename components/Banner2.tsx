import Image from "next/image";
import yogaMarofon from "@/public/yoga-marafon.webp"
import pambati from '@/public/pambati.webp'
import { FiExternalLink } from "react-icons/fi";
import Link from "next/link";

const Banner2 = () => {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-3 lg:gap-5 2xl:gap-8">
      <div className="text-xs md:text-sm  flex flex-col gap-1">
        <a href="https://t.me/mdc_ShaktiMa/4131" target="_blank" rel="noreferrer">
          <Image src={yogaMarofon} alt="Йога марафон" className="w-full rounded-xl g:rounded-3xl shadow-md" />
        </a>
        <div>Йога-марафон с 15 по 28 декабря. Подробнее {' '}
          <Link href="/mdc-events/yoga-marafon">здесь</Link>
        </div>
      </div>
      <div>

        <div className="text-xs md:text-sm  flex flex-col gap-1">
          <a href="https://t.me/mdc_ShaktiMa/4140" target="_blank" rel="noreferrer">
            <Image src={pambati} alt="ПААМБАТИ ДЖАЯНТИ" className="w-full rounded-xl g:rounded-3xl shadow-md" />
          </a>
          <div className="flex gap-1">День явления сиддха Паамбати. Подробнее {' '}
            <a href="https://t.me/mdc_ShaktiMa/4140" target="_blank" rel="noreferrer" className="flex items-center gap-1">
              здесь
              <FiExternalLink />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner2