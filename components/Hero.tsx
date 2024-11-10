import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/Container";
import heroImg from "@/public/hero/hero.webp";

export const Hero = () => {
  return (
    <>
      <Container className="flex flex-wrap justify-between">
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <h1 className="w-full text-center lg:text-start text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-5xl 2xl:text-6xl xl:leading-tight dark:text-white">
              Московский Дхарма центр Шакти Ма
            </h1>
            <p className="w-full text-center lg:text-start py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
              Центр йоги в традиции Пратьякша Адвайта сиддхов
            </p>

            <div className="mt-5 md:mt-10 lg:mt-20 flex flex-col md:items-start space-y-3 sm:space-x-4 sm:space-y-0 items-center justify-center lg:justify-start sm:flex-row">
              <Link
                href="/meditation"

                className="px-8 py-4 text-lg font-medium text-center text-white bg-indigo-500 rounded-md ">
                Начать практиковать
              </Link>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <Image
            src={heroImg}
            className={"object-cover w-full h-auto rounded-md"}
            alt="Hero Illustration"
            placeholder="blur"
          />
        </div>
      </Container>

    </>
  );
}
