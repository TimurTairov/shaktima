import Image from 'next/image'
import Link from 'next/link'
import { Container } from '@/components/Container'
import heroImg from '@/public/hero/hero-2.webp'

export const MeditationSiddhov = () => {
  return (
    <>
      <Container className="flex flex-wrap">
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <h1 className="w-full text-center lg:text-start text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white textColor">
              Медитация сиддхов
            </h1>
            <p className="w-full text-center lg:text-start py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
              От носителей традиции
            </p>

            <div className="mt-5 md:mt-10 lg:mt-20 flex flex-col md:items-start space-y-3 sm:space-x-4 sm:space-y-0 items-center sm:flex-row">
              <Link
                href="https://docs.google.com/forms/d/e/1FAIpQLSdYRN2fEV48od4k59TfYdu4pDsQbpDs17vrLlhaTMHsTgB4zA/viewform"
                className="px-8 py-4 text-lg font-medium text-center text-white bg-red-500 rounded-md "
              >
                Записаться на практику
              </Link>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <Image
            src={heroImg}
            width="855"
            height="638"
            className={'object-cover w-full h-auto rounded-md'}
            alt="Hero Illustration"
            loading="lazy"
            placeholder="blur"
          />
        </div>
      </Container>
    </>
  )
}
