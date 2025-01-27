import { Container } from "@/components/Container";
import Altar from '@/components/NewAltar'
import GaneshaMantra from "@/components/BhadjanMandala/GaneshaMantra";
import GaneshaArati from "@/components/BhadjanMandala/GaneshaArati";
import LaksmiArati from "@/components/BhadjanMandala/LaksmiArati";
import PanchabrahmaMantry from "@/components/BhadjanMandala/PanchabrahmaMantry";
import ShivaArati from "@/components/BhadjanMandala/ShivaArati";
import Prarthana from "@/components/BhadjanMandala/Prarthana";
import BhadjanyShive from "@/components/BhadjanMandala/BhadjanyShive";
import ShantiMantra from "@/components/BhadjanMandala/ShantiMantra";
import LekciyaGuru from "@/components/BhadjanMandala/LekciyaGuru";
import Meditation4BSB from "@/components/BhadjanMandala/Meditation4BSB";
import Start from "@/components/BhadjanMandala/Start";
import Finish from "@/components/BhadjanMandala/Finish";

const page = () => {
  return (
    <Container >
      <h1 className="w-full py-5 text-center text-lg font-semibold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
        Понедельник. Пуджа Шиве
      </h1>
      <div id="sutra"></div>
      <Altar />
      <Start />
      <GaneshaMantra />
      <GaneshaArati />
      <LaksmiArati />
      <PanchabrahmaMantry />
      <ShivaArati />
      <LekciyaGuru />
      <Prarthana />
      <BhadjanyShive />
      <ShantiMantra />
      <Meditation4BSB />
      <Finish />
    </Container>
  )
}

export default page