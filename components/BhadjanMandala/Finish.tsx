import MyAccordion from '@/components/MyAccordion'

const Finish = () => {
  return (
    <div className='w-full mt-5 md:mt-7 lg:mt-10 flex justify-center'>
      <MyAccordion id='Finish' title='Завершение практики' big className='max-w-xl'>
        <div className="mt-5 lg:mt-10 w-full flex flex-col gap-5">
          <h2 className="mb-2 mt-5 md:mt-7 lg:mt-10 text-xl md:text-2xl w-full text-center">
            Выполняется Гуру-йога с Ом
          </h2>

          <div className="w-full flex flex-wrap items-center justify-center py-5">
            <audio
              controls
              controlsList="nodownload"
              src="/sounds/3OM.mp3"
              className="w-full"
            ></audio>
          </div>
          <h2 className="mb-2 mt-5 md:mt-7 lg:mt-10 text-xl md:text-2xl w-full text-center">
            Выполняется полное простирание в сторону алтаря.
          </h2>
        </div>
      </MyAccordion>
    </div >
  )
}

export default Finish