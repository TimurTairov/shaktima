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
import { GiSettingsKnobs } from "react-icons/gi";
import { useState, useEffect } from "react";



const page = () => {
  const gods = [
    brahma, sarasvati, tripurasundari, vishnu, lakshmi, shiva, parvati, ganesh,
    vasishtha, sripadasrivalabha, dattatreya, dattatreya2, dattatreyaAnagadevi, dhanvantari, kumary, viasa,
    ramalinga, shankara, satyamuni, guru, pribegishe, brahmananda, pambatti, durga,
  ]
  const [value, setValue] = useState(1);

  function chengeValue(event: any) {
    setValue(event.target.value);
  }


  return (
    <Container className="min-h-screen">
      <div className="flex items-center text-2xl md:text-3xl lg:text-4xl  font-bold leading-snug tracking-tight text-gray-800  lg:leading-tight xl:leading-tight dark:text-white">
        <h1 className="w-full text-center ">Виртуальный альтарь</h1>
        <GiSettingsKnobs />
      </div>
      <div className="flex flex-col pb-5 pt-1 my-5 justify-center items-center border rounded-md">
        <div className="form-control w-52">
          <label className="label cursor-pointer">
            <span className="label-text">1</span>
            <input type="radio" name="radio-10" className="radio checked:bg-red-500" value={1} checked={value == 1 ? true : false}
              onChange={chengeValue} defaultChecked />
          </label>
        </div>
        <div className="form-control w-52">
          <label className="label cursor-pointer">
            <span className="label-text">2</span>
            <input type="radio" name="radio-10" className="radio checked:bg-red-500" value={2} checked={value == 2 ? true : false}
              onChange={chengeValue} defaultChecked />
          </label>
        </div>

        <div className="form-control w-52">
          <label className="label cursor-pointer">
            <span className="label-text">3</span>
            <input type="radio" name="radio-10" className="radio checked:bg-red-500" value={3} checked={value == 3 ? true : false}
              onChange={chengeValue} defaultChecked />
          </label>
        </div>
        <label className="text-xl">{value}</label>
      </div>


      <div className="py-5 md:py-10 px-2 md:px-5 gap-1 md:gap-5 lg:gap-7 xl:gap-10 max-h-screen  grid grid-cols-8 bg-red-800 rounded-lg">
        {
          gods.map((god, index) => (
            <div className="flex justify-center">
              <Image key={index} src={god} alt="Сиддхи и божества" loading="lazy" className="w-20 h-auto md:w-40 md:h-35" />
            </div>
          ))
        }
      </div>


    </Container>
  )
}

export default page