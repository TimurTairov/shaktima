'use client'
import Image from "next/image";
import altar from '@/public/altar/altar.webp'
import altar2 from '@/public/altar/altar48.webp'
import { useState } from "react";
import { AiOutlineArrowsAlt } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";

interface NewAltarProps {
  audio?: boolean;
}

const Altar = (props: Readonly<NewAltarProps>) => {
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
        <Image src={altar2} alt="Сиддхи и божества" className="w-full h-auto rounded-xl hidden lg:block" />
        <div className="w-full flex gap-1 h-6">
          <button className="mt-0.5 ml-1 p-0.5 border border-red-600 dark:border-red-400  rounded-md bg-white dark:bg-base-content" onClick={fixAltar}>
            {isFixed ?
              (<AiOutlineClose className="text-red-600 dark:text-red-400" />)
              :
              (<AiOutlineArrowsAlt className="text-red-600 dark:text-red-400" />)
            }
          </button>
          {props.audio && (
            <div
              // id="sutra"
              className="w-full flex flex-wrap items-center justify-center gap-3"
            >
              <audio
                controls
                controlsList="nodownload"
                // src="/sounds/sutra.mp3"
                src="/sounds/sutra.mp3"
                className="w-full h-5"
              ></audio>
            </div>
          )}
        </div>
      </div>

    </>
  )
}

export default Altar