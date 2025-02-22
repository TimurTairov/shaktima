import Image from 'next/image'
import { Container } from '@/components/Container'
import shiva from "@/public/img/Lords/shiva.webp"
import datta from "@/public/img/Lords/datta.webp"
import vishnu from "@/public/img/Lords/vishnu.webp"
import guru from "@/public/img/Lords/guru.webp"
import shakti from "@/public/img/Lords/shakti.webp"
import ganesh from "@/public/img/Lords/ganesh.webp"

const Lords = () => {
  return (
    <Container className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7 lg:gap-10 xl:gap-14 py-10 lg:py-20'>
      <div className='flex flex-col '>
        <Image src={shiva} alt='shiva' loading="lazy" />
        <h2 className='w-full text-center text-lg font-semibold mt-2'>Понедельник - Шива</h2>
        <p className='text-sm'>Шива олицетворяет собой космическое сознание, статичное мужское начало вселенной (Пуруша). Наряду с Брахмой и Вишну является одним из богов Тримурти. Бог Разрушитель Вселенной. Также Шива является основателем Йоги.</p>
      </div>
      <div className='flex flex-col'>
        <Image src={datta} alt='datta' loading="lazy" />
        <h2 className='w-full text-center text-lg font-semibold mt-2'>Вторник - Даттатрея</h2>
        <p className='text-sm '>Даттатрея — ишта-девата, избранное божество нашей традиции. Он — учитель всех учителей, наставник всех йогов и сиддхов. Он олицетворяет принцип воззрения адвайты и самоосвобожденного поведения — игры в облике авадхуты.</p>
      </div>
      <div className='flex flex-col'>
        <Image src={vishnu} alt='vishnu' loading="lazy" />
        <h2 className='w-full text-center text-lg font-semibold mt-2'>Среда - Вишну</h2>
        <p className='text-sm '>Бог-хранитель вселенной, один из Тримурти, божественной Троицы богов. Он олицетворяет энергию поддержания Абсолюта (стхити) и гуну саттва.
        </p>
      </div>
      <div className='flex flex-col'>
        <Image src={guru} alt='guru' loading="lazy" />
        <h2 className='w-full text-center text-lg font-semibold mt-2'>Четверг - Гуру</h2>
        <p className='text-sm '>«Один лишь Гуру, который достиг Самореализации, может помочь ищущему достичь ее».</p>
        <p className='w-full text-right pr-5 text-sm'>Шива-сутра</p>
      </div>
      <div className='flex flex-col'>
        <Image src={shakti} alt='shakti' loading="lazy" />
        <h2 className='w-full text-center text-lg font-semibold mt-2'>Пятница - Шакти</h2>
        <p className='text-sm '>Богиня, давшая начало всему творению - Божественная Мать всего сущего, аспектами которой являются все Богини или Дэви: Лакшми, Сарасвати и Парвати.</p>
      </div>
      <div className='flex flex-col'>
        <Image src={ganesh} alt='ganesh' loading="lazy" />
        <h2 className='w-full text-center text-lg font-semibold mt-2'>Суббота - Сиддхи</h2>
        <p className='text-sm'>Суббота - день почитание великих святых - махасиддхов. </p>
      </div>

    </Container>
  )
}

export default Lords