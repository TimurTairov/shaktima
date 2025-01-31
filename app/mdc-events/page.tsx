import { Container } from "@/components/Container";
import { seminary } from "./index"
import Link from "next/link";
import Image from "next/image";

const page = () => {
  return (
    <Container className="min-h-screen">
      <h1 className="w-full text-center text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold leading-snug tracking-tight text-gray-800 lg:leading-tight  dark:text-white">
        Мероприятия московского дхарма центра
      </h1>

      <div className="w-full flex justify-center">
        <ul className="mt-10 flex flex-wrap justify-center gap-5 xl:gap-10">
          {seminary.map((seminar) => (
            <li key={seminar.id} className="w-full md:w-80 items-center flex flex-col gap-3">
              <Link href={`/mdc-events/${seminar.id}`}>
                <Image src={seminar.img} alt={seminar.title} className="size-60 md:size-80 rounded-lg" />
              </Link>
              <Link href={`/mdc-events/${seminar.id}`} className="w-full text-center text-xs md:text-sm ">
                {seminar.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

    </Container>
  )
}

export default page