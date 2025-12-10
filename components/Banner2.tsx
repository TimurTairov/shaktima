import Image from "next/image";
import yoga from "@/public/Banners/Yoga.webp"
import bm from '@/public/Banners/BM.webp'
import Link from "next/link";

const Banner2 = () => {
  return (
    <div className="w-full flex flex-col gap-10 lg:gap-12 xl:gap-16 2xl:gap-20 text-gray-700 dark:text-gray-300">
      <div className="flex flex-col lg:flex-row gap-1 justify-between">
        <a href="https://t.me/mdc_ShaktiMa/4131" target="_blank" rel="noreferrer" className="lg:w-6/12">
          <Image src={yoga} alt="Йога в ШактиМа" className="w-full rounded-xl g:rounded-3xl shadow-md" />
        </a>
        <div className="w-full lg:w-5/12 flex flex-col justify-around text-lg gap-2">
          <p className="text-xl xl:text-2xl 2xl:text-3xl font-bold w-full text-center">Йога в ШактиМа</p>
          <p className="w-full text-center text-sm md:text-base lg:text-lg">Погрузитесь в атмасферу гармонии, тишины и спокойствия, практикуя йогу вместе с нами</p>
          <p className="w-full text-center font-semibold lg:text-lg">Виды йоги:</p>
          <p className="text-sm md:text-base lg:text-lg">ॐ Хатха йога - йога статических асан</p>
          <p className="text-sm md:text-base lg:text-lg">ॐ Кундалини йога - йога, пробуждающая энергию Кундалини</p>
          <p className="text-sm md:text-base lg:text-lg">ॐ Шат-чакра-йога - йога, работающая с чакрами</p>
          <p className="text-sm md:text-base lg:text-lg">ॐ Йога сиддхов - йога высших достижений</p>
          <p className="text-sm md:text-base lg:text-lg">ॐ Мантра йога - йога, использующая мантры </p>
          <p className="w-full text-center font-semibold lg:text-lg">Цена:</p>
          <p className="text-sm md:text-base lg:text-lg">• Первое посещение БЕСПЛАТНО</p>
          <p className="text-sm md:text-base lg:text-lg">• 700 рублей разоваое занятие</p>
          <p className="text-sm md:text-base lg:text-lg">• 4000 рублей - абонемент на 8 занятий</p>
          <div className="w-full flex justify-center">
            <Link href="/raspisanie" className="border border-gray-300 px-3 py-2 w-min rounded-xs hover:bg-red-500 hover:text-white">Подробнее</Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row-reverse gap-1 justify-between">
        <div className="text-xs md:text-sm  flex flex-col gap-1 lg:w-6/12">
          <a href="https://t.me/mdc_ShaktiMa/4140" target="_blank" rel="noreferrer">
            <Image src={bm} alt="Пуджа в ШактиМа" className="w-full rounded-xl g:rounded-3xl shadow-md" />
          </a>
        </div>
        <div className="w-full lg:w-5/12 flex flex-col justify-around gap-2">
          <p className="text-xl xl:text-2xl 2xl:text-3xl font-bold w-full text-center">Пуджи в ШактиМа</p>
          <p className="w-full text-center text-sm md:text-base lg:text-lg">Погрузитесь в атмасферу любви, преданности и божественных благословений, практикуя упасану вместе с нами</p>
          <p className="w-full text-center font-semibold lg:text-lg">Пуджи по дням недели:</p>
          <p className="text-sm md:text-base lg:text-lg">ॐ Понедельник: Пуджа Шиве</p>
          <p className="text-sm md:text-base lg:text-lg">ॐ Вторник: Пуджа Даттатрее</p>
          <p className="text-sm md:text-base lg:text-lg">ॐ Среда: Пуджа Вишну</p>
          <p className="text-sm md:text-base lg:text-lg">ॐ Четверг: Пуджа Гуру</p>
          <p className="text-sm md:text-base lg:text-lg">ॐ Пятница: Пуджа Шакти</p>
          <p className="text-sm md:text-base lg:text-lg">ॐ Суббота: Пуджа сиддхам</p>
          <p className="w-full text-center font-semibold lg:text-lg">Подношения:</p>
          <p className="text-sm md:text-base lg:text-lg">• Свободные пожертвования</p>
          <p className="text-sm md:text-base lg:text-lg">• На пуджу рекомендуется брать с собой саттвичный прасад и светлую одежду</p>
          <div className="w-full flex justify-center">
            <Link href="/mdc-events/bhadjan-mandala" className="border border-gray-300 px-3 py-2 w-min rounded-xs hover:bg-red-500 hover:text-white">Подробнее</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner2