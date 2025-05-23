import { Container } from "@/components/Container";
import { BiSolidDonateHeart } from "react-icons/bi";
import { BsFillPostcardHeartFill } from "react-icons/bs";

const page = () => {
  return (
    <Container className="min-h-screen">
      <h1 className="textColor w-full text-center text-3xl font-semibold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">Поддержите нас</h1>

      <div className="flex flex-col items-center justify-center">
        <div className="mt-10">
          <p>Московский Дхарма Центр «Шакти Ма» - развивается благодаря подношениям практикующих.</p>
          <p className="mt-5">Подношения направляются на:</p>
          <p> - Аренду залов и пространств для мероприятий</p>
          <p> - Организацию семинаров и ретритов</p>
          <p> - Подношения для ашрамов и Монахов</p>
          <p className="mt-5">Вы можете поучаствовать и поддержать Дхарма центр.</p>
        </div>
        <div className="mx-2 mt-20">
          <div className="flex items-center justify-center text-xl my-2 text-indigo-500">
            <h2 className="mr-2 font-semibold">На карту T-bank </h2>
            <BsFillPostcardHeartFill />
          </div>
          <p>по номеру телефону  +79163898998 Олана Р.</p>
          <p>Просьба прислать скрин или чек с указанием платежа</p>
          <p>
            <a href="whatsapp://send?phone=+79163898998" target="_blank" rel="noreferrer" className="text-gray-700 dark:text-gray-300 hover:text-indigo-700 hover:underline">whapsapp</a>
            <span> или </span>
            <a href='https://t.me/OlanaDevi'
              target='_blank'
              rel='noreferrer'
              className="text-gray-700 dark:text-gray-300 hover:text-indigo-700 hover:underline"
            >telegram
            </a>

          </p>

        </div>
        <div className="mx-2 mt-20">
          <div className="flex items-center justify-center text-xl my-2 text-indigo-500">
            <h2 className="mr-2 font-semibold">Через Ю-Money</h2>
            <BiSolidDonateHeart />
          </div>
          <div className="my-7 flex flex-wrap gap-5">
            <a href="https://yoomoney.ru/transfer/quickpay?requestId=353531383834363132315f61336562303936613561373364636235636337643235373135386539356637326462346639373337" target="_blank" rel="noreferrer" className="text-white text-xl bg-indigo-500 border rounded-md border-indigo-500 p-3">Пожертвовать 108 ₽</a>

            <a href="https://yoomoney.ru/transfer/quickpay?requestId=353531383834383839395f38353765653037653764643837653362333462313362643366326139343763316263653961316332" target="_blank" rel="noreferrer" className="text-white text-xl bg-indigo-500 border rounded-md border-indigo-500 p-3">Пожертвовать 540 ₽</a>

            <a href="https://yoomoney.ru/transfer/quickpay?requestId=353531383834393435335f61323333386131383361646565346461316266623032366663383834666162633633643232323037" target="_blank" rel="noreferrer" className="text-white text-xl bg-indigo-500 border rounded-md border-indigo-500 p-3">Пожертвовать 1080 ₽</a>


          </div>

          {/* <iframe
          id="donate108"
          title="108r"
          src="https://yoomoney.ru/quickpay/fundraise/button?billNumber=aejT5wRP1vY.230410&"
          width="330"
          height="50"
          frameBorder="0"
          allowTransparency={true}
          scrolling="no"
          className="bg-white dark:bg-indigo-950"
        />
        <iframe
          title="540r"
          src="https://yoomoney.ru/quickpay/fundraise/button?billNumber=y4lXeQOxU8o.230415&"
          width="330"
          height="50"
          frameBorder="0"
          allowTransparency={true}
          scrolling="no"
          className="bg-white dark:bg-indigo-950"
        />

        <iframe
          title="1080r"
          src="https://yoomoney.ru/quickpay/fundraise/button?billNumber=SGusHwIOHgo.230412&"
          width="330"
          height="50"
          frameBorder="0"
          allowTransparency={true}
          scrolling="no"
          className="bg-white dark:bg-indigo-950"
        /> */}

        </div>
      </div>

    </Container>
  )
}

export default page