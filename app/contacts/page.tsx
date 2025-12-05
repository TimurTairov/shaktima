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
import map2 from "@/public/map2.webp"
import map3 from "@/public/map3.webp"
import map4 from "@/public/map4.webp"
import map5 from "@/public/map5.webp"
import { FaMapMarkerAlt } from "react-icons/fa";
import MyAccordion from "@/components/MyAccordion";


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
              <FaWhatsappSquare className="mr-1 text-green-400" />
              <h5 className="dark:text-gray-300 text-gray-700">
                Атмаприя:
                <a href="whatsapp://send?phone=+79163898998" target="_blank" rel="noreferrer" className=" dark:text-indigo-400 text-indigo-700 hover:underline ml-2 ">
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
              <FaTelegram className="mr-1 text-sky-400" />
              <h5 className="dark:text-gray-300 text-gray-700">
                Тарамати:
                <a href="https://t.me/Shartatiana" target="_blank" rel="noreferrer" className="dark:text-indigo-400 text-indigo-700 hover:underline ml-2 ">
                  написать в Telegram
                </a>
              </h5>
            </div>
          </div>
        </div>

        <h5 id="address" className="w-full text-center text-lg md:text-xl lg:text-2xl font-semibold mt-10 lg:mt-20 ">Адрес</h5>
        <div >
          <a href="https://yandex.ru/maps?whatshere%5Bpoint%5D=37.668904%2C55.774561&whatshere%5Bzoom%5D=18.819712&ll=37.669085762467624%2C55.77426729014845&z=18.819712&si=r7j7h7y8fjzvh7vpk1ybn5npj8"
            target="_blank"
            rel="noreferrer"
            className="w-full flex justify-center items-center gap-1 mt-5 dark:text-indigo-400 text-indigo-700 hover:underline "
          >
            <p className="text-xs md:text-base lg:text-lg">Нижняя Красносельская улица, 40/12к2, подъезд 3</p>
            <FaMapMarkerAlt />
          </a>
          <MyAccordion title="Как добраться" className="xl:mx-20 2xl:mx-40 flex flex-col  mt-2 p-2 text-sm bg-gray-100 dark:bg-slate-700 text-slate-700 dark:text-white rounded-md">
            <div className="flex flex-col gap-2">
              <Image src={map} alt="Студия йоги ШактиМа. Как до нас дойти пешком от метро." className="mt-2 rounded-lg lg:rounded-xl " />
              <p><b>От метро Бауманская.</b> Выходите из метро направо через дорогу и проходите сквозь торговые лавки на Нижнюю Красносельскую улицу. </p>
              <p><b>От метро Красносельская.</b> Выходите из метро и идете вдоль дороги по Нижней Красносельской улице. </p>
              <Image src={map2} alt="Арка" className="rounded-lg lg:rounded-xl" />
              <p>Вход через ворота с улицы Нижняя Красносельская</p>
              <Image src={map3} alt="Арка" className="rounded-lg lg:rounded-xl" />
              <p>Идете прямо</p>
              <Image src={map4} alt="Арка" className="rounded-lg lg:rounded-xl" />
              <p>Доходите до конца здания и поворичиваете направо. Затем, идете до конца и налево.</p>
              <Image src={map5} alt="Арка" className="rounded-lg lg:rounded-xl" />
              <p>Намасте! И добро пожаловать.</p>
            </div>
          </MyAccordion>
        </div>

        <h5 className="w-full text-center text-lg md:text-xl lg:text-2xl font-semibold mt-10 lg:mt-20">Наши ресурсы</h5>
        <div className="flex justify-center">
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-10 justify-center items-start mt-10">
            <li className="dark:text-indigo-400 text-indigo-700 hover:underline flex items-center">
              <FaYoutube className="mr-2 shrink-0" />
              <a href="https://www.youtube.com/@ShaktiMA_MDC" className="text-sm md:text-md lg:text-lg" target="_blank" rel="noreferrer">
                YouTube канал
              </a>
            </li>
            <li className="dark:text-indigo-400 text-indigo-700 hover:underline  flex items-center">
              <FaTelegram className="mr-2 shrink-0" />
              <a href="https://t.me/mdc_ShaktiMa" className="flex text-sm md:text-md lg:text-lg" target="_blank" rel="noreferrer">
                Telegram канал
              </a>
            </li>
            <li className="dark:text-indigo-400 text-indigo-700 hover:underline  flex items-center">
              <FaTelegram className="mr-2 shrink-0" />
              <a href="https://t.me/+GgiaV5DkPoE1OTBi" className="flex text-sm md:text-md lg:text-lg" target="_blank" rel="noreferrer">
                Telegram чат
              </a>
            </li>
            <li className="dark:text-indigo-400 text-indigo-700 hover:underline  flex items-center">
              <FaGlobe className="mr-2 shrink-0" />
              <a href="https://www.advayta.org/" className="flex text-sm md:text-md lg:text-lg" target="_blank" rel="noreferrer">
                Официальный сайт нашей традиции
              </a>
            </li>
            <li className="dark:text-indigo-400 text-indigo-700 hover:underline  flex items-center">
              <FaGlobe className="mr-2 shrink-0" />
              <a href="https://sharanam.advayta.org/" className="flex text-sm md:text-md lg:text-lg" target="_blank" rel="noreferrer">
                Вступить в традицию адвайты сиддхов
              </a>
            </li>
            <li className="dark:text-indigo-400 text-indigo-700 hover:underline  flex items-center">
              <FaGlobe className="mr-2 shrink-0" />
              <a href="https://vosdlife.org/" className="flex text-sm md:text-md lg:text-lg" target="_blank" rel="noreferrer">
                Сайт инструкторов ВОСД
              </a>
            </li>
            <li className="dark:text-indigo-400 text-indigo-700 hover:underline  flex items-center">
              <FaGlobe className="mr-2 shrink-0" />
              <a href="https://institute-vasishtha.com/" className="flex text-sm md:text-md lg:text-lg" target="_blank" rel="noreferrer">
                Институт Риши Васиштхи
              </a>
            </li>
            <li className="dark:text-indigo-400 text-indigo-700 hover:underline  flex items-center">
              <FaGlobe className="mr-2 shrink-0" />
              <a href="https://ramanatha.advayta.org/" className="flex text-sm md:text-md lg:text-lg" target="_blank" rel="noreferrer">
                Сайт монаха Раманатха Гири
              </a>
            </li>
            <li className="dark:text-indigo-400 text-indigo-700 hover:underline  flex items-center">
              <FaShoppingCart className="mr-2 shrink-0" />
              <a href="https://www.advayta.org/shop/" className="flex text-sm md:text-md lg:text-lg" target="_blank" rel="noreferrer">
                Наш интернет магазин
              </a>
            </li>
            <li className="dark:text-indigo-400 text-indigo-700 hover:underline flex items-center">
              <FaShoppingCart className="mr-2 shrink-0" />
              <a href="https://institute-vasishtha.com/shop/catalog/videokursy/yoga/69255/?oid=69268" className=" text-sm md:text-md lg:text-lg" target="_blank" rel="noreferrer">
                Курс по упасане: "сутра, бхаджан-мандала"
              </a>
            </li>
          </ul>
        </div>



      </div>
    </Container >
  )
}

export default page