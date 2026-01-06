import MyAccordion from './MyAccordion'

const DurgaMantra = () => {
  return (
    <div className='w-full mt-5 md:mt-7 lg:mt-10 flex justify-center'>
      <MyAccordion id='DurgaMantra' title='Защитная мантра Дурги' big className='max-w-xl'>
        <div className="mt-5 lg:mt-10 w-full flex flex-col gap-5 font-light">
          <div className="w-full flex flex-wrap items-center justify-center py-5">
            <audio
              controls
              controlsList="nodownload"
              src="/sounds/BhadjanMandala/DurgaMantra.mp3"
              className="w-full"
            ></audio>
          </div>
          <p className="font-medium w-xl">
            OM Shailputri Maiya Raksha Karo<br />
            OM Jag Janani Devi Raksha Karo<br />
            OM Nav Durga Namaha<br />
            OM Jag Janani Namaha ||1||
          </p>

          <p className="font-medium">
            OM Brahmacharini Maiya Raksha Karo<br />
            OM Bhavatarani Devi Raksha Karo<br />
            OM Nav Durga Namaha<br />
            OM Jag Janani Namaha ||2||
          </p>

          <p className="font-medium">
            OM Chandraghanta Chandi Raksha Karo<br />
            OM Bhayaharini Maiya Raksha Karo<br />
            OM Nav Durga Namaha<br />
            OM Jag Janani Namaha ||3||
          </p>

          <p className="font-medium">
            OM Kushmanda Tum Hi Raksha Karo<br />
            OM Shakthirupa Maiya Raksha Karo<br />
            OM Nav Durga Namaha<br />
            OM Jag Janani Namaha ||4||
          </p>

          <p className="font-medium">
            OM Skanda Mata Maiya Raksha Karo<br />
            OM Jagadamba Janani Raksha Karo<br />
            OM Nav Durga Namaha<br />
            OM Jag Janani Namaha ||5||
          </p>

          <p className="font-medium">
            OM Katyayani Maiya Raksha Karo<br />
            OM Papanasini Ambe Raksha Karo<br />
            OM Nav Durga Namaha<br />
            OM Jag Janani Namaha ||6||
          </p>

          <p className="font-medium">
            OM Kalaratri Kali Raksha Karo<br />
            OM Sukhadati Maiya Raksha Karo<br />
            OM Nav Durga Namaha<br />
            OM Jag Janani Namaha ||7||
          </p>

          <p className="font-medium">
            OM Mahagauri Maiya Raksha Karo<br />
            OM Bhaktidati Raksha Karo<br />
            OM Nav Durga Namaha<br />
            OM Jag Janani Namaha ||8||
          </p>

          <p className="font-medium">
            OM Siddhidatri Maiya Raksha Karo<br />
            OM Nav Durga Devi Raksha Karo<br />
            OM Nav Durga Namaha<br />
            OM Jag Janani Namaha ||9||
          </p>

        </div>
      </MyAccordion>
    </div>
  )
}

export default DurgaMantra