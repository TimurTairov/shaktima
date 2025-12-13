import Link from 'next/link'
import Image from 'next/image';
import { Container } from "@/components/Container";
import { allArticles } from '../../helpers/blog'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Блог ШактиМа',
  description: 'Статьи об Адвайте и йоге, а также отчеты с наших мероприятий'
}

const Blog = () => {
  return (
    <Container className='font-light'>
      <h1 className="textColor text-center text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-medium md:my-2 text-gray-700 dark:text-gray-100">Блог</h1>
      <div className='flex justify-center mt-10 xl:mt-20'>
        <ul className="flex flex-col justify-center gap-5 xl:gap-10">
          {allArticles.map((article) => {
            return <li key={article.id} className='flex gap-2 xl:gap-5'>
              <div className='shrink-0'>
                <Image src={article.img} alt={article.title} className='shrink-0 h-[108px] w-[108px] rounded-lg bg-orange-100' />
              </div>
              <div className='flex flex-col justify-between'>
                <h5 className='text-sm md:text-xl font-normal text-gray-700 dark:text-gray-100'>{article.title}</h5>
                <p className='text-xs md:text-base text-gray-700 dark:text-gray-100'>{article.description}</p>
                <Link href={article.url} className='text-indigo-500 dark:text-indigo-300'>Подробнее ...</Link>
              </div>
            </li>
          })}
        </ul>
      </div>
    </Container>
  )
}

export default Blog