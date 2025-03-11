import { Container } from "@/components/Container";
import Link from "next/link";
import { RiArrowGoBackFill } from "react-icons/ri";
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
import Disclaimer from '@/components/BhadjanMandala/Disclaimer';

const page = () => {
  return (
    <Container >
      <div className="w-full py-5 flex justify-center items-center gap-3 text-lg font-semibold leading-snug tracking-tight lg:leading-tight lg:text-4xl">
        <h1 className="text-gray-800  dark:text-white">
          Пуджа Шакти. 1-ая неделя
        </h1>
        <Link href="/upasana/bm-shakti/" className="inline-flex text-lg text-indigo-500">
          <RiArrowGoBackFill />
        </Link>
      </div>
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
      <Disclaimer />
      <Link href="/upasana/bm-shakti/" className="mt-10 lg:mt-20 flex justify-center text-lg text-indigo-500">
        <RiArrowGoBackFill className=" size-10" />
      </Link>
    </Container>
  )
}

export default page