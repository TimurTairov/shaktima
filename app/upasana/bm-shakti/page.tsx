import { Container } from "@/components/Container";
import Altar from '@/components/NewAltar'
import GaneshaMantra from "@/components/BhadjanMandala/GaneshaMantra";
import GaneshaArati from "@/components/BhadjanMandala/GaneshaArati";
import SarasvatiArati from "@/components/BhadjanMandala/SarasvatiArati";
import PanchabrahmaMantry from "@/components/BhadjanMandala/PanchabrahmaMantry";
import Prarthana from "@/components/BhadjanMandala/Prarthana";
import BhadjanyShakti from "@/components/BhadjanMandala/BhadjanyShakti";
import AshtalaksmiStotra from "@/components/BhadjanMandala/AshtalaksmiStotra";
import ShantiMantra from "@/components/BhadjanMandala/ShantiMantra";
import LekciyaGuru from "@/components/BhadjanMandala/LekciyaGuru";
import Meditation4BSB from "@/components/BhadjanMandala/Meditation4BSB";
import Start from "@/components/BhadjanMandala/Start";
import Finish from "@/components/BhadjanMandala/Finish";
import SarasvatiGayatri from "@/components/BhadjanMandala/SarasvatiGayatri";
import SarasvatiAshtottaraShatanama from "@/components/BhadjanMandala/SarasvatiAshtottaraShatanama";

const page = () => {
  return (
    <Container >
      <h1 className="w-full py-5 text-center text-lg font-semibold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
        Пятница. Пуджа Шакти
      </h1>
      <div id="sutra"></div>
      <Altar />
      <Start />
      <GaneshaMantra />
      <GaneshaArati />
      <SarasvatiGayatri />
      <SarasvatiAshtottaraShatanama />
      <SarasvatiArati />
      <PanchabrahmaMantry />
      <LekciyaGuru />
      <Prarthana />
      <AshtalaksmiStotra />
      <BhadjanyShakti />
      <ShantiMantra />
      <Meditation4BSB />
      <Finish />
    </Container>
  )
}

export default page