'use client'
import { Container } from "@/components/Container";
import { Suspense } from 'react';
import ImageGallery from "react-image-gallery";
import { indiaday__2024, indiaday_deti_2024, indiaday_praktiki_2024, indiaday_shater_2024 } from '../photos24'

const page = () => {
  const settings = {
    showBullets: false,
    showIndex: true,
    showThumbnails: false,
    slideDuration: 1000,
    slideInterval: 3000,
    showFullscreenButton: true,
    lazyLoad: true,
  }
  return (
    <Container>
      <h1 className="textColor w-full text-center text-2xl font-semibold my-2">Дни Индии в Москве</h1>
      <div className="text-gray-600 mx-2 mt-5 flex flex-col gap-3 indent-5 md:indent-10">
        <p>
          Ом, намасте 🙏 С 15 по 18 августа в Москве в парке Остров Мечты проходил 9-ый ежегодный фестиваль индийской культуры. Институт Риши Васиштхи был успешно представлен на фестивале, который за 4 дня посетило более 2 000 000 человек.
        </p>
        <p>
          11 учеников Гуру выступили с лекциями по Адвайте, Ведической семье и малым наукам; были проведены ровно 100 шанти-карма-садхан, медитации сиддхов, асаны и пранаямы, консультации по Аюрведе, Джйотиш, ведической психологии, а также Арати Ганеше и Лакшми.
        </p>
        <p>
          У нас звучали ханг и поющие чаши, мы рисовали мехенди, ставили на гвозди, а приходящие дети разукрашивали Ом, янтры и образы ведических богов. Мы спели песню, посвящённую нашему Гурудеву приняли в гости Сати Казанову, отметили день рождения нашего дорогого Адитьяпрабхи и день явления ведической семьи из нашей Сангхи, порадовались встрече друг с другом и совместному служению
        </p>
        <p>
          В шатре были представлены наши книги, показаны видео-лекции Гуру, установлена фотозона и алтарь с Древом Прибежища🙏 Мы знакомили посетителей с традицией. Для одних открывали мир медитаций и практик, для других – Путь к Гуру. Получали прекрасные отзывы, подписывали в чаты и обменивались контактами.
        </p>
        <p>
          Мы дали интервью в Вечернюю Москву и сняли фильм о нашей миссии на фестивале. Около 30 Учеников-мирян приняли активное участие в служении на благо Трёх Драгоценностей. Даже наши дети проповедовали Дхарму. Мероприятие прошло при поддержке Московского Дхарма Центра &quot;Шакти Ма&quot;.  Всё это смиренно с благодарностью мы подносим к стопам нашего любимого Гурудева🙏🕉
        </p>
        <div className='w-full flex flex-col  justify-center mt-5'>
          <p className='font-medium text-center'>
            Арья Сангха Ки Джей✨
          </p>
          <p className='font-medium text-center'>
            Шри Гуру Свами Вишнудевананда Гири Джи Ки Джей✨
          </p>
          <p className='font-medium text-center'>
            Сатья Санатана Дхарма Ки Джей✨
          </p>
        </div>
        <div className="mt-10 lg:mt-20">
          <h5 className="font-semibold text-xs lg:text-lg text-center text-gray-700 lg:ml-2 mb-2">Отчетный репортаж Адитьи о поездке в Москву на день Индии </h5>
          <div className='lg:mx-20 xl:mx-40'>
            <Suspense fallback={<p>Загрузка ...</p>}>
              <iframe src="https://rutube.ru/play/embed/e4eb1639d07a43ec99845446c1748ffc?skinColor=e53935" frameBorder="0" allow="clipboard-write; autoplay" allowFullScreen className='w-full lg:h-[25rem] xl:h-[30rem] 2xl:h-[40rem] rounded-md'></iframe>
            </Suspense>
          </div>
        </div>
      </div>

      <div className="mt-20">
        <h1 className=" text-lg lg:text-2xl text-center">Дни Индии в Москве с 15 по 18 августа 2024 года</h1>
        <div className="my-10">
          <h5 className="font-semibold text-lg text-center text-gray-700">Часть 1. Общие фотографии</h5>
          <div className="flex justify-center items-center w-full">
            <ImageGallery items={indiaday__2024} {...settings} />
          </div>
        </div>
        <div className="my-10">
          <h5 className="font-semibold text-lg text-center text-gray-700">Часть 2. Наш шатер</h5>
          <div className="flex justify-center items-center w-full">
            <ImageGallery items={indiaday_shater_2024} {...settings} />
          </div>
        </div>
        <div className="my-10">
          <h5 className="font-semibold text-lg text-center text-gray-700">Часть 3. Практики</h5>
          <div className="flex justify-center items-center w-full">
            <ImageGallery items={indiaday_praktiki_2024} {...settings} />
          </div>
        </div>
        <div className="my-10">
          <h5 className="font-semibold text-lg text-center text-gray-700">Часть 4. Детская Мандала</h5>
          <div className="flex justify-center items-center w-full">
            <ImageGallery items={indiaday_deti_2024} {...settings} />
          </div>
        </div>
      </div>
    </Container>
  )
}

export default page