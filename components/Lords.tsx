import Image from 'next/image'
import { Container } from '@/components/Container'
import shiva from "@/public/img/Lords/1.png"
import datta from "@/public/img/Lords/2.png"
import vishnu from "@/public/img/Lords/3.png"
import guru from "@/public/img/Lords/4.png"
import shakti from "@/public/img/Lords/5.png"
import ganesh from "@/public/img/Lords/6.png"

const Lords = () => {
  return (
    <Container className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-10 lg:py-20'>
      <div className='flex flex-col '>
        <Image src={shiva} alt='shiva' />
        <h2 className='w-full text-center text-lg font-semibold mt-2'>Понедельник - Шива</h2>
        <p>Шива олицетворяет собой космическое сознание, статичное мужское начало вселенной (Пуруша). Наряду с Брахмой и Вишну является одним из богов Тримурти. Бог Разрушитель Вселенной. Также Шива является основателем Йоги.</p>
      </div>
      <div className='flex flex-col'>
        <Image src={datta} alt='datta' />
        <h2 className='w-full text-center text-lg font-semibold mt-2'>Вторник - Даттатрея</h2>
        <p>Даттатрея — ишта-девата, избранное божество нашей традиции. Он — учитель всех учителей, наставник всех йогов и сиддхов. Он олицетворяет принцип воззрения адвайты и самоосвобожденного поведения — игры в облике авадхуты.</p>
      </div>
      <div className='flex flex-col'>
        <Image src={vishnu} alt='vishnu' />
        <h2 className='w-full text-center text-lg font-semibold mt-2'>Среда - Вишну</h2>
        <p>Бог-хранитель вселенной, один из Тримурти, божественной Троицы богов. Он олицетворяет энергию поддержания Абсолюта (стхити) и гуну саттва.
        </p>
      </div>
      <div className='flex flex-col'>
        <Image src={guru} alt='guru' />
        <h2 className='w-full text-center text-lg font-semibold mt-2'>Четверг - Гуру</h2>
        <p>«Один лишь Гуру, который достиг Самореализации, может помочь ищущему достичь ее».</p>
        <p className='w-full text-right pr-5 lg:pr-10'>Шива-сутра</p>
      </div>
      <div className='flex flex-col'>
        <Image src={shakti} alt='shakti' />
        <h2 className='w-full text-center text-lg font-semibold mt-2'>Пятница - Шакти</h2>
        <p>Богиня, давшая начало всему творению - Божественная Мать всего сущего, аспектами которой являются все Богини или Дэви: Лакшми, Сарасвати и Парвати.</p>
      </div>
      <div className='flex flex-col'>
        <Image src={ganesh} alt='ganesh' />
        <h2 className='w-full text-center text-lg font-semibold mt-2'>Суббота - Сиддхи</h2>
        <p>Почитание Великих Святых - Махасиддхов. </p>
      </div>

    </Container>
  )
}

export default Lords