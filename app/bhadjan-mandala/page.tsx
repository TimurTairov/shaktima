import { Container } from "@/components/Container";
import BhadjanMandala from "@/components/BhadjanMandala"
import BhadjanMandala2 from "@/components/BhadjanMandala2"
import BM from "@/components/BM"

const page = () => {
  return (
    <Container>
      <BhadjanMandala />
      <BhadjanMandala2 />
      <BM />
    </Container>
  )
}

export default page