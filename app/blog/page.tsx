import Link from 'next/link'
import Image from 'next/image';
import { Container } from "@/components/Container";
import { allArticles } from './index'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Блог',
  description: 'Здесь размещены статьи об Адвайте и йоге'
}

const Blog = () => {
  return (
    <Container>
      <h1 className="w-full text-center text-2xl font-semibold my-2">Блог</h1>
      <div className='flex justify-center mt-10 xl:mt-20'>
        <ul className="flex flex-col justify-center gap-5 xl:gap-10">
          {allArticles.map((article) => {
            return <li key={article.id} className='flex gap-2 xl:gap-5'>
              <div className=' shrink-0'>
                <Image src={article.img} alt={article.title} className='w-full h-auto rounded-lg' />
              </div>
              <div className='flex flex-col justify-between'>
                <h5 className='text-xl font-medium'>{article.title}</h5>
                <p>{article.description}</p>
                <Link href={article.url} className='text-indigo-600 dark:text-indigo-400 hover:underline'>Подробнее ...</Link>
              </div>
            </li>
          })}
        </ul>
      </div>
    </Container>
  )
}

export default Blog