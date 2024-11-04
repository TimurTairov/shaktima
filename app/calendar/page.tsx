import { Container } from "@/components/Container";
import Noyabr2024 from "@/components/Noyabr2024"
import Decabr2024 from "@/components/Decabr2024"

const page = () => {

  return (
    <Container className="min-h-screen">
      <h1 className="w-full text-center text-3xl font-semibold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">Календарь</h1>

      <p className="mt-10"></p>
      <Noyabr2024 />
      <p className="mt-10"></p>
      <Decabr2024 />

    </Container >
  )
}

export default page