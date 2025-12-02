import Image from 'next/image'
import Link from 'next/link'
import { Container } from '@/components/Container'
import heroImg from '@/public/hero/hero-3.webp'

const BhadjanMandala = () => {
  return (
    <Container className="flex flex-wrap justify-between">
      <div className="flex items-center justify-center w-full lg:w-5/12">
        <div className="pb-10">
          <h1 className="mainTitle">Бхаджан Мандала</h1>
          <p className="w-full text-center lg:text-start py-5 text-lg leading-normal font-light text-balance text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
            Открыться безусловной любви через интеграцию с бхаджанами и песнями
            преданности и пережить радость от призывания милости святых и
            божеств линии передачи
          </p>

          <div className="mt-5 md:mt-10 lg:mt-20 flex flex-col justify-center lg:justify-start space-y-3 sm:space-x-4 sm:space-y-0 sm:flex-row">
            <Link
              href=""
              className="px-8 py-4 text-lg font-medium text-center text-white dark:text-white bg-red-600 dark:bg-red-500 rounded-md "
            >
              Записаться на практику
            </Link>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center w-full lg:w-6/12">
        <Image
          src={heroImg}
          width="855"
          height="638"
          className="object-cover w-full h-auto rounded-md shadow-md"
          alt="Hero Illustration"
          loading="lazy"
          placeholder="blur"
        />
      </div>
    </Container>
  )
}

export default BhadjanMandala
