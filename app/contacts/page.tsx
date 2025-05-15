import { Container } from "@/components/Container";
import Image from 'next/image'
import { FaGlobe } from "react-icons/fa6";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaOm } from "react-icons/fa";
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Контакты',
  description: 'Контакты и ресурсы'
}

const page = () => {
  return (
    <Container className="min-h-screen">
      <div className='mx-2'>
        <h1 className="textColor w-full text-center text-2xl font-semibold my-2">Контакты для связи</h1>
        <div className="flex justify-center">
          <div className="mt-5 flex flex-col gap-5 justify-center items-start">
            <div className="flex items-center">
              <FaWhatsappSquare className="mr-2" />
              <h5 className="dark:text-gray-300 text-gray-700">
                Мадхувидья:
                <a href="whatsapp://send?phone=+79859274240" target="_blank" rel="noreferrer" className="text-gray-700 dark:text-gray-300 hover:text-indigo-700 hover:underline ml-2 ">
                  написать в WhapsApp
                </a>
              </h5>
            </div>
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

        <h1 className="w-full text-center text-2xl font-semibold mt-10 lg:mt-20">Наши ресурсы</h1>
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

      </div>
    </Container>
  )
}

export default page