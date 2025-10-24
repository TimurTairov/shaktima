import { Container } from "@/components/Container";
import Image from 'next/image'
import { FaGlobe } from "react-icons/fa6";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaOm } from "react-icons/fa";
import { Metadata } from 'next'
import map from "@/public/map.webp"
import { FaMapMarkerAlt } from "react-icons/fa";

export const metadata: Metadata = {
  title: 'Контакты',
  description: 'Контакты и ресурсы'
}

const page = () => {
  return (
    <Container className="min-h-screen">
      <div className='mx-2'>
        <h1 className="mainTitle">Контакты для связи</h1>
        <div className="flex justify-center">
          <div className="mt-5 flex flex-col gap-5 justify-center items-start">
            <div className="flex items-center">
              <FaWhatsappSquare className="mr-2" />
              <h5 className="dark:text-gray-300 text-gray-700">
                Атмаприя:
                <a href="whatsapp://send?phone=+79163898998" target="_blank" rel="noreferrer" className="text-gray-700 dark:text-gray-300 hover:text-indigo-700 hover:underline ml-2 ">
                  написать в WhapsApp
                </a>
              </h5>
            </div>
            {/* <div className="flex items-center">
              <FaWhatsappSquare className="mr-2" />
              <h5 className="dark:text-gray-300 text-gray-700">
                Мадхувидья:
                <a href="whatsapp://send?phone=+79859274240" target="_blank" rel="noreferrer" className="text-gray-700 dark:text-gray-300 hover:text-indigo-700 hover:underline ml-2 ">
                  написать в WhapsApp
                </a>
              </h5>
            </div> */}
            <div className="flex items-center">
              <FaWhatsappSquare className="mr-2" />
              <h5 className="dark:text-gray-300 text-gray-700">
                Тиртхадэва:
                <a href="whatsapp://send?phone=+79672067710" target="_blank" rel="noreferrer" className="text-gray-700 dark:text-gray-300 hover:text-indigo-700 hover:underline ml-2 ">
                  написать в WhapsApp
                </a>
              </h5>
            </div>
          </div>
        </div>



        <h5 className="w-full text-center text-2xl font-semibold mt-10 lg:mt-20">Наши ресурсы</h5>
        <div className="flex justify-center">
          <ul className="mt-5 flex flex-col gap-5 justify-center items-start">
            <li className="dark:text-gray-300 text-gray-700 hover:text-indigo-700 hover:underline flex items-center">
              <FaYoutube className="mr-2 shrink-0" />
              <a href="https://www.youtube.com/@ShaktiMA_MDC" className="text-sm md:text-md lg:text-lg" target="_blank" rel="noreferrer">
                YouTube канал
              </a>
            </li>
            <li className="dark:text-gray-300 text-gray-700 hover:text-indigo-700 hover:underline  flex items-center">
              <FaTelegram className="mr-2 shrink-0" />
              <a href="https://t.me/mdc_ShaktiMa" className="flex text-sm md:text-md lg:text-lg" target="_blank" rel="noreferrer">
                Telegram канал
              </a>
            </li>
            <li className="dark:text-gray-300 text-gray-700 hover:text-indigo-700 hover:underline  flex items-center">
              <FaTelegram className="mr-2 shrink-0" />
              <a href="https://t.me/shaktimamdc" className="flex text-sm md:text-md lg:text-lg" target="_blank" rel="noreferrer">
                Telegram чат
              </a>
            </li>
            <li className="dark:text-gray-300 text-gray-700 hover:text-indigo-700 hover:underline  flex items-center">
              <FaGlobe className="mr-2 shrink-0" />
              <a href="https://www.advayta.org/" className="flex text-sm md:text-md lg:text-lg" target="_blank" rel="noreferrer">
                Официальный сайт нашей традиции
              </a>
            </li>
            <li className="dark:text-gray-300 text-gray-700 hover:text-indigo-700 hover:underline  flex items-center">
              <FaGlobe className="mr-2 shrink-0" />
              <a href="https://institute-vasishtha.com/" className="flex text-sm md:text-md lg:text-lg" target="_blank" rel="noreferrer">
                Институт Риши Васиштхи
              </a>
            </li>
            <li className="dark:text-gray-300 text-gray-700 hover:text-indigo-700 hover:underline  flex items-center">
              <FaShoppingCart className="mr-2 shrink-0" />
              <a href="https://www.siddhashop.com/" className="flex text-sm md:text-md lg:text-lg" target="_blank" rel="noreferrer">
                Сиддха шоп. Наш интернет магазин
              </a>
            </li>
            <li className="dark:text-gray-300 text-gray-700 hover:text-indigo-700 hover:underline flex items-center">
              <FaShoppingCart className="mr-2 shrink-0" />
              <a href="https://institute-vasishtha.com/shop/catalog/videokursy/yoga/69255/?oid=69268" className=" text-sm md:text-md lg:text-lg" target="_blank" rel="noreferrer">
                Курс по упасане: "сутра, бхаджан-мандала"
              </a>
            </li>
          </ul>
        </div>

        <h5 className="w-full text-center text-2xl font-semibold mt-10 lg:mt-20">Адрес</h5>
        <div >

          <a href="https://yandex.ru/maps?whatshere%5Bpoint%5D=37.668904%2C55.774561&whatshere%5Bzoom%5D=18.819712&ll=37.669085762467624%2C55.77426729014845&z=18.819712&si=r7j7h7y8fjzvh7vpk1ybn5npj8"
            target="_blank"
            rel="noreferrer"
            className="w-full flex justify-center items-center gap-1 mt-5"
          >
            <p className="text-xs md:text-base lg:text-lg">Нижняя Красносельская улица, 40/12к2, подъезд 3</p>
            <FaMapMarkerAlt />
          </a>
          <Image src={map} alt="" className="mt-5 rounded-xl xl:rounded-2xl 2xl:rounded-3xl"></Image>
        </div>

      </div>
    </Container >
  )
}

export default page