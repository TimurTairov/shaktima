import { Container } from "@/components/Container";
import { seminary } from "./index"
import Link from "next/link";

const page = () => {
  return (
    <Container className="min-h-screen">
      <h1 className="w-full text-center text-3xl font-semibold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
        Семинары
      </h1>

      <ul className="mt-10">
        {seminary.map((seminar) => (
          <li key={seminar.id} className="w-full text-center">
            <Link href={`/seminary/${seminar.id}`}>
              {seminar.title}
            </Link>
          </li>
        ))}
      </ul>

    </Container>
  )
}

export default page