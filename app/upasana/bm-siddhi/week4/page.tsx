import { Container } from "@/components/Container";
import Link from "next/link";
import { RiArrowGoBackFill } from "react-icons/ri";
import Altar from '@/components/NewAltar'
import GaneshaMantra from "@/components/BhadjanMandala/GaneshaMantra";
import GaneshaArati from "@/components/BhadjanMandala/GaneshaArati";
import LaksmiArati from "@/components/BhadjanMandala/LaksmiArati";
import PanchabrahmaMantry from "@/components/BhadjanMandala/PanchabrahmaMantry";
import NirvanaShatakam from "@/components/BhadjanMandala/NirvanaShatakam";
import Prarthana from "@/components/BhadjanMandala/Prarthana";
import Totakashtakam from "@/components/BhadjanMandala/Totakashtakam";
import ShantiMantra from "@/components/BhadjanMandala/ShantiMantra";
import LekciyaGuru from "@/components/BhadjanMandala/LekciyaGuru";
import Meditation4BSB from "@/components/BhadjanMandala/Meditation4BSB";
import Start from "@/components/BhadjanMandala/Start";
import Finish from "@/components/BhadjanMandala/Finish";
import BhadjanySiddham from "@/components/BhadjanMandala/BhadjanySiddham";
import Disclaimer from '@/components/BhadjanMandala/Disclaimer';

const page = () => {
  return (
    <Container >
      <div className="w-full py-5 flex justify-center items-center gap-3 text-lg font-semibold leading-snug tracking-tight lg:leading-tight lg:text-4xl">
        <h1 className="textColor">
          Пуджа сиддхам. 4-ая неделя
        </h1>
        <Link href="/upasana/bm-siddhi/" className="inline-flex text-lg text-indigo-500">
          <RiArrowGoBackFill />
        </Link>
      </div>
      <div id="sutra"></div>
      <Altar />
      <Start />
      <GaneshaMantra />
      <GaneshaArati />
      <LaksmiArati />
      <PanchabrahmaMantry />
      <LekciyaGuru />
      <Prarthana />
      <NirvanaShatakam />
      <Totakashtakam />
      <BhadjanySiddham />
      <ShantiMantra />
      <Meditation4BSB />
      <Finish />
      <Disclaimer />
      <Link href="/upasana/bm-siddhi/" className="mt-10 lg:mt-20 flex justify-center text-lg text-indigo-500">
        <RiArrowGoBackFill className=" size-10" />
      </Link>
    </Container>
  )
}

export default page