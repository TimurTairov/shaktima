import { Container } from "@/components/Container";
import Link from "next/link";
import { RiArrowGoBackFill } from "react-icons/ri";
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
      <div className="w-full py-5 flex justify-center items-center gap-3 text-lg font-semibold leading-snug tracking-tight lg:leading-tight lg:text-4xl">
        <h1 className="text-gray-800  dark:text-white">
          Пуджа Шиве. 1-ая неделя
        </h1>
        <Link href="/upasana/bm-shiva/" className="inline-flex text-lg text-indigo-500">
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
      <ShivaArati />
      <LekciyaGuru />
      <Prarthana />
      <BhadjanyShive />
      <ShantiMantra />
      <Meditation4BSB />
      <Finish />
      <Link href="/upasana/bm-shiva/" className="mt-10 lg:mt-20 flex justify-center text-lg text-indigo-500">
        <RiArrowGoBackFill className=" size-10" />
      </Link>
    </Container>
  )
}

export default page