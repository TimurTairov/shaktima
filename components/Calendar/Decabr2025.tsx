import Image from "next/image";
import meditation from "@/public/svg/meditation-online.svg"
import meditationOffline from "@/public/svg/meditation.svg"
import datta from "@/public/img/datta.webp"
import pambatti from "@/public/img/pambatti.webp"
import kundalini from '@/public/svg/kundalini-yoga.svg'
import yogaMarafon from '@/public/svg/yoga-asana2.svg'

const Decabr2025 = () => {
  return (
    <>
      <p className="text-lg lg:text-xl">Декабрь</p>
      <div className="flex justify-center">
        <div className="w-full grid grid-cols-7 gap-1 rounded-md">
          {/* ДНИ НЕДЕЛИ */}
          <div className="grid-item-dn">
            <p className="hidden md:block">Понедельник</p>
            <p className="block md:hidden">Пн</p>
          </div>
          <div className="grid-item-dn">
            <p className="hidden md:block">Вторник</p>
            <p className="block md:hidden">Вт</p>
          </div>
          <div className="grid-item-dn">
            <p className="hidden md:block">Среда</p>
            <p className="block md:hidden">Ср</p>
          </div>
          <div className="grid-item-dn">
            <p className="hidden md:block">Четверг</p>
            <p className="block md:hidden">Чт</p>
          </div>
          <div className="grid-item-dn">
            <p className="hidden md:block">Пятница</p>
            <p className="block md:hidden">Пт</p>
          </div>
          <div className="grid-item-dn">
            <p className="hidden md:block">Суббота</p>
            <p className="block md:hidden">Сб</p>
          </div>
          <div className="grid-item-dn">
            <p className="hidden md:block">Воскресение</p>
            <p className="block md:hidden">Вс</p>
          </div>

          {/* НЕДЕЛЯ 1 */}
          <div className="grid-item-2">
            <p className="grid-date">1</p>
            <p> </p>
          </div>
          <div className="grid-item-2">
            <p className="grid-date">2</p>
            <p> </p>
          </div>
          <div className="grid-item-2">
            <p className="grid-date">3</p>
            <p> </p>
          </div>
          <div className="grid-item-2">
            <p className="grid-date">4</p>
            <div className="flex flex-wrap justify-center gap-1">
              <Image src={datta} alt="Даттатрея джаянти" className="grid-meditation-mobile" />
            </div>
          </div >
          <div className="grid-item-2">
            <p className="grid-date">5</p>
            <p> </p>
          </div>
          <div className="grid-item-2">
            <p className="grid-date">6</p>
            <div className="flex flex-wrap justify-center gap-1">
              <a href="https://t.me/mdc_ShaktiMa/4140" target="_blank" rel="noreferrer">
                <Image src={pambatti} alt="ПААМБАТИ ДЖАЯНТИ" className="grid-meditation-mobile" />
              </a>
            </div>

          </div>
          <div className="grid-item-2">
            <p className="grid-date">7</p>
          </div>

          {/* НЕДЕЛЯ 2 */}
          <div className="grid-item-2">
            <p className="grid-date">8</p>
            <p></p>
          </div>
          <div className="grid-item-2">
            <p className="grid-date">9</p>
          </div>
          <div className="grid-item-2">
            <p className="grid-date">10</p>
          </div>
          <div className="grid-item-2">
            <p className="grid-date">11</p>
            <p></p>
          </div>
          <div className="grid-item-2">
            <p className="grid-date">12</p>
            <p></p>
          </div>
          <div className="grid-item-2">
            <p className="grid-date">13</p>
          </div>
          <div className="grid-item-2">
            <p className="grid-date">14</p>
          </div>

          {/* НЕДЕЛЯ 3 */}
          <div className="grid-item-2">
            <p className="grid-date">15</p>
            <div className="flex flex-wrap justify-center gap-1">
              <a href="https://t.me/mdc_ShaktiMa/4131" target="_blank" rel="noreferrer">
                <Image src={yogaMarafon} alt="Йога марафон" className="grid-meditation-mobile p-0.5" />
              </a>
            </div>
          </div>
          <div className="grid-item-2">
            <p className="grid-date">16</p>
            <div className="flex flex-wrap justify-center gap-1">
              <a href="https://t.me/mdc_ShaktiMa/4131" target="_blank" rel="noreferrer">
                <Image src={yogaMarafon} alt="Йога марафон" className="grid-meditation-mobile p-0.5" />
              </a>
            </div>
          </div>
          <div className="grid-item-2">
            <p className="grid-date">17</p>
            <div className="flex flex-wrap justify-center gap-1">
              <a href="https://t.me/mdc_ShaktiMa/4131" target="_blank" rel="noreferrer">
                <Image src={yogaMarafon} alt="Йога марафон" className="grid-meditation-mobile p-0.5" />
              </a>
            </div>
          </div>
          <div className="grid-item-2">
            <p className="grid-date">18</p>
            <div className="flex flex-wrap justify-center gap-1">
              <a href="https://t.me/mdc_ShaktiMa/4131" target="_blank" rel="noreferrer">
                <Image src={yogaMarafon} alt="Йога марафон" className="grid-meditation-mobile p-0.5" />
              </a>
            </div>
          </div>
          <div className="grid-item-2">
            <p className="grid-date">19</p>
            <div className="flex flex-wrap justify-center gap-1">
              <a href="https://t.me/mdc_ShaktiMa/4131" target="_blank" rel="noreferrer">
                <Image src={yogaMarafon} alt="Йога марафон" className="grid-meditation-mobile p-0.5" />
              </a>
            </div>
          </div>
          <div className="grid-item-2">
            <p className="grid-date">20</p>
            <div className="flex flex-wrap justify-center gap-1">
              <a href="https://t.me/mdc_ShaktiMa/4131" target="_blank" rel="noreferrer">
                <Image src={yogaMarafon} alt="Йога марафон" className="grid-meditation-mobile p-0.5" />
              </a>
            </div>
          </div>
          <div className="grid-item-2">
            <p className="grid-date">21</p>
            <div className="flex flex-wrap justify-center gap-1">
              <a href="https://t.me/mdc_ShaktiMa/4131" target="_blank" rel="noreferrer">
                <Image src={yogaMarafon} alt="Йога марафон" className="grid-meditation-mobile p-0.5" />
              </a>
            </div>
          </div>

          {/* НЕДЕЛЯ 4 */}
          <div className="grid-item-2">
            <p className="grid-date">22</p>
            <div className="flex flex-wrap justify-center gap-1">
              <a href="https://t.me/mdc_ShaktiMa/4131" target="_blank" rel="noreferrer">
                <Image src={yogaMarafon} alt="Йога марафон" className="grid-meditation-mobile p-0.5" />
              </a>
            </div>
          </div>
          <div className="grid-item-2">
            <p className="grid-date">23</p>
            <div className="flex flex-wrap justify-center gap-1">
              <a href="https://t.me/mdc_ShaktiMa/4131" target="_blank" rel="noreferrer">
                <Image src={yogaMarafon} alt="Йога марафон" className="grid-meditation-mobile p-0.5" />
              </a>
            </div>
          </div>
          <div className="grid-item-2">
            <p className="grid-date">24</p>
            <div className="flex flex-wrap justify-center gap-1">
              <a href="https://t.me/mdc_ShaktiMa/4131" target="_blank" rel="noreferrer">
                <Image src={yogaMarafon} alt="Йога марафон" className="grid-meditation-mobile p-0.5" />
              </a>
            </div>
          </div>
          <div className="grid-item-2">
            <p className="grid-date">25</p>
            <div className="flex flex-wrap justify-center gap-1">
              <a href="https://t.me/mdc_ShaktiMa/4131" target="_blank" rel="noreferrer">
                <Image src={yogaMarafon} alt="Йога марафон" className="grid-meditation-mobile p-0.5" />
              </a>
            </div>
          </div>
          <div className="grid-item-2">
            <p className="grid-date">26</p>
            <div className="flex flex-wrap justify-center gap-1">
              <a href="https://t.me/mdc_ShaktiMa/4131" target="_blank" rel="noreferrer">
                <Image src={yogaMarafon} alt="Йога марафон" className="grid-meditation-mobile p-0.5" />
              </a>
            </div>
          </div>
          <div className="grid-item-2">
            <p className="grid-date">27</p>
            <div className="flex flex-wrap justify-center gap-1">
              <a href="https://t.me/mdc_ShaktiMa/4131" target="_blank" rel="noreferrer">
                <Image src={yogaMarafon} alt="Йога марафон" className="grid-meditation-mobile p-0.5" />
              </a>
            </div>
          </div>
          <div className="grid-item-2">
            <p className="grid-date">28</p>
            <div className="flex flex-wrap justify-center gap-1">
              <a href="https://t.me/mdc_ShaktiMa/4131" target="_blank" rel="noreferrer">
                <Image src={yogaMarafon} alt="Йога марафон" className="grid-meditation-mobile p-0.5" />
              </a>
            </div>
          </div>

          {/* НЕДЕЛЯ 5 */}
          <div className="grid-item-2">
            <p className="grid-date">29</p>
          </div>
          <div className="grid-item-2">
            <p className="grid-date">30</p>
          </div>
          <div className="grid-item-2">
            <p className="grid-date">31</p>
          </div>
          <div className="grid-item-none">
            <p className="grid-date"></p>
          </div>
          <div className="grid-item-none">
            <p className="grid-date"></p>
          </div>
          <div className="grid-item-none">
            <p className="grid-date"></p>
          </div>
          <div className="grid-item-none">
            <p className="grid-date"></p>
          </div>

        </div>

      </div >

      <p className="text-sm my-1 text-gray-700 dark:text-gray-100">Условные обозначения:</p>
      <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-1 text-gray-700 dark:text-gray-300">
        <div className="w-full flex items-center">
          <Image src={datta} alt="Даттатрея джаянти" className="grid-meditation-mobile mr-1" />
          <a>
            <p className="w-full text-xs">Даттатрея джаянти</p>
          </a>
        </div>
        <div className="w-full flex items-center gap-1">
          <a href="https://t.me/mdc_ShaktiMa/4140" target="_blank" rel="noreferrer">
            <Image src={pambatti} alt="ПААМБАТИ ДЖАЯНТИ" className="grid-meditation-mobile" />
          </a>
          <a href="https://t.me/mdc_ShaktiMa/4140" target="_blank" rel="noreferrer" className="w-full text-xs">Памбатти джаянти</a>

        </div>
        <div className="w-full flex items-center">
          <a href="https://t.me/mdc_ShaktiMa/4131" target="_blank" rel="noreferrer">
            <Image src={yogaMarafon} alt="Йога марафон" className="grid-meditation-mobile p-0.5 mr-1 " />
          </a>
          <a href="https://t.me/mdc_ShaktiMa/4131" target="_blank" rel="noreferrer">
            <p className="w-full text-xs">Йога марафон: В новый год с чистыми каналами</p>
          </a>
        </div>
      </div>

    </>
  )
}

export default Decabr2025