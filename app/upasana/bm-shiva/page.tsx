import Link from "next/link";
import { RiArrowGoBackFill } from "react-icons/ri";
import { Container } from "@/components/Container";
import { bm } from "./index"

const page = () => {
  return (
    <Container className="min-h-screen">

      <div className="w-full py-5 flex justify-center items-center gap-3 text-lg md:text-2xl lg:text-3xl xl:text-4xl font-semibold leading-snug tracking-tight lg:leading-tight">
        <h1 className="text-gray-800  dark:text-white">
          Бхаджан Мандала. Понедельник
        </h1>
        <Link href="/upasana/" className="inline-flex text-lg text-indigo-500">
          <RiArrowGoBackFill />
        </Link>
      </div>
      <div className="w-full flex justify-center">
        <ul className="mt-10 py-10 px-7 flex flex-col justify-center lg:justify-start gap-5 xl:gap-10 border-2 border-indigo-500 dark:border-white rounded-xl">
          {bm.map((sadhana) => (
            <li key={sadhana.id} className="w-full md:w-80 flex items-center gap-3">
              <Link href={`/upasana/bm-shiva/${sadhana.id}`} className="w-full text-center text-xs md:text-sm lg:text-base xl:text-lg text-indigo-500">
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