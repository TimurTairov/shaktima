import Image from "next/image";
import meditation from "@/public/img/meditation-online.svg"
import meditationOffline from "@/public/img/meditation.svg"
import datta from "@/public/img/datta.jpg"
import pambatti from "@/public/img/pambatti.png"
import kundalini from '@/public/img/kundalini-yoga.svg'

const Decabr2024 = () => {
  return (
    <>
      <p className="text-lg lg:text-xl ">Декабрь</p>
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
          <div className="grid-item-none">
            <p className="grid-date"></p>
            <p> </p>
          </div>
          <div className="grid-item-none">
            <p className="grid-date"></p>
            <p> </p>
          </div>
          <div className="grid-item-none">
            <p className="grid-date"></p>
            <p> </p>
          </div>
          <div className="grid-item-none">
            <p className="grid-date"></p>
            <p> </p>
          </div >
          <div className="grid-item-none">
            <p className="grid-date"></p>
            <p> </p>
          </div>
          <div className="grid-item-none">
            <p className="grid-date"></p>
            <p> </p>
          </div>
          <div className="grid-item">
            <p className="grid-date">1</p>
            <p> </p>
          </div>

          {/* НЕДЕЛЯ 2 */}
          <div className="grid-item">
            <p className="grid-date">2</p>
            <p></p>
          </div>
          <div className="grid-item">
            <p className="grid-date">3</p>
            <p></p>
          </div>
          <div className="grid-item">
            <p className="grid-date">4</p>
            <div className="flex justify-center">
              <p className="grid-meditation">Медитация сиддхов онлайн</p>
              <Image src={meditation} alt="медитация сиддхов" className="grid-meditation-mobile" />
            </div>
          </div>
          <div className="grid-item">
            <p className="grid-date">5</p>
            <p></p>
          </div>
          <div className="grid-item">
            <p className="grid-date">6</p>
            <p></p>
          </div>
          <div className="grid-item">
            <p className="grid-date">7</p>
            <div className="flex justify-center">
              <p className="grid-meditation">Медитация сиддхов онлайн</p>
              <Image src={meditation} alt="медитация сиддхов" className="grid-meditation-mobile" />
            </div>
          </div>
          <div className="grid-item">
            <p className="grid-date">8</p>
            <p></p>
          </div>

          {/* НЕДЕЛЯ 3 */}
          <div className="grid-item">
            <p className="grid-date">9</p>
            <p></p>
          </div>
          <div className="grid-item">
            <p className="grid-date">10</p>
            <p></p>
          </div>
          <div className="grid-item">
            <p className="grid-date">11</p>
            <div className="flex justify-center">
              <p className="grid-meditation">Медитация сиддхов онлайн</p>
              <Image src={meditation} alt="медитация сиддхов" className="grid-meditation-mobile" />
            </div>
          </div>
          <div className="grid-item">
            <p className="grid-date">12</p>
            <p></p>
          </div>
          <div className="grid-item">
            <p className="grid-date">13</p>
            <p></p>
          </div>
          <div className="grid-item">
            <p className="grid-date">14</p>
            <div className="flex flex-wrap justify-center gap-1">
              <Image src={datta} alt="Даттатрея" className="grid-meditation-mobile" />
              <Image src={meditation} alt="медитация сиддхов" className="grid-meditation-mobile" />
            </div>
          </div>
          <div className="grid-item">
            <p className="grid-date">15</p>
            <p></p>
          </div>

          {/* НЕДЕЛЯ 4 */}
          <div className="grid-item">
            <p className="grid-date">16</p>
            <p></p>
          </div>
          <div className="grid-item">
            <p className="grid-date">17</p>
            <p></p>
          </div>
          <div className="grid-item">
            <p className="grid-date">18</p>
            <div className="flex justify-center">
              <p className="grid-meditation">Медитация сиддхов онлайн</p>
              <Image src={meditation} alt="медитация сиддхов" className="grid-meditation-mobile" />
            </div>
          </div>
          <div className="grid-item">
            <p className="grid-date">19</p>
            <div className="flex justify-center">
              <p className="grid-meditation">Памбатти джаянти</p>
              <Image src={pambatti} alt="медитация сиддхов" className="grid-meditation-mobile" />
            </div>
          </div>
          <div className="grid-item">
            <p className="grid-date">20</p>
            <p></p>
          </div>
          <div className="grid-item">
            <p className="grid-date">21</p>
            <div className="flex justify-center">
              <p className="grid-meditation">Медитация сиддхов онлайн</p>
              <Image src={meditation} alt="медитация сиддхов" className="grid-meditation-mobile" />
            </div>
          </div>
          <div className="grid-item">
            <p className="grid-date">22</p>
            <p></p>
          </div>

          {/* НЕДЕЛЯ 5 */}
          <div className="grid-item">
            <p className="grid-date">23</p>
            <p></p>
          </div>
          <div className="grid-item">
            <p className="grid-date">24</p>
            <p></p>
          </div>
          <div className="grid-item">
            <p className="grid-date">25</p>
            <div className="flex justify-center">
              <p className="grid-meditation">Медитация сиддхов онлайн</p>
              <Image src={meditation} alt="медитация сиддхов" className="grid-meditation-mobile" />
            </div>
          </div>
          <div className="grid-item">
            <p className="grid-date">26</p>
            <p></p>
          </div>
          <div className="grid-item">
            <p className="grid-date">27</p>
            <p></p>
          </div>
          <div className="grid-item">
            <p className="grid-date">28</p>
            <div className="flex justify-center">
              <p className="grid-meditation">Медитация сиддхов онлайн</p>
              <Image src={meditation} alt="медитация сиддхов" className="grid-meditation-mobile" />
            </div>
          </div>
          <div className="grid-item">
            <p className="grid-date">29</p>
            <p></p>
          </div>

          {/* НЕДЕЛЯ 6 */}
          <div className="grid-item">
            <p className="grid-date">30</p>
            <p></p>
          </div>
          <div className="grid-item">
            <p className="grid-date">31</p>
            <p></p>
          </div>
          <div className="grid-item-none">
            <p className="grid-date"></p>
            <p></p>
          </div>
          <div className="grid-item-none">
            <p className="grid-date"></p>
            <p></p>
          </div>
          <div className="grid-item-none">
            <p className="grid-date"></p>
            <p></p>
          </div>
          <div className="grid-item-none">
            <p className="grid-date"></p>
            <p></p>
          </div>
          <div className="grid-item-none">
            <p className="grid-date"></p>
            <p></p>
          </div>

        </div>

      </div >

      <p className="text-sm mb-1">Условные обозначения:</p>
      <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 2xl:grid-cols-6 gap-1">
        <div className="w-full flex items-center">
          <Image src={datta} alt="медитация сиддхов" className="grid-meditation-mobile mr-1" />
          <p className="text-xs">Даттатрейя джаянти</p>
        </div>
        <div className="w-full flex items-center">
          <Image src={pambatti} alt="Памбатти" className="grid-meditation-mobile mr-1" />
          <p className="text-xs">Памбатти джаянти</p>
        </div>
        <div className="w-full flex items-center">
          <Image src={meditation} alt="медитация сиддхов" className="grid-meditation-mobile mr-1" />
          <p className="text-xs">Медитация сиддхов онлайн</p>
        </div>
        <div className="w-full flex items-center">
          <Image src={kundalini} alt="кундалини йога сиддхов" className="grid-meditation-mobile mr-1" />
          <p className="text-xs">Кундалини йога сиддхов онлайн</p>
        </div>
        <div className="w-full flex items-center">
          <Image src={meditationOffline} alt="медитация сиддхов" className="grid-meditation-mobile mr-1" />
          <p className="text-xs">Медитация сиддхов оффлайн</p>
        </div>
      </div>

    </>
  )
}

export default Decabr2024