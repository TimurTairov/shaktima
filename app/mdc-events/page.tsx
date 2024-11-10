import { Container } from "@/components/Container";
import { seminary } from "./index"
import Link from "next/link";
import Image from "next/image";

const page = () => {
  return (
    <Container className="min-h-screen">
      <h1 className="w-full text-center text-3xl font-semibold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
        События и мероприятия московского дхарма центра
      </h1>

      <ul className="mt-10 flex flex-wrap gap-5">
        {seminary.map((seminar) => (
          <li key={seminar.id} className="w-80 text-center flex flex-col gap-3">
            <Link href={`/mdc-events/${seminar.id}`}>
              <Image src={seminar.img} alt={seminar.title} className="w-80 h-80 rounded-lg" />
            </Link>
            <Link href={`/mdc-events/${seminar.id}`}>
              {seminar.title}
            </Link>
          </li>
        ))}
      </ul>

    </Container>
  )
}

export default page