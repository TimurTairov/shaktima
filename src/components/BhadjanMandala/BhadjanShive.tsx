import MyAccordion from './MyAccordion'

const BhadjanShive = () => {
  return (
    <div className='w-full mt-5 md:mt-7 lg:mt-10 flex justify-center'>
      <MyAccordion title='Бхаджан Шиве' big className='max-w-xl'>
        <div className="w-full flex flex-col gap-5 font-light">

          <h2 className="mb-2 mt-5 md:mt-7 lg:mt-10 text-xl md:text-2xl w-4xl">
            Шива Самба Сада (или другой)
          </h2>

          <div className="w-full flex flex-wrap items-center justify-center py-5">
            <audio
              controls
              controlsList="nodownload"
              src="/sounds/Bhadjans/Shiva samba sada.mp3"
              className="w-full"
            ></audio>
          </div>

          <p className="font-medium">
            Шива самба садашива ом<br />
            Шамбхо шанкара шива ом<br />
            Шива ом Шива ом
          </p>


        </div>
      </MyAccordion>
    </div>
  )
}

export default BhadjanShive