import MyAccordion from './MyAccordion'

const ShriGuruGita = () => {
  return (
    <div className='w-full mt-5 md:mt-7 lg:mt-10 flex justify-center'>
      <MyAccordion id='ShriGuruGita' title='Шри Гуру стотра' big className='max-w-xl'>
        <div className="mt-5 lg:mt-10 w-full flex flex-col gap-5 font-light">
          <div className="w-full flex flex-wrap items-center justify-center py-5">
            <audio
              controls
              controlsList="nodownload"
              src="/sounds/BhadjanMandala/ShriGuruGita.mp3"
              className="w-full"
            ></audio>
          </div>

          <p className="font-medium">

          </p>
          <p className="font-medium">

          </p>
          <p className="text-balance max-w-screen-sm text-sm">

          </p>
          <p className="font-medium">

          </p>
          <p className="text-balance max-w-screen-sm text-sm">

          </p>
          <p className="font-medium">

          </p>
          <p className="text-balance max-w-screen-sm text-sm">

          </p>
          <p className="font-medium">

          </p>
          <p className="text-balance max-w-screen-sm text-sm">

          </p>
          <p className="font-medium">

          </p>
          <p className="text-balance max-w-screen-sm text-sm">

          </p>
          <p className="font-medium">

          </p>

          <p className="text-balance max-w-screen-sm text-sm">

          </p>
          <p className="font-medium">

          </p>
          <p className="text-balance max-w-screen-sm text-sm">

          </p>
        </div>
      </MyAccordion>
    </div >
  )
}

export default ShriGuruGita