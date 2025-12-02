import { Container } from "@/components/Container"
import Decabr2025 from "@/components/Calendar/Decabr2025"


const page = () => {

  return (
    <Container className="min-h-screen">
      <h1 className="mainTitle">Календарь</h1>
      <Decabr2025 />


    </Container >
  )
}

export default page