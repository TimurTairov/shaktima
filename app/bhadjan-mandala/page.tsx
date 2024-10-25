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

const page = () => {
  return (
    <Container>
      <BhadjanMandala />
      <BhadjanMandala2 />
      <BM />
      <Lords />

      <SectionTitle
        preTitle="Бхаджан Манадал"
        title="Детали мероприятия"
      >
        <div className="flex justify-center">
          <div className="max-w-6xl flex flex-col lg:flex-row items-center lg:items-start gap-5">
            <div className="flex flex-col items-start justify-start">
              <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5 xl:gap-10 lg:grid-cols-2">

                <div className="flex items-start gap-5">
                  <IoCalendarNumberOutline className=" shrink-0 w-10 h-10 text-indigo-500" />
                  <div className="flex flex-col items-start gap-3">
                    <p className="text-2xl text-indigo-500  font-semibold">Когда</p>
                    <p className="text-left">Каждый вечер с 19:00 по 21:00, кроме воскресения. </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <LuCalendarHeart className=" shrink-0 w-10 h-10 text-indigo-500 " />
                  <div className="flex flex-col items-start gap-3">
                    <p className="text-2xl text-indigo-500  font-semibold">Формат</p>
                    <p className="text-left">
                      Практика длится примерно 1.5 -2 часа.
                      Форма одежды - белая (алтарная).
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <IoLocation className=" shrink-0 w-10 h-10 text-indigo-500 " />
                  <div className="flex flex-col items-start gap-3">
                    <p className="text-2xl text-indigo-500  font-semibold">Где</p>
                    <p className="text-left">
                      Пространство &quot;Studio 108&quot; <br />
                      м. Тургеневская/Чистые Пруды<br />
                      Ул. Жуковского дом 7
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <BiDonateHeart className=" shrink-0 w-10 h-10 text-indigo-500" />
                  <div className="flex flex-col items-start gap-3">
                    <p className="text-2xl text-indigo-500  font-semibold">Стоимость</p>
                    <p className="text-left">Объем свободного пожертвования определяете самостоятельно </p>
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