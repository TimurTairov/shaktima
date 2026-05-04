import MyAccordion from './MyAccordion'

const GuruYogasOM = () => {
  return (
    <div className='w-full mt-5 md:mt-7 lg:mt-10 flex justify-center'>
      <MyAccordion id='GuruYogasOM' title='Гуру йога с Ом' big className='max-w-xl'>
        <div className="mt-5 lg:mt-10 w-full flex flex-col gap-5 font-light">
          <div className="flex flex-wrap items-center justify-center py-5 w-full">
            <audio
              controls
              controlsList="nodownload"
              src="/sounds/OM.mp3"
              className="w-full"
            ></audio>
          </div>
          <p className="w-4xl"></p>
        </div>
      </MyAccordion>
    </div>
  )
}

export default GuruYogasOM