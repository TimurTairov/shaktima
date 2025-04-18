import { Container } from "@/components/Container"
// import Noyabr2024 from "@/components/Noyabr2024"
// import Decabr2024 from "@/components/Decabr2024"
// import Fevral2025 from "@/components/Fevral2025"
import Mart2025 from "@/components/Calendar/Mart2025"
import Aprel2025 from "@/components/Calendar/Aprel2025"

const page = () => {

  return (
    <Container className="min-h-screen">
      <h1 className="w-full text-center text-3xl font-semibold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">Календарь</h1>
      <Aprel2025 />

    </Container >
  )
}

export default page