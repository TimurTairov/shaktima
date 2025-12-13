import { Container } from "@/components/Container";
//import { BiSolidDonateHeart } from "react-icons/bi";
import { BsFillPostcardHeartFill } from "react-icons/bs";
import { Metadata } from 'next'
import Image from "next/image";
import namaste from "@/public/NicePng_namaskar-logo-png_2447010.png"

export const metadata: Metadata = {
  title: 'Поддержите ШактиМа',
  description: 'Пожертвования для ШактиМа',
}

const page = () => {
  return (
    <Container className="min-h-screen">
      <h1 className="mainTitle">Поддержите нас</h1>

      <div className="flex flex-col items-center justify-center font-light dark:text-gray-300">
        <div className="mt-10">
          <p>Московский Дхарма Центр «Шакти Ма» развивается благодаря подношениям практикующих.</p>
          <p className="mt-5">Подношения направляются на:</p>
          <p> - Аренду зала</p>
          <p> - Организацию семинаров и ретритов</p>
          <p> - Подношения для ашрамов и монахов</p>
          <p className="mt-5">Вы можете поучаствовать и поддержать наш Дхарма центр.</p>
        </div>
        <div className="mx-2 mt-20">
          <div className="flex items-center justify-center text-xl my-2 text-red-500">
            <h2 className="mr-2 font-semibold">На карту T-bank </h2>
            <BsFillPostcardHeartFill />
          </div>
          <p>по номеру телефону  +79163898998 Олана Р.</p>
          <p>Просьба прислать скрин или чек с указанием платежа</p>
          <p>
            <a href="whatsapp://send?phone=+79163898998" target="_blank" rel="noreferrer" className="dark:text-gray-300 text-indigo-700 hover:underline">whapsapp</a>
            <span> или </span>
            <a href='https://t.me/OlanaDevi'
              target='_blank'
              rel='noreferrer'
              className="dark:text-gray-300 text-indigo-700 hover:underline"
            >telegram
            </a>
          </p>

        </div>

        {/* <div className="mx-2 mt-20">
          <div className="flex items-center justify-center text-xl my-2 text-indigo-500">
            <h2 className="mr-2 font-semibold">Через Ю-Money</h2>
            <BiSolidDonateHeart />
          </div>
          <div className="my-7 flex flex-wrap gap-5">
            <a href="https://yoomoney.ru/transfer/quickpay?requestId=353531383834363132315f61336562303936613561373364636235636337643235373135386539356637326462346639373337" target="_blank" rel="noreferrer" className="text-white text-xl bg-indigo-500 border rounded-md border-indigo-500 p-3">Пожертвовать 108 ₽</a>

            <a href="https://yoomoney.ru/transfer/quickpay?requestId=353531383834383839395f38353765653037653764643837653362333462313362643366326139343763316263653961316332" target="_blank" rel="noreferrer" className="text-white text-xl bg-indigo-500 border rounded-md border-indigo-500 p-3">Пожертвовать 540 ₽</a>

            <a href="https://yoomoney.ru/transfer/quickpay?requestId=353531383834393435335f61323333386131383361646565346461316266623032366663383834666162633633643232323037" target="_blank" rel="noreferrer" className="text-white text-xl bg-indigo-500 border rounded-md border-indigo-500 p-3">Пожертвовать 1080 ₽</a>
          </div>

        </div> */}

      </div>

      {/* <div className="w-full flex justify-center mt-20">
        <Image src={namaste} alt="namaste" loading="lazy" className="w-72 xl:w-96 text-red-500" />
      </div> */}

    </Container>
  )
}

export default page