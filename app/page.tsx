import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { Benefits } from "@/components/Benefits";
import { benefitOne, benefitTwo } from "@/components/data";
import GalaryMDC from '@/components/GalaryMDC'
import May2025 from "@/components/Calendar/May2025"



export default function Home() {
  return (
    <Container>
      <Hero />

      <div className="mt-10 text-base md:text-lg w-full text-center">
        Наш центр организован учениками просветленного мастера Адвайты - Гуру Свами Вишнудевананда Гири Махараджа.
        Мы являемся носителями традиции.
      </div>

      <Container>
        <div className="mt-5 w-full flex flex-col justify-center">
          <div className="text-xl text-center text-gray-700 dark:text-white">
            Более <span className="text-indigo-500 ">20 000+</span>{" "}
            садху практикуют в нашей традиции
          </div>

          <div className="w-full flex flex-wrap lg:justify-center lg:gap-20 text-xs md:text-base gap-5 my-10 justify-around">
            <div className=" text-gray-400 dark:text-gray-400 ">
              В России
            </div>
            <div className="text-gray-400 dark:text-gray-400">
              В Европе
            </div>
            <div className="text-gray-400 dark:text-gray-400">
              В США
            </div>
            <div className=" text-gray-400 dark:text-gray-400">
              В Индии
            </div>
            <div className=" text-gray-400 dark:text-gray-400">
              В Непале
            </div>
          </div>
        </div>
      </Container>

      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />


      {/* <SectionTitle
        preTitle="видео"
        title="Видео нашего духовного Учителя Свами Вишнудевананда Гири"
      >
        Как отличить игры ума от просветления?
      </SectionTitle> */}

      {/* <Suspense fallback={<p> Загрузка... </p>}>
        <Container>
          <iframe src="https://vk.com/video_ext.php?oid=40782986&id=456240701&hd=2" allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;" frameBorder="0" loading="lazy" allowFullScreen className="w-full h-60 md:h-96 lg:h-[30rem] xl:h-[35rem] lg:px-20 xl:px-52 rounded-md mb-10"></iframe>
        </Container>
      </Suspense> */}


      {/* <SectionTitle
        preTitle="Календарь"
        title="Мероприятия дхарма центра"
      >
      </SectionTitle> */}

      {/* <May2025 /> */}

      <SectionTitle
        preTitle="Галерея"
        title="Фотографии нашего дхарма центра"
      >
      </SectionTitle>

      <GalaryMDC />

    </Container >
  );
}
