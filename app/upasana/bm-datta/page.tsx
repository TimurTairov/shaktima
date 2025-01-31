import { Container } from "@/components/Container";
import Altar from '@/components/NewAltar'
import GaneshaMantra from "@/components/BhadjanMandala/GaneshaMantra";
import GaneshaArati from "@/components/BhadjanMandala/GaneshaArati";
import LaksmiArati from "@/components/BhadjanMandala/LaksmiArati";
import PanchabrahmaMantry from "@/components/BhadjanMandala/PanchabrahmaMantry";
import DattaArati from "@/components/BhadjanMandala/DattaArati";
import Prarthana from "@/components/BhadjanMandala/Prarthana";
import BhadjanyDattatree from "@/components/BhadjanMandala/BhadjanyDattatree";
import ShantiStotra from "@/components/BhadjanMandala/ShantiStotra";
import ShantiMantra from "@/components/BhadjanMandala/ShantiMantra";
import LekciyaGuru from "@/components/BhadjanMandala/LekciyaGuru";
import Meditation4BSB from "@/components/BhadjanMandala/Meditation4BSB";
import Start from "@/components/BhadjanMandala/Start";
import Finish from "@/components/BhadjanMandala/Finish";

const page = () => {
  return (
    <Container >
      <h1 className="w-full py-5 text-center text-lg font-semibold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
        Вторник. Пуджа Даттатрее
      </h1>
      <div id="sutra"></div>
      <Altar />
      <Start />
      <GaneshaMantra />
      <GaneshaArati />
      <LaksmiArati />
      <PanchabrahmaMantry />
      <DattaArati />
      <LekciyaGuru />
      <Prarthana />
      <ShantiStotra />
      <BhadjanyDattatree />
      <ShantiMantra />
      <Meditation4BSB />
      <Finish />
    </Container>
  )
}

export default page