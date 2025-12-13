import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/Container";
import { upasana } from "../../helpers/upasana"
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Упасана в ШактиМа',
  description: 'Список алтарных садхан в ШактиМа',
}


const page = () => {
  return (
    <Container className="min-h-screen text-gray-700 dark:text-gray-300">
      <h1 className="mainTitle">
        Упасана - практика у алтаря
      </h1>
      <div className="w-full flex justify-center">
        <ul className="mt-10 flex flex-wrap justify-center lg:justify-start gap-5 xl:gap-10">
          {upasana.map((sadhana) => (
            <li key={sadhana.id} className="w-full md:w-80 flex flex-col items-center gap-1 lg:gap-2">
              <Link href={`/upasana/${sadhana.id}`}>
                <Image src={sadhana.img} alt={sadhana.title} className="size-80 rounded-lg border border-amber-400" />
              </Link>
              <Link href={`/upasana/${sadhana.id}`} className="w-full text-center text-xs md:text-sm ">
                {sadhana.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Container>
  )
}

export default page