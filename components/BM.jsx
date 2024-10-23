import Image from 'next/image'
import { Container } from '@/components/Container'
import guru from '@/public/img/guru.png'

const BM = () => {
  return (
    <Container>
      <div className="w-full flex flex-col md:flex-row justify-center md:justify-between">
        <div className="md:mr-7">
          <p className="">
            «Величие, пользу, ценность этой садханы трудно переоценить. Садхана
            эта - легкая, радостная, а ее плод - как от серьезного йоговского
            тапаса. Счастлив тот, кто поет баджаны с верой и преданным сердцем»
          </p>
          <p className="text-right md:mr-2 font-semibold">
            Свами Вишнудевананда Гири Махарадж
          </p>
        </div>
        <div className="shrink-0 mt-5 md:mt-0 flex justify-center">
          <Image
            src={guru}
            alt="guru"
            width={100}
            height={100}
            className=" object-cover rounded-full"
          />
        </div>
      </div>
    </Container>
  )
}

export default BM
