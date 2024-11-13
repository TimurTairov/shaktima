import { Container } from "@/components/Container";
import Image from "next/image";
import data from '@/public/img/Lords/datta.webp'
import { BsInfoCircleFill } from 'react-icons/bs'

const page = () => {
  return (
    <Container>
      <h1 className="w-full text-center text-2xl font-semibold my-2">Садхана Даттатрее</h1>
      <div className="flex justify-center mt-10">
        <Image src={data} alt="Даттатрейя" className="w-full md:w-3/4 lg:w-2/3 xl:w-1/3 h-auto" />
      </div>
      <h5 className="mt-10 xl:mt-20 w-full text-center text-xl my-2">1. Семенная восьмисложная мантра Даттатрейи</h5>
      <h5 className="mt-5 w-full text-center font-bold text-2xl my-2">Ом Драм Даттатреяя намаха</h5>
      <div className="mt-5 flex justify-center">
        <div className="max-w-5xl flex flex-col gap-3">
          <p>«Восьмисложная мантра — «Драм» или «Драам» с добавлением к ней слогов «Да, ттаа, тре, йаа, йа, на, мах».</p>
          <p>В этой мантре слово «Даттатреяя» относится к истинному (изначальному) блаженству сознания, а слово «намах» — к полностью проявленному блаженству.</p>
          <p>Размер мантры — гаятри</p>
          <p>Риши — Садашива</p>
          <p>Главенствующее божество — Даттатрейя.</p>
          <p>«Даттатреяя» — внутренняя, потенциальная часть мантры и, таким образом, ее биджа, «намах» — шакти, действенная сила мантры».</p>
          <p className="w-full text-right"> «Даттатрейя-упанишада»</p>
        </div>
      </div>
      <div className="mt-10 w-full flex justify-center">
        <audio
          controls
          controlsList="nodownload"
          src="/sounds/Om Dram Dattatreyaya Namaha 108 times.mp3"
          className="w-full md:w-1/2"
        ></audio>
      </div>

      <div className="mt-10 flex items-center justify-center gap-5">
        <BsInfoCircleFill className="w-10 h-10 shrink-0 text-indigo-600 dark:text-indigo-300" />
        <p>Внимание! Благоприятно получить передачу в данную мантру из уст гуру.</p>

      </div>
    </Container>
  )
}

export default page