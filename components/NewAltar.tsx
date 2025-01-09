'use client'
import Image from "next/image";
import altar from '@/public/altar/altar.webp'
import altar2 from '@/public/altar/altar48.webp'
import { useState } from "react";
import { AiOutlineArrowsAlt } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";

const Altar = () => {
  const [isFixed, setIsFixed] = useState(false)

  const fixAltar = () => {
    const altar = document.getElementById('altar')
    const sutra = document.getElementById('sutra')
    altar?.classList.toggle('fixAltar')
    sutra?.classList.toggle('marginTop')
    setIsFixed(!isFixed)
  }

  return (
    <>
      <div id="altar">
        <Image src={altar} alt="Сиддхи и божества" className="w-full h-auto rounded-md block lg:hidden" />
        <Image src={altar2} alt="Сиддхи и божества" className="w-full h-auto rounded-md hidden lg:block" />
        <div className="w-full flex h-6">
          <button className="mt-1 ml-1 p-0.5 border border-red-500  rounded-md bg-white dark:bg-base-content" onClick={fixAltar}>
            {isFixed ?
              (<AiOutlineClose className="text-red-500" />)
              :
              (<AiOutlineArrowsAlt className="text-red-500" />)
            }
          </button>
          <div
            // id="sutra"
            className="w-full flex flex-wrap items-center justify-center gap-3"
          >
            <p className="text-lg">Cутра</p>
            <audio
              controls
              controlsList="nodownload"
              src="/sounds/sutra.mp3"
              className="w-full md:w-1/2 h-5"
            ></audio>
          </div>
        </div>
      </div>

    </>
  )
}

export default Altar