import { Container } from "@/components/Container"
import Yanvar2025 from "@/components/Calendar/Yanvar2025"
import Fevral2025 from "@/components/Fevral2025"
import Mart2025 from "@/components/Calendar/Mart2025"
import Aprel2025 from "@/components/Calendar/Aprel2025"
import May2025 from "@/components/Calendar/May2025"

const page = () => {

  return (
    <Container className="min-h-screen">
      <h1 className="textColor w-full text-center text-3xl font-semibold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">Календарь</h1>
      <May2025 />
      <Aprel2025 />
      <Mart2025 />
      <Fevral2025 />
      <Yanvar2025 />

    </Container >
  )
}

export default page