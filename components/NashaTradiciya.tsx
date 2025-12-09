"use client"
import { Container } from "@/components/Container";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { LiaMountainSolid } from "react-icons/lia";
import { GiHeraldicSun } from "react-icons/gi";

const NashaTradiciya = () => {

  const images = [
    {
      original: 'https://sun9-1.userapi.com/impg/SN4kGJ1YeTxUg9Nt3YFNQQ7CAOD_c2YNcjMLGQ/f6dWujT9Qh8.jpg?size=600x800&quality=95&sign=0e07fc80eb743d66280d70835e79bf14&type=album',
      description: 'Общая линия передачи',

    },
    {
      original: 'https://sun9-41.userapi.com/impg/kXUFn0S9UxlTFdxGdcC-uY7NoJQp838q8KOVYw/tNCnN7r1mbM.jpg?size=600x800&quality=95&sign=38256a2dd5c380cc2e7f4d897eb9df11&type=album',
      description: 'Свами Вишнудевананда Гири',

    },
    {
      original: 'https://sun9-33.userapi.com/impg/DRdcCAJnFDBSjrbyOQdMFCKRGdlvln1rj5oT-Q/NyF1qDnnKWc.jpg?size=600x800&quality=95&sign=509b90386489533e00742617a3dbf64b&type=album',
      description: 'Свами Брахмананда',

    },
    {
      original: 'https://sun9-62.userapi.com/impg/w7AeHuak-sgO8Wq253N2tMZZk1Rh0GKwBcA2Xw/TkeSYY0eGaU.jpg?size=600x800&quality=95&sign=43bb81b77a6e1978888a010eb284c9a9&type=album',
      description: 'Шри Ади Шанкарачарья',

    },
    {
      original: 'https://sun9-53.userapi.com/impg/gh-V-JIijUDDbE5ZZSDCwzyimhFgQRZXaToG0w/efj1MmheIQU.jpg?size=600x800&quality=95&sign=d269833053af468639037deee1ca7e09&type=album',
      description: 'Бхагаван авадхута Даттатрейя',

    },
    {
      original: 'https://sun9-18.userapi.com/impg/3AlbBpcwPkI-AlzeLJ5vzJdu-Jy3545zIvvW0A/tJUI8ASxSyg.jpg?size=600x800&quality=95&sign=486753f3642723279319e181a221f41d&type=album',
      description: 'Риши Васиштха',

    },
    {
      original: 'https://sun9-4.userapi.com/impg/ppN9TsbORqNSwb85AD4u_IxxEe38FPLu_8Rfbw/rdBJCEvwP9w.jpg?size=600x800&quality=95&sign=86bfca5deeaf443785ec6679189b8ec5&type=album',
      description: 'Северная линия передачи',

    },
    {
      original: 'https://sun9-5.userapi.com/impg/7WKSl7uQr2SsZDZUALhK1tWCsYVbXy0mx6vd0g/FmqalOIRf7c.jpg?size=600x800&quality=95&sign=c49cb69d96f717790672429b08eba37a&type=album',
      description: 'Южная линия передачи',

    },]

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
      <div className="flex items-center justify-center w-full lg:w-1/2 lg:order-1">
        <ImageGallery items={images} {...settings} />
      </div>

      <div
        className="flex flex-wrap items-center w-full lg:w-1/2 lg:justify-end">
        <div>
          <div className="flex flex-col w-full mt-4">
            <h3 className="max-w-2xl mt-3 text-3xl font-semibold leading-snug tracking-tight textColor lg:leading-tight lg:text-4xl text-gray-700 dark:text-gray-100">
              Наша традиция
            </h3>

            <div className="max-w-2xl py-4 text-sm sm:text-base md:text-lg leading-normal font-light text-gray-700 lg:text-xl xl:text-xl dark:text-gray-300">
              В нашей традиции две основные линии передачи
            </div>
          </div>

          <div className="w-full mt-5">
            <div className="flex items-start mt-8 space-x-3">
              <div className="flex items-center justify-center shrink-0 mt-1 bg-red-500 rounded-md w-11 h-11 ">
                <LiaMountainSolid className="w-7 h-7 text-indigo-50" />
              </div>
              <div>
                <h4 className="text-xl font-medium text-gray-800 dark:text-gray-200">
                  Северная линия передачи
                </h4>
                <div className="mt-1 text-sm xl:text-base font-light text-gray-500 dark:text-gray-300">
                  Восходит к древнему монаше­скому ордену Джуна акхара, основанному тысячу лет назад Шри Шанкарачарьей в традиции десяти имен (дашанами санньяса). Нашего Гуру в эту традицию посвятил Сомнатх гири махарадж (Пайлот Бабаджи). От Пайлота Бабаджи линия преемственности ведет к его гуру-сиддху Хари бабе. От него - к просветленному мудрецу Аватар бабе, и далее через линию гуру к самому Шри Шанкарачарье. От Шри Шанкарачарьи линия преемственности ведет к его гуру Говиндападе, а от него - к Гаудападе. От Гаудапады она идет к Шукадеве, а от него к самому риши Вьясе, автору Вед. От Вьясы линия преемственности восходит к риши Васиштхе, сыну Творца и к гималайским мудрецам - бессмертному воплощению-аватару трех богов авадхуте Даттатрейе, святому Нараде и вечно юному Санаткумару, рожденному из ума Брахмы. Наконец на вершине этой древней линии преемственности пребывают великие боги Санатана Дхармы - Брахма, Вишну и Шива.
                </div>
              </div>
            </div>
            <div className="flex items-start mt-8 space-x-3">
              <div className="flex items-center justify-center shrink-0 mt-1 bg-red-500 rounded-md w-11 h-11 ">
                <GiHeraldicSun className="w-7 h-7 text-indigo-50" />
              </div>
              <div>
                <h4 className="text-xl font-medium text-gray-800 dark:text-gray-200">
                  Южная линия передачи
                </h4>
                <div className="mt-1 text-sm xl:text-base font-light text-gray-500 dark:text-gray-300">
                  Ведет к южноиндийской традиции бессмертных йогов-сиддхов и восходит через Свами Вишнудевананду Гири к знаменитому в южной Индии йогу-чудотворцу Свами Шива Прабхакаре (гуру авадхуте Брахмананде) из штата Керала. От него она восходит к его учителю сиддху-риши Памбатти. От риши Памбатти она восходит к риши Сатьямуни, от Сатьямуни — к риши Нанди Девару, от Нанди Девара — к самому Шиве. Риши Нанди Девар достиг сварупа-самадхи в г. Каши (Бенарес). Его учителем был Сам Шива, а учениками Нанди Девара также являются риши Тирумулар, Патанджали, Дакшинамурти, Ромариши.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default NashaTradiciya