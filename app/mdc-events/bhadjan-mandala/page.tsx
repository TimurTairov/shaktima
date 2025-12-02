import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";
import { IoCalendarNumberOutline } from "react-icons/io5";
import { LuCalendarHeart } from "react-icons/lu";
import { IoLocation } from "react-icons/io5";
import { BiDonateHeart } from "react-icons/bi";
import BhadjanMandala from "@/components/BhadjanMandala"
import BhadjanMandala2 from "@/components/BhadjanMandala2"
import BM from "@/components/BM"
import Lords from "@/components/Lords"
import { FiExternalLink } from "react-icons/fi";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Бхаджан Мандала",
  description: "Бхаджан Мандала это мистерия звука, коллективная практика призывания благословений Древа Прибежища",
};


const page = () => {
  return (
    <Container>
      <BhadjanMandala />
      <BhadjanMandala2 />
      <BM />
      <Lords />

      {/* <Link href="/altar" className="py-10 inline-block w-full text-center text-indigo-500">Виртуальный алтарь</Link> */}

      <SectionTitle
        preTitle="Бхаджан Манадала"
        title="Детали мероприятия"
      >
        <div className="flex justify-center">
          <div className="max-w-6xl flex flex-col lg:flex-row items-center lg:items-start gap-5">
            <div className="flex flex-col items-start justify-start">
              <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5 xl:gap-10 lg:grid-cols-2">

                <div className="flex items-start gap-5">
                  <IoCalendarNumberOutline className=" shrink-0 w-10 h-10 text-red-500" />
                  <div className="flex flex-col items-start gap-3">
                    <p className="text-2xl text-red-500  font-semibold">Когда</p>
                    <div className="flex gap-1 items-center">В соответсвии с расписанием
                      <Link href="/raspisanie"
                        className="ml-1 text-left text-indigo-500">
                        <FiExternalLink />
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <LuCalendarHeart className=" shrink-0 w-10 h-10 text-red-500 " />
                  <div className="flex flex-col items-start gap-3">
                    <p className="text-2xl text-red-500  font-semibold">Формат</p>
                    <p className="text-left">
                      Практика длится примерно 1.5 -2 часа.
                      Форма одежды - белая (алтарная).
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <IoLocation className=" shrink-0 w-10 h-10 text-red-500 " />
                  <div className="flex flex-col items-start gap-3">
                    <p className="text-2xl text-red-500  font-semibold">Где</p>
                    <div className="flex gap-1 items-center">
                      МДЦ ШактиМА
                      <Link href="/contacts#address"
                        className="ml-1 text-left text-indigo-500">
                        <FiExternalLink />
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <BiDonateHeart className=" shrink-0 w-10 h-10 text-red-500" />
                  <div className="flex flex-col items-start gap-3">
                    <p className="text-2xl text-red-500  font-semibold">Подношение</p>
                    <p className="text-left">Cвободное пожертвование </p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </SectionTitle>

    </Container>
  )
}

export default page