import Image from "next/image";
import Link from "next/link";
import meditation from "@/public/svg/meditation-online.svg"
import meditationOffline from "@/public/svg/meditation.svg"
import kundalini from '@/public/svg/kundalini-yoga.svg'
import sriYantra from '@/public/svg/sri_yantra_4.svg'

const Aprel2025 = () => {
  return (
    <div className="mt-5 lg:mt-10">
      <p className="text-lg lg:text-xl ">Апрель 2025</p>
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
          <div className="grid-item">
            <p className="grid-date">1</p>
            <p> </p>
          </div>
          <div className="grid-item">
            <p className="grid-date">2</p>
            <p> </p>
          </div>
          <div className="grid-item">
            <p className="grid-date">3</p>
            <p> </p>
          </div >
          <div className="grid-item">
            <p className="grid-date">4</p>
          </div>
          <div className="grid-item">
            <p className="grid-date">5</p>
            <div className="flex flex-wrap justify-center gap-1">
              <a href="/raspisanie">
                <Image src={meditation} alt="медитация сиддхов" className="grid-meditation-mobile" />
              </a>
            </div>
          </div>
          <div className="grid-item">
            <p className="grid-date">6</p>
            <div className="flex justify-center items-center">
              <a href="raspisanie">
                <Image src={kundalini} alt="кундалини йога сиддхов" className="grid-meditation-mobile" />
              </a>
            </div>
          </div>

          {/* НЕДЕЛЯ 2 */}
          <div className="grid-item">
            <p className="grid-date">7</p>
          </div>
          <div className="grid-item">
            <p className="grid-date">8</p>
            <div className="flex flex-wrap justify-center gap-1">
              <a href="/raspisanie">
                <Image src={meditation} alt="медитация сиддхов" className="grid-meditation-mobile" />
              </a>
            </div>
          </div>
          <div className="grid-item">
            <p className="grid-date">9</p>
          </div>
          <div className="grid-item">
            <p className="grid-date">10</p>
          </div>
          <div className="grid-item">
            <p className="grid-date">11</p>
          </div>
          <div className="grid-item">
            <p className="grid-date">12</p>
            <div className="flex flex-wrap justify-center gap-1">
              <a href="/raspisanie">
                <Image src={meditation} alt="медитация сиддхов" className="grid-meditation-mobile" />
              </a>
            </div>
          </div>
          <div className="grid-item">
            <p className="grid-date">13</p>
            <div className="flex justify-center items-center">
              <a href="raspisanie">
                <Image src={kundalini} alt="кундалини йога сиддхов" className="grid-meditation-mobile" />
              </a>
            </div>
          </div>

          {/* НЕДЕЛЯ 3 */}
          <div className="grid-item">
            <p className="grid-date">14</p>
          </div>
          <div className="grid-item">
            <p className="grid-date">15</p>
            <div className="flex flex-wrap justify-center gap-1">
              <a href="/raspisanie">
                <Image src={meditation} alt="медитация сиддхов" className="grid-meditation-mobile" />
              </a>
            </div>
          </div>
          <div className="grid-item">
            <p className="grid-date">16</p>
          </div>
          <div className="grid-item">
            <p className="grid-date">17</p>
          </div>
          <div className="grid-item">
            <p className="grid-date">18</p>
          </div>
          <div className="grid-item">
            <p className="grid-date">19</p>
            <div className="flex flex-wrap justify-center gap-1">
              <a href="/raspisanie">
                <Image src={meditation} alt="медитация сиддхов" className="grid-meditation-mobile" />
              </a>
            </div>
          </div>
          <div className="grid-item">
            <p className="grid-date">20</p>
            <div className="flex justify-center items-center">
              <a href="raspisanie">
                <Image src={kundalini} alt="кундалини йога сиддхов" className="grid-meditation-mobile" />
              </a>
            </div>
          </div>

          {/* НЕДЕЛЯ 4 */}
          <div className="grid-item">
            <p className="grid-date">21</p>
          </div>
          <div className="grid-item">
            <p className="grid-date">22</p>
            <div className="flex justify-center items-center">
              <a href="/raspisanie">
                <Image src={meditation} alt="медитация сиддхов" className="grid-meditation-mobile" />
              </a>
            </div>
          </div>
          <div className="grid-item">
            <p className="grid-date">23</p>
          </div>
          <div className="grid-item">
            <p className="grid-date">24</p>
          </div>
          <div className="grid-item">
            <p className="grid-date">25</p>
          </div>
          <div className="grid-item">
            <p className="grid-date">26</p>
            <div className="flex justify-center items-center">
              <a href="/raspisanie">
                <Image src={meditation} alt="медитация сиддхов" className="grid-meditation-mobile" />
              </a>
            </div>
          </div>
          <div className="grid-item">
            <p className="grid-date">27</p>
            <div className="flex justify-center items-center">
              <a href="raspisanie">
                <Image src={kundalini} alt="кундалини йога сиддхов" className="grid-meditation-mobile" />
              </a>
            </div>
          </div>

          {/* НЕДЕЛЯ 5 */}
          <div className="grid-item">
            <p className="grid-date">28</p>
          </div>
          <div className="grid-item">
            <p className="grid-date">29</p>
            <div className="flex justify-center items-center">
              <a href="/raspisanie">
                <Image src={meditation} alt="медитация сиддхов" className="grid-meditation-mobile" />
              </a>
            </div>
          </div>
          <div className="grid-item">
            <p className="grid-date">30</p>
            <div className="flex justify-center items-center">
              <Image src={sriYantra} alt="Акшая-тритья" className="grid-meditation-mobile" />
            </div>
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

      <p className="text-sm my-1">Условные обозначения:</p>
      <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 2xl:grid-cols-6 gap-1">
        <div className="w-full flex items-center">
          <Image src={meditation} alt="медитация сиддхов" className="grid-meditation-mobile mr-1" />
          <Link href="/raspisanie">
            <p className="verySmallText md:text-xs">Медитация сиддхов онлайн</p>
          </Link>
        </div>
        <div className="w-full flex items-center">
          <Image src={kundalini} alt="Кундалини йога сиддхов" className="grid-meditation-mobile mr-1" />
          <Link href="/raspisanie">
            <p className="verySmallText md:text-xs">Кундалини йога сиддхов онлайн</p>
          </Link>
        </div>
        {/* <div className="w-full flex items-center">
          <Image src={meditationOffline} alt="Ритрит выходного дня" className="grid-meditation-mobile mr-1" />
          <a>
            <p className="verySmallText md:text-xs">Ритрит выходного дня</p>
          </a>
        </div> */}

        <div className="w-full flex items-center">
          <Image src={sriYantra} alt="Акшая-тритья" className="grid-meditation-mobile mr-1" />
          <a>
            <p className="verySmallText md:text-xs">Акшая-тритья</p>
          </a>
        </div>
      </div>

    </div>
  )
}

export default Aprel2025