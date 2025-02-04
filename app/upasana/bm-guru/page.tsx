import { Container } from "@/components/Container";
import Altar from '@/components/NewAltar'
import MahaAratiSmall from "@/components/BhadjanMandala/MahaAratiSmall";
import Prarthana from "@/components/BhadjanMandala/Prarthana";
import BhadjanyGuru from "@/components/BhadjanMandala/BhadjanyGuru";
import MantraPribejisha from "@/components/BhadjanMandala/MantraPribejisha";
import GuruYogaFull from "@/components/BhadjanMandala/GuruYogaFull";
import ShantiStotra from "@/components/BhadjanMandala/ShantiStotra";
import ShantiMantra from "@/components/BhadjanMandala/ShantiMantra";
import LekciyaGuru from "@/components/BhadjanMandala/LekciyaGuru";
import Meditation4BSB from "@/components/BhadjanMandala/Meditation4BSB";
import Start from "@/components/BhadjanMandala/Start";
import Finish from "@/components/BhadjanMandala/Finish";
import PosvyasheneiZaslug from "@/components/BhadjanMandala/PosvyasheneiZaslug";

const page = () => {
  return (
    <Container >
      <h1 className="w-full py-5 text-center text-lg font-semibold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
        Четверг. Махапуджа
      </h1>
      <div id="sutra"></div>
      <Altar />
      <Start />
      <MahaAratiSmall />
      <LekciyaGuru />
      <Prarthana />
      <ShantiStotra />
      <BhadjanyGuru />
      <MantraPribejisha />
      <GuruYogaFull />
      <ShantiMantra />
      <Meditation4BSB />
      <PosvyasheneiZaslug />
      <Finish />
    </Container>
  )
}

export default page