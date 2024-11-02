'use client'
import Image from "next/image";
import ganesh from '@/public/img/virt altar/ganesh.png'
import shiva from '@/public/img/virt altar/shiva2.png'
import parvati from '@/public/img/virt altar/parvati2.png'
import lakshmi from '@/public/img/virt altar/lakshmi.png'
import tripurasundari from '@/public/img/virt altar/tripurasundari.png'
import sarasvati from '@/public/img/virt altar/sarasvati.png'
import brahma from '@/public/img/virt altar/brahma2.png'
import vishnu from '@/public/img/virt altar/vishnu2.png'
import dattatreya from '@/public/img/virt altar/dattatreya.png'
import dattatreya2 from '@/public/img/virt altar/dattatreya2.png'
import dattatreyaAnagadevi from '@/public/img/virt altar/dattatreyaianagadevi.png'
import dhanvantari from '@/public/img/virt altar/dhanvantari.png'
import kumary from '@/public/img/virt altar/kumary.png'
import brahmananda from '@/public/img/virt altar/brahmananda.png'
import durga from '@/public/img/virt altar/durga.png'
import vasishtha from '@/public/img/virt altar/vasishtha.png'
import sripadasrivalabha from '@/public/img/virt altar/sripadasrivalabha.png'
import pambatti from '@/public/img/virt altar/pambatti.png'
import shankara from '@/public/img/virt altar/shankarachariya.png'
import satyamuni from '@/public/img/virt altar/satyamuni.png'
import ramalinga from '@/public/img/virt altar/ramalinga.png'
import guru from '@/public/img/virt altar/guru2.png'
import viasa from '@/public/img/virt altar/viyasa.png'
import pribegishe from '@/public/img/virt altar/pribegishe.png'
import { useState } from "react";
import { AiOutlineArrowsAlt } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";

const Altar = () => {
  const [isFixed, setIsFixed] = useState(false)

  const gods = [
    // ПЕРВЫЙ РЯД
    brahma, sarasvati, tripurasundari, vishnu, lakshmi, shiva, parvati, ganesh,
    // ВТОРОЙ РЯД
    vasishtha, sripadasrivalabha, dattatreya, dattatreya2, dattatreyaAnagadevi, dhanvantari, kumary, viasa,
    // ТРЕТИЙ РЯД
    ramalinga, shankara, satyamuni, guru, pribegishe, brahmananda, pambatti, durga,
  ]


  const fixAltar = () => {
    const altar = document.getElementById('altar')
    const sutra = document.getElementById('sutra')
    altar?.classList.toggle('fixAltar')
    sutra?.classList.toggle('marginTop')
    setIsFixed(!isFixed)
  }

  return (
    <>
      <div id="altar" className="">
        <div className="py-5 md:py-7 px-2 md:px-3 gap-1 md:gap-5 max-h-screen  grid grid-cols-8 bg-red-800 rounded-lg">
          {
            gods.map((god, index) => (
              <div key={index} className="flex justify-center">
                <Image src={god} alt="Сиддхи и божества" className="w-20 h-auto md:w-28 lg:w-32" />
              </div>
            ))
          }
        </div>
        <button className="mt-1 p-0.5 border border-gray-200 dark:border-gray-600 rounded-md bg-white dark:bg-base-content text-black verySmallText md:text-xs" onClick={fixAltar}>
          {isFixed ? (
            <>
              <AiOutlineClose className="w-4 h-4 text-gray-400" />
            </>
          ) :
            (
              <>
                <AiOutlineArrowsAlt className="w-4 h-4 text-gray-500 " />
              </>
            )

          }
        </button>
      </div>
    </>
  )
}

export default Altar