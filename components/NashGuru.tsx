"use client"
import { Container } from "@/components/Container";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
// import { GiTeacher } from "react-icons/gi";
import meditation from "@/public/svg/yoga.svg"
import { IoBook } from "react-icons/io5";
import Image from "next/image";
import om from "@/public/svg/om.svg"
import teacher from "@/public/svg/group-meditation-balance-religion-meditate.svg"

const NashGuru = () => {

  const images = [
    {
      original: "https://sun9-77.userapi.com/impg/_IZhohXV7KqKcBEhXnVGj4jxLYRaLJe6sVlLsA/NXIKBj5V2l8.jpg?size=600x800&quality=95&sign=83c801386e1148bf077bf362396c02e3&type=album",
      description: 'Гуру Свами Вишнудевананда Гири',
    },
    {
      original: "https://sun9-35.userapi.com/impg/9uBiuNx8ggRPCBLUhs7T6K6-oTNGoqgd3ifcKA/iP01QSN0V4A.jpg?size=600x800&quality=95&sign=3691999da478222df1644d3aa3da5f16&type=album",
    },
    {
      original: "https://sun9-68.userapi.com/impg/JmRrJtdL_lCl68BT3mxVa5i-DkSjXOFgxvaRzA/NXXqxc-UJ5A.jpg?size=600x800&quality=95&sign=5bd6794313ea9f053a2c3bed133c3471&type=album",
    },
    {
      original: "https://sun9-62.userapi.com/impg/a46HHzbiq_JRSTrYaU2HwKe46nb-U2GuPCu52A/nfPlRwmEQuo.jpg?size=600x800&quality=95&sign=b6c681e3c891430aeb22a7178670c3fd&type=album",
    },
    {
      original: "https://sun9-1.userapi.com/impg/64PJPe0YhUmWbN_1js8KAxIQfJHwR3cF08Hf1A/rVkQV__uobo.jpg?size=600x800&quality=95&sign=911ededb1d421c9725d2fb1dc1b67263&type=album",
    },
  ]

  const settings = {
    showBullets: false,
    showIndex: false,
    slideDuration: 700,
    slideInterval: 3000,
    showFullscreenButton: true,
    lazyLoad: true,
    showThumbnails: false,
  }
  return (
    <Container className="flex flex-wrap mb-20 lg:gap-10 lg:flex-nowrap">
      <div className="flex items-center justify-center w-full lg:w-1/2">
        <ImageGallery items={images} {...settings} />
      </div>

      <div className="flex flex-wrap items-center w-full lg:w-1/2 ">
        <div className="h-full flex flex-col justify-around">
          <h3 className="max-w-2xl mt-3 text-3xl font-semibold leading-snug tracking-tight textColor lg:leading-tight lg:text-4xl text-gray-700 dark:text-gray-100">
            Наш Учитель
          </h3>

          <div className="max-w-2xl py-4 text-sm sm:text-base md:text-lg leading-normal font-light text-gray-700 lg:text-xl xl:text-xl dark:text-gray-300">
            Наш гуру — Свами Вишнудевананда Гири является реализованным мастером Адвайта Веданты
          </div>

          <div className="flex items-start mt-8 space-x-3">
            <div className="flex items-center justify-center shrink-0 mt-1 bg-red-500 rounded-md w-11 h-11 ">
              <Image src={om} alt="om" className="w-7 h-7 text-indigo-50" />
            </div>
            <div>
              <h4 className="text-xl font-medium text-gray-800 dark:text-gray-200">
                Духовный Учитель
              </h4>
              <div className="mt-1 text-sm xl:text-base font-light text-gray-500 dark:text-gray-300">
                Имеющий полномочия инициировать в саннясу в традиции адвайта-веданты и йоги, садху, реализованный мастер-джняни в линии адвайта-веданты, философ, теолог, писатель, паломник-путешественник, имеющий учеников монахов и мирян по всему миру
              </div>
            </div>
          </div>

          <div className="flex items-start mt-8 space-x-3">
            <div className="flex items-center justify-center shrink-0 mt-1 bg-red-500 rounded-md w-11 h-11 ">
              <Image src={meditation} alt="om" className="w-7 h-7 text-indigo-50" />
            </div>
            <div>
              <h4 className="text-xl font-medium text-gray-800 dark:text-gray-200">
                Реализованный Мастер
              </h4>
              <div className="mt-1 text-sm xl:text-base font-light text-gray-500 dark:text-gray-300">
                Махамандалешвар Ордена Джуна Акхары. Духовный учитель, реализованный мастер-джняни в линии адвайта-веданты, шиваизма и ануттара-тантры
              </div>
            </div>
          </div>

          <div className="flex items-start mt-8 space-x-3">
            <div className="flex items-center justify-center shrink-0 mt-1 bg-red-500 rounded-md w-11 h-11 ">
              <IoBook className="w-7 h-7 text-indigo-50" />
            </div>
            <div>
              <h4 className="text-xl font-medium text-gray-800 dark:text-gray-200">
                Автор более 50 книг и нескольких сотен статей по философии йоги
              </h4>
              <div className="mt-1 text-sm xl:text-base font-light text-gray-500 dark:text-gray-300">
                Наиболее значительные и известные труды и книги: двухтомник «Сияние драгоценных тайн лайя-йоги», «Песни пробужденного», «Вселенная джняни», «Духовная алхимия: путь внутреннего аскетизма», «Моя жизнь в Боге»
              </div>
            </div>
          </div>
          <div className="flex items-start mt-8 space-x-3">
            <div className="flex items-center justify-center shrink-0 mt-1 bg-red-500 rounded-md w-11 h-11 ">
              <Image src={teacher} alt="teacher" className="w-7 h-7 text-indigo-50" />
            </div>
            <div>
              <h4 className="text-xl font-medium text-gray-800 dark:text-gray-200">
                Обучает
              </h4>
              <div className="mt-1 text-sm xl:text-base font-light text-gray-500 dark:text-gray-300">
                Джняна, раджа, бхакти, карма, кундалини, лайя йоге, учениям ануттара-тантры сиддхов
              </div>
            </div>
          </div>

        </div>
      </div>
    </Container>
  )
}

export default NashGuru