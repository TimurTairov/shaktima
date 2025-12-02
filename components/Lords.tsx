import Image from 'next/image'
import { Container } from '@/components/Container'
import shiva from "@/public/img/Lords/shiva.webp"
import datta from "@/public/img/Lords/datta.webp"
import vishnu from "@/public/img/Lords/vishnu.webp"
import guru from "@/public/img/Lords/guru.webp"
import shakti from "@/public/img/Lords/shakti.webp"
import ganesh from "@/public/img/Lords/ganesh.webp"
import Link from 'next/link'

const Lords = () => {
  return (
    <Container className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7 lg:gap-10 xl:gap-14 py-10 lg:py-20'>
      <div className='flex flex-col '>
        <Link href="/upasana/bm-shiva">
          <Image src={shiva} alt='shiva' loading="lazy" />
        </Link>
        <Link href="/upasana/bm-shiva" className='w-full text-center text-lg font-semibold mt-2'>
          Понедельник - Шива
        </Link>
        <p className='text-xs md:text-sm'>Шива олицетворяет собой космическое сознание, статичное мужское начало вселенной (Пуруша). Наряду с Брахмой и Вишну является одним из богов Тримурти. Бог Разрушитель Вселенной. Также Шива является основателем Йоги.</p>
      </div>
      <div className='flex flex-col'>
        <Link href="/upasana/bm-datta">
          <Image src={datta} alt='datta' loading="lazy" />
        </Link>
        <Link href="/upasana/bm-datta" className='w-full text-center text-lg font-semibold mt-2'>Вторник - Даттатрея</Link>
        <p className='text-xs md:text-sm'>Даттатрея — ишта-девата, избранное божество нашей традиции. Он — учитель всех учителей, наставник всех йогов и сиддхов. Он олицетворяет принцип воззрения адвайты и самоосвобожденного поведения — игры в облике авадхуты.</p>
      </div>
      <div className='flex flex-col'>
        <Link href="/upasana/bm-vishnu">
          <Image src={vishnu} alt='vishnu' loading="lazy" />
        </Link>
        <Link href="/upasana/bm-vishnu" className='w-full text-center text-lg font-semibold mt-2'>Среда - Вишну</Link>
        <p className='text-xs md:text-sm'>Бог-хранитель вселенной, один из Тримурти, божественной Троицы богов. Он олицетворяет энергию поддержания Абсолюта (стхити) и гуну саттва.
        </p>
      </div>
      <div className='flex flex-col'>
        <Link href="/upasana/bm-guru">
          <Image src={guru} alt='guru' loading="lazy" />
        </Link>
        <Link href="/upasana/bm-guru" className='w-full text-center text-lg font-semibold mt-2'>Четверг - Гуру</Link>
        <p className='text-xs md:text-sm'>«Один лишь Гуру, который достиг Самореализации, может помочь ищущему достичь ее».</p>
        <p className='w-full text-right pr-5 text-sm'>Шива-сутра</p>
      </div>
      <div className='flex flex-col'>
        <Link href="/upasana/bm-shakti">
          <Image src={shakti} alt='shakti' loading="lazy" />
        </Link>
        <Link href="/upasana/bm-shakti" className='w-full text-center text-lg font-semibold mt-2'>Пятница - Шакти</Link>
        <p className='text-xs md:text-sm'>Богиня, давшая начало всему творению - Божественная Мать всего сущего, аспектами которой являются все Богини или Дэви: Лакшми, Сарасвати и Парвати.</p>
      </div>
      <div className='flex flex-col'>
        <Link href="/upasana/bm-siddhi">
          <Image src={ganesh} alt='ganesh' loading="lazy" />
        </Link>
        <Link href="/upasana/bm-siddhi" className='w-full text-center text-lg font-semibold mt-2'>Суббота - Сиддхи</Link>
        <p className='text-xs md:text-sm'>Суббота - день почитание великих святых - махасиддхов. </p>
      </div>

    </Container>
  )
}

export default Lords