import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/Container";
import { upasana } from "./index"

const page = () => {
  return (
    <Container className="min-h-screen">
      <h1 className="w-full text-center text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold leading-snug tracking-tight text-gray-800 lg:leading-tight  dark:text-white">
        Упасана - практика у алтаря
      </h1>
      <div className="w-full flex justify-center">
        <ul className="mt-10 flex flex-wrap justify-center gap-5 xl:gap-10">
          {upasana.map((sadhana) => (
            <li key={sadhana.id} className="w-full md:w-80 flex flex-col items-center gap-3">
              <Link href={`/upasana/${sadhana.id}`}>
                <Image src={sadhana.img} alt={sadhana.title} className="w-full h-auto rounded-lg border border-amber-400" />
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