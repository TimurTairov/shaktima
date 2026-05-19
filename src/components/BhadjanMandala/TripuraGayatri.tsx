import MyAccordion from './MyAccordion'

const TripuraGayatri = () => {
  return (
    <div className='w-full mt-5 md:mt-7 lg:mt-10 flex justify-center'>
      <MyAccordion id='TripuraGayatri ' title='Трипура Гаятри' big className='max-w-xl'>
        <div className="mt-5 lg:mt-10 w-full flex flex-col gap-5 font-light">
          <div className="w-full flex flex-wrap items-center justify-center py-5">
            <audio
              controls
              controlsList="nodownload"
              src="\sounds\Gayatri\TripuraGayatri.mp3"
              className="w-full"
            ></audio>
          </div>
          <p className="font-medium w-xl">
            ом айм трипурадеви видмахе<br />
            клим камешвари ча дхимахи<br />
            таннох саух клинне прачодайт
            <br />
            (3 раза)
          </p>
          <p className="text-balance max-w-screen-sm text-sm">
            Ом! Богиню Трипурасундари да постигнем! Медитируем на Владычицу над желаниями! Да направит и вдохновит нас Богиня!
          </p>

        </div>
      </MyAccordion>
    </div>
  )
}

export default TripuraGayatri