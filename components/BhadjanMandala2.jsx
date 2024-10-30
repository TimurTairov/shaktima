'use client'
import Image from 'next/image'
import Link from 'next/link'
import { Container } from '@/components/Container'
import img1 from '@/public/img/altar/1.png'
import img2 from '@/public/img/altar/2.png'
import img3 from '@/public/img/altar/3.png'
import img4 from '@/public/img/altar/4.png'
import img5 from '@/public/img/altar/5.png'
import img6 from '@/public/img/altar/6.png'
import img7 from '@/public/img/altar/7.png'
import img8 from '@/public/img/altar/8.png'
import img9 from '@/public/img/altar/9.png'
import img10 from '@/public/img/altar/10.png'
import img11 from '@/public/img/altar/11.png'
import img12 from '@/public/img/altar/12.png'

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
    <div className="pt-10 lg:py-20">
      <Container className="flex flex-wrap justify-between">
        <div className="grid grid-cols-4 w-full lg:w-6/12">
          {altar.map((item, index) => (
            <Image key={index} src={item} alt="murti" loading="lazy" />
          ))}
        </div>
        <div className="flex items-center justify-center w-full lg:w-5/12">
          <div className="max-w-2xl py-10">
            <h1 className="w-full text-center text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:leading-tight dark:text-white">
              Бхаджан Мандала
            </h1>
            <p className="w-full text-center py-5 text-lg leading-normal text-gray-500 lg:text-xl  dark:text-gray-300">
              Призывание благословений Древа Прибежища
            </p>
            <div className="flex w-full flex-col px-10 md:px-20 lg:px-40 h-9">
              <div className="divider bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-full"></div>
            </div>
            <p className="w-full text-center py-5 text-lg leading-normal text-gray-500 text-balance dark:text-gray-300">
              ॐ Бхаджан-мандала - это коллективная практика - мистерия звука,
              способная переместить сознание в высшие сферы и открывающая
              измерение Бога.
            </p>
            <p className="w-full text-center py-5 text-lg leading-normal text-gray-500 text-balance dark:text-gray-300">
              🔱 Во время Бхаджан Мандалы практикующие воспевают: Гимны, Стотры,
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
