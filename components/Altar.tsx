'use client'
import { Container } from "@/components/Container";
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
import { useState, useEffect } from "react";

const Altar = () => {
  const [isFixed, setIsFixed] = useState(false)

  const gods = [
    brahma, sarasvati, tripurasundari, vishnu, lakshmi, shiva, parvati, ganesh,
    vasishtha, sripadasrivalabha, dattatreya, dattatreya2, dattatreyaAnagadevi, dhanvantari, kumary, viasa,
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
              <div className="flex justify-center">
                <Image key={index} src={god} alt="Сиддхи и божества" loading="lazy" className="w-20 h-auto md:w-28 lg:w-32" />
              </div>
            ))
          }
        </div>
        <button className="p-1 border rounded-md bg-white text-black text-xs" onClick={fixAltar}>{isFixed ? "Расфиксировать" : "Зафиксировать"}</button>
      </div>
    </>
  )
}

export default Altar