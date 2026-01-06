import MyAccordion from './MyAccordion'

const ShantiMantra = () => {
  return (
    <div className='w-full mt-5 md:mt-7 lg:mt-10 flex justify-center'>
      <MyAccordion id='ShantiMantra' title='Шанти Мантра' big className='max-w-xl'>
        <div className="mt-5 lg:mt-10 w-full flex flex-col gap-5 font-light">
          <div className="w-full flex flex-wrap items-center justify-center py-5">
            <audio
              controls
              controlsList="nodownload"
              src="/sounds/BhadjanMandala/ShantiMantra.mp3"
              className="w-full"
            ></audio>
          </div>
          <p className="font-medium">
            ОМ! САРВЕШАМ СВАСТИР БХАВАТУ<br />
            САРВЕШАМ ШАНТИР БХАВАТУ<br />
            САРВЕШАМ ПУРНАМ БХАВАТУ<br />
            САРВЕШАМ МАНГАЛАМ БХАВАТУ
          </p>
          <p className="text-balance max-w-screen-sm text-sm">
            Ом! Пусть благо будет у всех,
            Пусть мир будет у всех,
            Пусть удовлетворение будет у всех,
            Пусть процветание будет у всех.
          </p>
          <p className="font-medium">
            ОМ! САРВЕ БХАВАНТУ СУКХИНАХА<br />
            САРВЕ САНТУ НИРАМАЙАХА<br />
            САРВЕ БХАДРАНИ ПАШЬЯНТУ<br />
            МА КАШЧИД ДУКХА БХАГ БХАВЕТ
          </p>
          <p className="text-balance max-w-screen-sm text-sm">
            Ом! Пусть все будут счастливы,
            Пусть все будут здоровы,
            Пусть все будут уважать друг друга,
            Пусть никто не будет страдать.
          </p>
        </div>
      </MyAccordion>
    </div >
  )
}

export default ShantiMantra