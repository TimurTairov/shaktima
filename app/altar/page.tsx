'use client'
import { Container } from "@/components/Container";
import Image from "next/image";
import ganesh from '@/public/img/virt altar/ganesh.png'
import shiva from '@/public/img/virt altar/shiva2.png'
import parvati from '@/public/img/virt altar/parvati2.png'
import lakshmi from '@/public/img/virt altar/lakshmi.png'
import ashtalakshmi from '@/public/img/virt altar/ashtalaksmi.png'
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



const page = () => {
  const gods = [
    brahma, sarasvati, lakshmi, vishnu, shiva, parvati, ganesh,
    vasishtha, sripadasrivalabha, dattatreya, dattatreya2, dattatreyaAnagadevi, dhanvantari, kumary,
    ramalinga, shankara, satyamuni, guru, brahmananda, pambatti, durga
  ]
  return (
    <Container className="min-h-screen">
      <div className="py-5 md:py-10 px-2 md:px-5 gap-3 max-h-screen  grid grid-cols-7 bg-red-800 rounded-lg">
        {
          gods.map(god => (
            <div className="">
              <Image src={god} alt="Сиддхи и божества" className="w-10 h-auto md:w-40 md:h-35" />
            </div>
          ))
        }
      </div>

    </Container>
  )
}

export default page