import Image from "next/image";
import ganesha from '@/public/svg/ganesha.svg'
import sriPada from "@/public/img/sripada.webp"
import om from '@/public/svg/om2.svg'

const August2025 = () => {
  return (
    <div className="mt-5 lg:mt-10">
      <p className="text-lg lg:text-xl ">Август 2025</p>
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
          <div className="grid-item">
            <p className="grid-date">1</p>
          </div>
          <div className="grid-item">
            <p className="grid-date">2</p>
          </div>
          <div className="grid-item">
            <p className="grid-date">3</p>

          </div>

          {/* НЕДЕЛЯ 2 */}
          <div className="grid-item">
            <p className="grid-date">4</p>
          </div>
          <div className="grid-item">
            <p className="grid-date">5</p>
          </div>
          <div className="grid-item">
            <p className="grid-date">6</p>
          </div>
          <div className="grid-item">
            <p className="grid-date">7</p>
          </div>
          <div className="grid-item">
            <p className="grid-date">8</p>
          </div>
          <div className="grid-item">
            <p className="grid-date">9</p>
          </div>
          <div className="grid-item">
            <p className="grid-date">10</p>

          </div>

          {/* НЕДЕЛЯ 3 */}
          <div className="grid-item">
            <p className="grid-date">11</p>
          </div>
          <div className="grid-item">
            <p className="grid-date">12</p>

          </div>
          <div className="grid-item">
            <p className="grid-date">13</p>
          </div>
          <div className="grid-item">
            <p className="grid-date">14</p>
            <div className="flex flex-wrap justify-center gap-1">
              <>
                <Image src={om} alt="Дни Индии" className="grid-meditation-mobile p-0.5" />
              </>
            </div>
          </div>
          <div className="grid-item">
            <p className="grid-date">15</p>
            <div className="flex flex-wrap justify-center gap-1">
              <>
                <Image src={om} alt="Дни Индии" className="grid-meditation-mobile p-0.5" />
              </>
            </div>
          </div>
          <div className="grid-item">
            <p className="grid-date">16</p>
            <div className="flex flex-wrap justify-center gap-1">
              <>
                <Image src={om} alt="Дни Индии" className="grid-meditation-mobile p-0.5" />
              </>
            </div>
          </div>
          <div className="grid-item">
            <p className="grid-date">17</p>
            <div className="flex flex-wrap justify-center gap-1">
              <>
                <Image src={om} alt="Дни Индии" className="grid-meditation-mobile p-0.5" />
              </>
            </div>
          </div>

          {/* НЕДЕЛЯ 4 */}
          <div className="grid-item">
            <p className="grid-date">18</p>
          </div>
          <div className="grid-item">
            <p className="grid-date">19</p>

          </div>
          <div className="grid-item">
            <p className="grid-date">20</p>
          </div>
          <div className="grid-item">
            <p className="grid-date">21</p>
          </div>
          <div className="grid-item">
            <p className="grid-date">22</p>
          </div>
          <div className="grid-item">
            <p className="grid-date">23</p>
          </div>
          <div className="grid-item">
            <p className="grid-date">24</p>

          </div>

          {/* НЕДЕЛЯ 5 */}
          <div className="grid-item">
            <p className="grid-date">25</p>
          </div>
          <div className="grid-item">
            <p className="grid-date">26</p>

          </div>
          <div className="grid-item">
            <p className="grid-date">27</p>
            <div className="flex flex-wrap justify-center gap-1">
              <>
                <Image src={ganesha} alt="Ганеша чатуртхи" className="grid-meditation-mobile" />
              </>
              <>
                <Image src={sriPada} alt="Ганеша чатуртхи" className="grid-meditation-mobile" />
              </>
            </div>
          </div>
          <div className="grid-item">
            <p className="grid-date">28</p>

          </div>
          <div className="grid-item">
            <p className="grid-date">29</p>

          </div>
          <div className="grid-item">
            <p className="grid-date">30</p>

          </div>
          <div className="grid-item">
            <p className="grid-date">31</p>
          </div>

          {/* НЕДЕЛЯ 6 */}
          {/* <div className="grid-item-none">
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
          <div className="grid-item-none">
            <p className="grid-date"></p>
          </div>
          <div className="grid-item-none">
            <p className="grid-date"></p>
          </div>
          <div className="grid-item-none">
            <p className="grid-date"></p>
          </div> */}

        </div>

      </div >
      {/* grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 2xl:grid-cols-6  */}
      <p className="text-sm my-1">Условные обозначения:</p>
      <div className="w-full flex flex-col md:flex-row flex-wrap gap-3">
        <div className="flex items-center">
          <Image src={om} alt="Дни Индии в Москве" className="grid-meditation-mobile p-0.5 mr-1" />
          <>
            <p className="verySmallText md:text-xs">Дни Индии в Москве</p>
          </>
        </div>
        <div className="flex items-center">
          <Image src={ganesha} alt="Гуру пурнима" className="grid-meditation-mobile mr-1" />
          <>
            <p className="verySmallText md:text-xs">Ганеша чатуртхи</p>
          </>
        </div>
        <div className="flex items-center">
          <Image src={sriPada} alt="Шрипада Шриваллабха Джаянти" className="grid-meditation-mobile mr-1" />
          <>
            <p className="verySmallText md:text-xs">Шрипада Шриваллабха Джаянти</p>
          </>
        </div>

      </div>

    </div>
  )
}

export default August2025