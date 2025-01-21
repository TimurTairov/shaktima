import Link from "next/link";
import Image from "next/image";
import logo from '@/public/ShaktiMa-logo.webp'
import { FaGlobe } from "react-icons/fa6";
import { Container } from "@/components/Container";
import { FaYoutube } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { PiHandsPrayingBold } from "react-icons/pi";
import { FaOm } from "react-icons/fa";


export function Footer() {
  const navigation = [
    {
      title: "О центре",
      url: "/"
    },
    {
      title: "Расписание",
      url: "/achamana"
    },
    {
      title: "Календарь",
      url: "/calendar"
    },
    {
      title: "События центра",
      url: "/mdc-events"
    },
    {
      title: "Утренняя сутра",
      url: "/sutra"
    },
    {
      title: "Садхана Даттатрее",
      url: "/datta-sadhana"
    },
    {
      title: "Ачамана",
      url: "/bhadjan-mandala"
    },
    {
      title: "Блог",
      url: "/blog"
    },
    {
      title: "Контакты",
      url: "/contacts"
    },
    {
      title: "Поддержать нас",
      url: "/donate"
    },
  ];
  return (
    <div className="mt-auto">
      <Container>
        <div className="text-sm lg:text-base grid max-w-screen-xl grid-cols-1 md:grid-cols-10 gap-10 pt-10 mx-auto mt-5 border-t border-gray-300  ">
          <div className="md:col-span-3">
            <div className="btn btn-ghost ">
              <Link
                href="/"
                className="flex items-center space-x-2 text-xl lg:text-2xl font-medium text-indigo-500 dark:text-indigo-500"
              >
                <Image
                  src={logo}
                  alt="N"
                  width="32"
                  height="32"
                  className="w-8 rounded-full "
                />
                <span className="pattaya-regular">Шакти Ма</span>
              </Link>
            </div>

            <div className="w-ful flex flex-col">
              <div className="max-w-md text-gray-600 dark:text-gray-300 py-1 xl:py-2 font-medium">
                Московский Дхарма центр Шакти Ма
              </div>

              <div className="w-full grid grid-cols-2 text-gray-600 dark:text-gray-300 py-1 xl:py-2 text-xs xl:text-sm">
                <div>
                  <FaOm className="inline mr-1" />
                  <span>Медитации сиддхов</span>
                </div>

                <div>
                  <FaOm className="inline mr-1" />
                  <span>Семинары и ретриты</span>
                </div>

                <div>
                  <FaOm className="inline mr-1" />
                  <span>Пуджи и бхаджаны</span>
                </div>

                <div>
                  <FaOm className="inline mr-1" />
                  <span>Кундалини и хатха йога</span>
                </div>

                <div>
                  <FaOm className="inline mr-1" />
                  <span>Махашиваратри</span>
                </div>

                <div>
                  <FaOm className="inline mr-1" />
                  <span>Ведические праздники</span>
                </div>


              </div>

              <div className="max-w-md text-gray-600 dark:text-gray-300 inlene-flex items-center py-1 xl:py-2 text-xs xl:text-sm">
                <span>На благо всех живых существ</span> <PiHandsPrayingBold className="ml-1 xl:ml-2 inline" />
              </div>

              <div className="max-w-md text-gray-600 dark:text-gray-300 py-1 xl:py-2 text-xs xl:text-sm">
                © All Rights Reserved {new Date().getFullYear()}
              </div>
            </div>
          </div>

          <div className="md:col-span-4">

            <p className="w-full font-semibold dark:text-gray-300">Меню</p>
            <div className="mt-5 grid grid-cols-2 gap-2">
              {navigation.map((item, index) => (
                <Link
                  key={index}
                  href={item.url}
                  className="btn dark:btn-outline btn-xs md:btn-sm font-normal rounded-md  hover:text-black dark:text-white dark:hover:text-indigo-800 dark:hover:bg-indigo-100 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-indigo-800 transition-colors duration-500"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>

          <div className="md:col-span-3">
            <div className="font-semibold dark:text-gray-300">Ресурсы</div>
            <div className="flex flex-col gap-2 mt-5">
              <a
                href="https://www.advayta.org/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center btn dark:btn-outline btn-xs xl:btn-sm font-normal dark:text-white dark:hover:text-indigo-800 dark:hover:bg-indigo-100">
                <FaGlobe className="shrink-0 mr-1" />
                Cайт нашей традиции
              </a>

              <a
                href="https://t.me/mdc_ShaktiMa"
                target="_blank"
                rel="noopener"
                className="flex items-center btn dark:btn-outline btn-xs xl:btn-sm font-normal dark:text-white dark:hover:text-indigo-800 dark:hover:bg-indigo-100"
              >
                <FaTelegram className="shrink-0 mr-1" />
                <span className="">Канал в телеграм</span>
              </a>
              <a
                href="https://t.me/shaktimamdc"
                target="_blank"
                rel="noopener"
                className="flex items-center btn dark:btn-outline btn-xs xl:btn-sm font-normal dark:text-white dark:hover:text-indigo-800 dark:hover:bg-indigo-100"
              >
                <FaTelegram className="shrink-0 mr-1" />
                <span className="">Чат в телеграм</span>
              </a>
              <a
                href="https://www.siddhashop.com/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center btn dark:btn-outline btn-xs xl:btn-sm font-normal dark:text-white dark:hover:text-indigo-800 dark:hover:bg-indigo-100"
              >
                <FaShoppingCart className="shrink-0 mr-1" />
                Сиддха шоп
              </a>
              <a
                href="https://www.youtube.com/@ShaktiMA_MDC"
                target="_blank"
                rel="noopener"
                className="flex items-center btn dark:btn-outline btn-xs xl:btn-sm font-normal dark:text-white dark:hover:text-indigo-800 dark:hover:bg-indigo-100"
              >
                <FaYoutube className="shrink-0 mr-1" />
                <span className="">YouTube</span>
              </a>
            </div>
          </div>
        </div>
      </Container>
      {/* Do not remove this */}
    </div>
  );
}

