import MyAccordion from './MyAccordion'

const DjayaLalite = () => {
  return (
    <div className='w-full mt-5 md:mt-7 lg:mt-10 flex justify-center'>
      <MyAccordion id='DjayaLalite' title='Джая Лалите' big className='max-w-xl'>
        <div className="mt-5 lg:mt-10 w-full flex flex-col gap-5 font-light">
          <div className="w-full flex flex-wrap items-center justify-center py-5">
            <audio
              controls
              controlsList="nodownload"
              src="/sounds/BhadjanMandala/DjayaLalite.mp3"
              className="w-full"
            ></audio>
          </div>

          <p className="font-medium w-xl">
            хе лалите джайа джайа лалите<br />
            джайа джайа мангала шубха лалите
          </p>
          <p className="text-balance max-w-screen-sm text-sm">
          </p>

          <p className="font-medium">
            мангала-кАрини мангала-рēпини<br />
            джайа джайа мангала шубха лалите
          </p>
          <p className="text-balance max-w-screen-sm text-sm">
          </p>

          <p className="font-medium">
            шандира-дхАрини шанката-харини<br />
            джайа джайа мангала шубха лалите
          </p>
          <p className="text-balance max-w-screen-sm text-sm">
          </p>

          <p className="font-medium">
            манда-хАсини мАйА-рупини<br />
            джайа джайа мангала шубха лалите
          </p>
          <p className="text-balance max-w-screen-sm text-sm">
          </p>

          <p className="font-medium">
            шрипура-вАсини шричакра-рупини<br />
            джайа джайа мангала шубха лалите
          </p>
          <p className="text-balance max-w-screen-sm text-sm">
          </p>

        </div>
      </MyAccordion>
    </div>
  )
}

export default DjayaLalite