import MyAccordion from './MyAccordion'

const ShriGuruStotra = () => {
  return (
    <div className='w-full mt-5 md:mt-7 lg:mt-10 flex justify-center'>
      <MyAccordion id='ShriGuruStotra' title='Шри Гуру стотра' big className='max-w-xl'>
        <div className="mt-5 lg:mt-10 w-full flex flex-col gap-5 font-light">
          <div className="w-full flex flex-wrap items-center justify-center py-5">
            <audio
              controls
              controlsList="nodownload"
              src="/sounds/BhadjanMandala/ShriGuruStotra.mp3"
              className="w-full"
            ></audio>
          </div>

          <p className="font-medium">
            ОМ ШРИ ГУРАВЕ НАМАХА
          </p>
          <p className="font-medium">
            АКХАНДА МАНДАЛА АКААРАМ<br />
            ВЙААПТАМ ЙЕНА ЧАРА АЧАРАМ<br />
            ТАТ ПАДАМ ДАРШИТАМ ЙЕНА<br />
            ТАСМАИ ШРИ ГУРАВЕ НАМАХА
          </p>
          <p className="text-balance max-w-screen-sm text-sm">
            Бесконечному, всепронизывающему, Тому, кто поддерживает
            все движущееся и неподвижное и являет нам высшую обитель.
            Тому, чьи ступни я созерцаю - тому Шри Гуру мой поклон.
          </p>
          <p className="font-medium">
            АДЖНЙААНА ТИМИРА АНДХАСЙА<br />
            ДЖНЙААНА АНДЖАНА ШАЛААКАЙА<br />
            ЧАКШУР УНМИИЛИТАМ ЙЕНАМ<br />
            ТАСМАИ ШРИ ГУРАВЕ НАМАХА
          </p>
          <p className="text-balance max-w-screen-sm text-sm">
            Я был рожден во тьме невежества, и мой Гуру открыл мне
            глаза, рассеяв тьму факелом знания. Поэтому в почтении
            я склоняюсь перед Шри Гуру.
          </p>
          <p className="font-medium">
            ДХЬЯНА МУЛЯМ ГУРОР МУРТИ<br />
            ПУДЖА МУЛЯМ ГУРО ПАДАМ<br />
            МАНТРА МУЛЯМ ГУРОР ВАКЬЯМ<br />
            МОКША МУЛЯМ ГУРО КРИПА
          </p>
          <p className="text-balance max-w-screen-sm text-sm">
            Образ Гуру – основа медитации, стопы Гуру – основа служения,
            слово Гуру – основа всех мантр, милость Гуру – основа спасения.
          </p>
          <p className="font-medium">
            ДЖНААНА ШАКТИ САМААРУУДХАС<br />
            ТАТТВА МААЛАА ВИБХУУШИТА<br />
            БХУКТИ МУКТИ ПРАДААТАА ЧА<br />
            ТАСМАИ ШРИ ГУРАВЕ НАМАХА
          </p>
          <p className="text-balance max-w-screen-sm text-sm">
            Тому, Кто является воплощением Силы Знания,
            Кто украшен гирляндой из таттв,
            Кто дарует и мирское благополучие и освобождение,
            Такому Гуру я поклоняюсь!
          </p>
          <p className="font-medium">
            НАМОСТУ ГУРАВЕ ТАСМАЙ<br />
            ИШТАДЕВА СВАРУПИНИ<br />
            ЙАСЙА ВАМ АМРТАМ ХАНТИ<br />
            ВИШАМ САМСАРА САМДЖНИТАМ
          </p>
          <p className="text-balance max-w-screen-sm text-sm">
            Приветствия Гуру, кто есть истинная форма избранного
            божества! Приветствия Гуру, дарующему нектар
            божественного и избавляющему от яда сансары.
          </p>
          <p className="font-medium">
            НА ГУРОР АДХИКАМ ТАТТВАМ<br />
            НА ГУРОР АДХИКАМ ТАПАХА<br />
            ТАТТВА ДЖНЙААНААТ ПАРАМ НААСТИ<br />
            ТАСМАИ ШРИ ГУРАВЕ НАМАХА
          </p>

          <p className="text-balance max-w-screen-sm text-sm">
            Нет истины выше, чем Гуру,
            нет аскезы лучше, чем служение Гуру,
            не существует ничего выше, чем знание принципа Гуру.
            Такому Гуру я поклоняюсь!
          </p>
          <p className="font-medium">
            ГУРУР БРАХМА ГУРУР ВИШНУ<br />
            ГУРУР ДЕВО МАХЕШВАРА<br />
            ГУРУР СААКШАТ ПАРАМ БРАХМА<br />
            ТАСМАИ ШРИ ГУРАВЕ НАМАХА
          </p>
          <p className="text-balance max-w-screen-sm text-sm">
            Гуру - это Брахма, Гуру – это Вишну, Гуру - это Господь
            Вседержитель. Гуру – Высший Свидетель.
            Такому Гуру поклоняюсь я.
          </p>
        </div>
      </MyAccordion>
    </div >
  )
}

export default ShriGuruStotra