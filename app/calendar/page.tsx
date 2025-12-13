import { Container } from "@/components/Container"
import Decabr2025 from "@/components/Calendar/Decabr2025"
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Календарь ШактиМа',
  description: 'Расписание мероприятий в ШактиМа на текущий месяц',
}

const page = () => {

  return (
    <Container className="min-h-screen">
      <h1 className="mainTitle">Календарь</h1>
      <Decabr2025 />


    </Container >
  )
}

export default page