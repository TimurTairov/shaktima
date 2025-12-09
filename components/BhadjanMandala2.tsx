'use client'
import Image from 'next/image'
import { Container } from '@/components/Container'
import img1 from '@/public/TheLords-1/1.webp'
import img2 from '@/public/TheLords-1/2.webp'
import img3 from '@/public/TheLords-1/3.webp'
import img4 from '@/public/TheLords-1/4.webp'
import img5 from '@/public/TheLords-1/5.webp'
import img6 from '@/public/TheLords-1/6.webp'
import img7 from '@/public/TheLords-1/7.webp'
import img8 from '@/public/TheLords-1/8.webp'
import img9 from '@/public/TheLords-1/9.webp'
import img10 from '@/public/TheLords-1/10.webp'
import img11 from '@/public/TheLords-1/11.webp'
import img12 from '@/public/TheLords-1/12.webp'

const BhadjanMandala2 = () => {
  const altar = [
    img6,
    img3,
    img2,
    img4,
    img5,
    img1,
    img7,
    img9,
    img8,
    img10,
    img11,
    img12,
  ]
  return (
    <div className="pt-10 lg:py-20 font-light">
      <Container className="flex flex-wrap justify-between">
        <div className="grid grid-cols-4 w-full lg:w-6/12">
          {altar.map((item, index) => (
            <Image
              key={index}
              src={item}
              width={176}
              height={215.25}
              alt="murti"
              loading="lazy"
            />
          ))}
        </div>
        <div className="flex items-center justify-center w-full lg:w-5/12 mt-5">
          <div className="max-w-2xl h-full flex flex-col gap-3 md:justify-around">
            <h1 className="w-full text-center text-3xl font-medium leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:leading-tight dark:text-white">
              Бхаджан Мандала
            </h1>
            <p className="w-full text-center text-lg leading-normal text-gray-500 lg:text-xl dark:text-gray-300">
              ॐ Призывание благословений Древа Прибежища
            </p>
            <p className="w-full text-center text-lg leading-normal font-light text-gray-500 text-balance dark:text-gray-300">
              ॐ Бхаджан-мандала - это коллективная практика - мистерия звука,
              способная переместить сознание в высшие сферы и открывающая
              измерение Бога.
            </p>
            <p className="w-full text-center text-lg leading-normal font-light text-gray-500 text-balance dark:text-gray-300">
              ॐ Во время Бхаджан Мандалы практикующие воспевают: Гимны, Стотры,
              Мантры и Бхаджаны, а также проводят: Арати (огненные ритуалы) и
              поклонения.
            </p>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default BhadjanMandala2
