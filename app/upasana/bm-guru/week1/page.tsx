import { Container } from "@/components/Container";
import Link from "next/link";
import { RiArrowGoBackFill } from "react-icons/ri";
import Altar from '@/components/NewAltar'
import MahaAratiSmall from "@/components/BhadjanMandala/MahaAratiSmall";
import Prarthana from "@/components/BhadjanMandala/Prarthana";
import BhadjanyGuru from "@/components/BhadjanMandala/BhadjanyGuru";
import MantraPribejisha from "@/components/BhadjanMandala/MantraPribejisha";
import GuruYogaFull from "@/components/BhadjanMandala/GuruYogaFull";
import PanchabrahmaMantry from "@/components/BhadjanMandala/PanchabrahmaMantry";
import ShantiMantra from "@/components/BhadjanMandala/ShantiMantra";
import LekciyaGuru from "@/components/BhadjanMandala/LekciyaGuru";
import Meditation4BSB from "@/components/BhadjanMandala/Meditation4BSB";
import Start from "@/components/BhadjanMandala/Start";
import Finish from "@/components/BhadjanMandala/Finish";
import PosvyasheneiZaslug from "@/components/BhadjanMandala/PosvyasheneiZaslug";
import Disclaimer from '@/components/BhadjanMandala/Disclaimer';

const page = () => {
  return (
    <Container className="min-h-screen text-gray-700 dark:text-gray-300">
      <div className="w-full py-5 flex justify-center items-center gap-3 text-lg font-semibold leading-snug tracking-tight lg:leading-tight lg:text-4xl">
        <h1 className="textColor">
          Пуджа Гуру. 1-ая неделя
        </h1>
        <Link href="/upasana/bm-guru/" className="inline-flex text-lg text-indigo-500">
          <RiArrowGoBackFill />
        </Link>
      </div>
      <div id="sutra"></div>
      <Altar />
      <Start />
      <MahaAratiSmall />
      <LekciyaGuru />
      <Prarthana />
      <PanchabrahmaMantry />
      <BhadjanyGuru />
      <MantraPribejisha />
      <GuruYogaFull />
      <ShantiMantra />
      <Meditation4BSB />
      <PosvyasheneiZaslug />
      <Finish />
      <Disclaimer />
      <Link href="/upasana/bm-guru/" className="mt-10 lg:mt-20 flex justify-center text-lg text-indigo-500">
        <RiArrowGoBackFill className=" size-10" />
      </Link>
    </Container>
  )
}

export default page