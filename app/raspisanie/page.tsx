import { Container } from "@/components/Container";
import Image from "next/image";
import meditation from "@/public/svg/meditation-online.svg"
import kundalini from '@/public/svg/kundalini-yoga.svg'

const page = () => {
  return (
    <Container className="min-h-screen">
      <h1 className="w-full text-center text-3xl font-semibold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
        Расписание регулярных занятий
      </h1>

      <div className="flex justify-center mt-10">
        <div className="w-full grid grid-cols-8 gap-1 rounded-md">
          {/* ДНИ НЕДЕЛИ */}
          <div className="">
            <p className="hidden md:block"></p>
            <p className="block md:hidden"></p>
          </div>
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

          {/* 1 */}
          <div className="grid-item-time">
            <p className="w-full text-center">9:00 - 10:30</p>
          </div>
          <div className="grid-item-rasp ">
          </div>
          <div className="grid-item-rasp ">
          </div>
          <div className="grid-item-rasp ">
          </div >
          <div className="grid-item-rasp ">
          </div>
          <div className="grid-item-rasp ">
          </div>
          <div className="grid-item-rasp ">
            <a href="/calendar" className="flex justify-center">
              <Image src={meditation} alt="медитация сиддхов" className="grid-meditation-mobile" />
            </a>
          </div>
          <div className="grid-item-rasp ">
            <a href="/calendar" className="flex justify-center items-center">
              <Image src={kundalini} alt="кундалини йога сиддхов" className="grid-meditation-mobile" />
            </a>
          </div>


          {/* 2 */}
          <div className="grid-item-time">
            <p className="w-full text-center">20:30 - 21:30</p>
          </div>
          <div className="grid-item-rasp ">
          </div>
          <div className="grid-item-rasp ">
            <a href="/calendar" className="flex justify-center">
              <Image src={meditation} alt="медитация сиддхов" className="grid-meditation-mobile" />
            </a>
          </div>
          <div className="grid-item-rasp ">
          </div >
          <div className="grid-item-rasp ">
          </div>
          <div className="grid-item-rasp ">
          </div>
          <div className="grid-item-rasp ">
          </div>
          <div className="grid-item-rasp ">
          </div>



        </div >
      </div >

      <p className="text-sm my-1">Условные обозначения:</p>
      <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 2xl:grid-cols-6 gap-1">
        <div className="flex items-center">
          <Image src={meditation} alt="медитация сиддхов" className="grid-meditation-mobile mr-1" />
          <a href="/meditation">
            <p className="text-xs">Медитация сиддхов онлайн</p>
          </a>
        </div>
        <div className="flex items-center">
          <Image src={kundalini} alt="Кундалини йога сиддхов" className="grid-meditation-mobile mr-1" />
          <p className="text-xs">Кундалини йога сиддхов онлайн</p>
        </div>
      </div>

    </Container >
  )
}

export default page