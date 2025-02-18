import { Container } from "@/components/Container"
// import Noyabr2024 from "@/components/Noyabr2024"
// import Decabr2024 from "@/components/Decabr2024"
import Yanvar2025 from "@/components/Yanvar2025"
import Fevral2025 from "@/components/Fevral2025"

const page = () => {

  return (
    <Container className="min-h-screen">
      <h1 className="w-full text-center text-3xl font-semibold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">Календарь</h1>

      <Fevral2025 />

    </Container >
  )
}

export default page