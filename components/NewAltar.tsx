'use client'
import Image from "next/image";
import altar from '@/public/img/altar.webp'
import altar2 from '@/public/img/Алтарь48.webp'
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
        <button className="mt-1 ml-1 p-0.5 border border-gray-200 dark:border-gray-600 rounded-md bg-white dark:bg-base-content" onClick={fixAltar}>
          {isFixed ?
            (<AiOutlineClose className="w-4 h-4 text-gray-400" />)
            :
            (<AiOutlineArrowsAlt className="w-4 h-4 text-gray-500 " />)
          }
        </button>
      </div>

    </>
  )
}

export default Altar