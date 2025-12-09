import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/Container";
import heroImg from "@/public/hero/hero.webp";
import localFont from "next/font/local"


const jaipur = localFont({
  src: "../fonts/jaipur.ttf",
  variable: "--font-jaipur",
});

export const Hero = () => {
  return (
    <Container className="flex flex-wrap justify-between">
      <div className="flex items-center justify-center w-full lg:w-1/2">
        <div className="h-full max-w-2xl mb-8 flex flex-col justify-around">
          <h1 className={`textColor w-full text-center lg:text-start text-3xl leading-snug tracking-tight text-red-500  lg:text-4xl lg:leading-tight xl:text-5xl 2xl:text-6xl xl:leading-tight ${jaipur.className}`}>
            Московский Дхарма центр ШактиМа
          </h1>

          <p className="text-center lg:text-start text-lg leading-normal font-light text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
            Центр йоги в традиции Пратьякша Адвайта сиддхов
          </p>

          <div className="mt-5 md:mt-10 lg:mt-20 flex flex-col md:items-start space-y-3 sm:space-x-4 sm:space-y-0 items-center justify-center lg:justify-start sm:flex-row">
            <Link
              href="/raspisanie"
              className="px-8 py-4 text-lg font-medium text-center text-white dark:text-white bg-red-500 rounded-md border border-white dark:border-slate-800 hover:bg-gray-50 hover:text-red-500 hover:border-red-500">
              Начать практику
            </Link>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center w-full lg:w-1/2">
        <Image
          src={heroImg}
          className={"object-cover w-full h-auto rounded-md shadow-lg"}
          alt="Hero Illustration"
          placeholder="blur"
          loading="eager"
        />
      </div>
    </Container>

  );
}
