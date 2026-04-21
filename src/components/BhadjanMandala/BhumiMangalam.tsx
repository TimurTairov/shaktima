import MyAccordion from './MyAccordion'

const BhumiMangalam = () => {
  return (
    <div className='w-full mt-5 md:mt-7 lg:mt-10 flex justify-center'>
      <MyAccordion title='Бхуми мангалам' big className='max-w-xl'>
        <div className="w-full flex flex-col gap-5 font-light">

          <h2 className="mb-2 mt-5 md:mt-7 lg:mt-10 text-xl md:text-2xl w-4xl">
            Молитва о благословении всего мира
          </h2>

          <div className="w-full flex flex-wrap items-center justify-center py-5">
            <audio
              controls
              controlsList="nodownload"
              src="/sounds/BhumiMangalam.mp3"
              className="w-full"
            ></audio>
          </div>

          <div>
            <p>Бхуми мангалам</p>
            <p>Удака мангалам</p>
            <p>Агни мангалам</p>
            <p>Ваю мангалам</p>
            <p>Гагана мангалам</p>
            <p>Сурья мангалам</p>
            <p>Чандра мангалам</p>
            <p>Джагат мангалам</p>
            <p>Джива мангалам</p>
            <p>Деха мангалам</p>
            <p>Мано мангалам</p>
            <p>Атма мангалам</p>
            <p>Сарва мангалам бхавату бхавату бхавату</p>
            <p>Сарва мангалам бхавату бхавату бхавату</p>
            <p>Сарва мангалам бхавату бхавату бхавату</p>
            <p>Oм</p>
          </div>

        </div>
      </MyAccordion>
    </div>
  )
}

export default BhumiMangalam