import MyAccordion from './MyAccordion'

const DurgaGayatri = () => {
  return (
    <div className='w-full mt-5 md:mt-7 lg:mt-10 flex justify-center'>
      <MyAccordion id='DurgaGayatri' title='Дурга Гаятри' big className='max-w-xl'>
        <div className="mt-5 lg:mt-10 w-full flex flex-col gap-5 font-light">
          <div className="w-full flex flex-wrap items-center justify-center py-5">
            <audio
              controls
              controlsList="nodownload"
              src="/sounds/BhadjanMandala/DurgaGayatri.mp3"
              className="w-full"
            ></audio>
          </div>
          <p className="font-medium w-xl">
            Om Girijayai Vidmahe<br />
            Shiva Priyayai Dhimahi<br />
            Tanno Durga Prachodayat<br />
            (3 раза)
          </p>

        </div>
      </MyAccordion>
    </div>
  )
}

export default DurgaGayatri