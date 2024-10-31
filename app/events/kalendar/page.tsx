import { Container } from "@/components/Container";

const page = () => {

  const kalendar = [
    "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресение",
    "-", "-", "-", "-", "#", "Медитация сиддхов онлайн", "#",
    "-", "-", "-", "-", "1", "2", "3",
    "#", "#", "Медитация сиддхов онлайн", "#", "#", "Медитация сиддхов онлайн", "#",
    "4", "5", "6", "7", "8", "9", "10",
    "#", "#", "Медитация сиддхов онлайн", "#", "#", "Медитация сиддхов онлайн", "#",
    "11", "12", "13", "14", "15", "16", "17",
    "#", "#", "Медитация сиддхов онлайн", "#", "#", "Медитация сиддхов онлайн", "#",
    "18", "19", "20", "21", "22", "23", "24",
    "#", "#", "Медитация сиддхов онлайн", "#", "#", "Медитация сиддхов онлайн", "-",
    "25", "26", "27", "28", "29", "30", "-",
  ]
  const kalendar2 = [
    "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресение",
    "-", "-", "-", "-", "-", "Медитация сиддхов онлайн", "-",
    "-", "-", "-", "-", "1", "2", "3",
    "-", "-", "Медитация сиддхов онлайн", "-", "-", "Медитация сиддхов онлайн", "-",
    "4", "5", "6", "7", "8", "9", "10",
    "-", "-", "Медитация сиддхов онлайн", "-", "-", "Медитация сиддхов онлайн", "-",
    "11", "12", "13", "14", "15", "16", "17",
    "-", "-", "Медитация сиддхов онлайн", "-", "-", "Медитация сиддхов онлайн", "-",
    "18", "19", "20", "21", "22", "23", "24",
    "-", "-", "Медитация сиддхов онлайн", "-", "-", "Медитация сиддхов онлайн", "-",
    "25", "26", "27", "28", "29", "30", "-",
  ]

  const kalendarSm = [
    "Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс",
    "-", "-", "-", "-", "#", "Медитация сиддхов онлайн", "#",
    "-", "-", "-", "-", "1", "2", "3",
    "#", "#", "Медитация сиддхов онлайн", "#", "#", "Медитация сиддхов онлайн", "#",
    "4", "5", "6", "7", "8", "9", "10",
    "#", "#", "Медитация сиддхов онлайн", "#", "#", "Медитация сиддхов онлайн", "#",
    "11", "12", "13", "14", "15", "16", "17",
    "#", "#", "Медитация сиддхов онлайн", "#", "#", "Медитация сиддхов онлайн", "#",
    "18", "19", "20", "21", "22", "23", "24",
    "#", "#", "Медитация сиддхов онлайн", "#", "#", "Медитация сиддхов онлайн", "-",
    "25", "26", "27", "28", "29", "30", "-",
  ]


  return (
    <Container className="min-h-screen">
      <h1 className="w-full text-center text-3xl font-semibold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">Календарь</h1>

      <p className="mt-10 text-lg lg:text-xl ">Ноябрь</p>
      <div className="flex justify-center">
        <div className="w-full grid grid-cols-7 gap-1 rounded-md justify-around ">
          {/* ДНИ НЕДЕЛИ */}
          <div className="text-center text-xs bg-red-300 p-1 rounded-lg font-semibold">
            <p className="hidden md:block">Понедельник</p>
            <p className="block md:hidden">Пн</p>
          </div>
          <div className="text-center text-xs bg-red-300 p-1 rounded-lg font-semibold">
            <p className="hidden md:block">Вторник</p>
            <p className="block md:hidden">Вт</p>
          </div>
          <div className="text-center text-xs bg-red-300 p-1 rounded-lg font-semibold">
            <p className="hidden md:block">Среда</p>
            <p className="block md:hidden">Ср</p>
          </div>
          <div className="text-center text-xs bg-red-300 p-1 rounded-lg font-semibold">
            <p className="hidden md:block">Четверг</p>
            <p className="block md:hidden">Чт</p>
          </div>
          <div className="text-center text-xs bg-red-300 p-1 rounded-lg font-semibold">
            <p className="hidden md:block">Пятница</p>
            <p className="block md:hidden">Пт</p>
          </div>
          <div className="text-center text-xs bg-red-300 p-1 rounded-lg font-semibold">
            <p className="hidden md:block">Суббота</p>
            <p className="block md:hidden">Сб</p>
          </div>
          <div className="text-center text-xs bg-red-300 p-1 rounded-lg font-semibold">
            <p className="hidden md:block">Воскресение</p>
            <p className="block md:hidden">Вс</p>
          </div>

          {/* НЕДЕЛЯ 1 */}
          <div className="text-center text-xs bg-red-50 p-1 rounded-lg">
            <p className="w-full text-end font-bold mb-2"></p>
            <p></p>
          </div>
          <div className="text-center text-xs bg-red-50 p-1 rounded-lg">
            <p className="w-full text-end font-bold mb-2"></p>
            <p></p>
          </div>
          <div className="text-center text-xs bg-red-50 p-1 rounded-lg">
            <p className="w-full text-end font-bold mb-2"></p>
            <p></p>
          </div>
          <div className="text-center text-xs bg-red-50 p-1 rounded-lg">
            <p className="w-full text-end font-bold mb-2"></p>
            <p></p>
          </div>
          <div className="text-center text-xs bg-red-100 p-1 rounded-lg">
            <p className="w-full text-end font-bold mb-2">1</p>
            <p></p>
          </div>
          <div className="text-center text-xs bg-red-100 p-1 rounded-lg">
            <p className="w-full text-end font-bold mb-2">2</p>
            <p className="text-indigo-800 bg-indigo-200 rounded-md verySmallText md:text-xs lg:text-sm">Медитация сиддхов онлайн</p>
          </div>
          <div className="text-center text-xs bg-red-100 p-1 rounded-lg">
            <p className="w-full text-end font-bold mb-2">3</p>
            <p></p>
          </div>

          {/* НЕДЕЛЯ 2 */}
          <div className="text-center text-xs bg-red-100 p-1 rounded-lg">
            <p className="w-full text-end font-bold">4</p>
            <p></p>
          </div>
          <div className="text-center text-xs bg-red-100 p-1 rounded-lg">
            <p className="w-full text-end font-bold mb-2">5</p>
            <p></p>
          </div>
          <div className="text-center text-xs bg-red-100 p-1 rounded-lg">
            <p className="w-full text-end font-bold mb-2">6</p>
            <p className="text-indigo-800 bg-indigo-200 rounded-md verySmallText md:text-xs lg:text-sm">Медитация сиддхов онлайн</p>
          </div>
          <div className="text-center text-xs bg-red-100 p-1 rounded-lg">
            <p className="w-full text-end font-bold mb-2">7</p>
            <p></p>
          </div>
          <div className="text-center text-xs bg-red-100 p-1 rounded-lg">
            <p className="w-full text-end font-bold mb-2">8</p>
            <p></p>
          </div>
          <div className="text-center text-xs bg-red-100 p-1 rounded-lg">
            <p className="w-full text-end font-bold mb-2">9</p>
            <p className="text-indigo-800 bg-indigo-200 rounded-md verySmallText md:text-xs lg:text-sm">Медитация сиддхов онлайн</p>
          </div>
          <div className="text-center text-xs bg-red-100 p-1 rounded-lg">
            <p className="w-full text-end font-bold mb-2">10</p>
            <p></p>
          </div>

          {/* НЕДЕЛЯ 3 */}
          <div className="text-center text-xs bg-red-100 p-1 rounded-lg">
            <p className="w-full text-end font-bold mb-2">11</p>
            <p></p>
          </div>
          <div className="text-center text-xs bg-red-100 p-1 rounded-lg">
            <p className="w-full text-end font-bold mb-2">12</p>
            <p></p>
          </div>
          <div className="text-center text-xs bg-red-100 p-1 rounded-lg">
            <p className="w-full text-end font-bold mb-2">13</p>
            <p className="text-indigo-800 bg-indigo-200 rounded-md verySmallText md:text-xs lg:text-sm">Медитация сиддхов онлайн</p>
          </div>
          <div className="text-center text-xs bg-red-100 p-1 rounded-lg">
            <p className="w-full text-end font-bold mb-2">14</p>
            <p></p>
          </div>
          <div className="text-center text-xs bg-red-100 p-1 rounded-lg">
            <p className="w-full text-end font-bold mb-2">15</p>
            <p></p>
          </div>
          <div className="text-center text-xs bg-red-100 p-1 rounded-lg">
            <p className="w-full text-end font-bold mb-2">16</p>
            <p className="text-indigo-800 bg-indigo-200 rounded-md verySmallText md:text-xs lg:text-sm">Медитация сиддхов онлайн</p>
          </div>
          <div className="text-center text-xs bg-red-100 p-1 rounded-lg">
            <p className="w-full text-end font-bold mb-2">17</p>
            <p></p>
          </div>

          {/* НЕДЕЛЯ 4 */}
          <div className="text-center text-xs bg-red-100 p-1 rounded-lg">
            <p className="w-full text-end font-bold mb-2">18</p>
            <p></p>
          </div>
          <div className="text-center text-xs bg-red-100 p-1 rounded-lg">
            <p className="w-full text-end font-bold mb-2">19</p>
            <p></p>
          </div>
          <div className="text-center text-xs bg-red-100 p-1 rounded-lg">
            <p className="w-full text-end font-bold mb-2">20</p>
            <p className="text-indigo-800 bg-indigo-200 rounded-md verySmallText md:text-xs lg:text-sm">Медитация сиддхов онлайн</p>
          </div>
          <div className="text-center text-xs bg-red-100 p-1 rounded-lg">
            <p className="w-full text-end font-bold mb-2">21</p>
            <p></p>
          </div>
          <div className="text-center text-xs bg-red-100 p-1 rounded-lg">
            <p className="w-full text-end font-bold mb-2">22</p>
            <p></p>
          </div>
          <div className="text-center text-xs bg-red-100 p-1 rounded-lg">
            <p className="w-full text-end font-bold mb-2">23</p>
            <p className="text-indigo-800 bg-indigo-200 rounded-md verySmallText md:text-xs lg:text-sm">Медитация сиддхов онлайн</p>
          </div>
          <div className="text-center text-xs bg-red-100 p-1 rounded-lg">
            <p className="w-full text-end font-bold mb-2">24</p>
            <p></p>
          </div>

          {/* НЕДЕЛЯ 5 */}
          <div className="text-center text-xs bg-red-100 p-1 rounded-lg">
            <p className="w-full text-end font-bold mb-2">25</p>
            <p></p>
          </div>
          <div className="text-center text-xs bg-red-100 p-1 rounded-lg">
            <p className="w-full text-end font-bold mb-2">26</p>
            <p></p>
          </div>
          <div className="text-center text-xs bg-red-100 p-1 rounded-lg">
            <p className="w-full text-end font-bold mb-2">27</p>
            <p className="text-indigo-800 bg-indigo-200 rounded-md verySmallText md:text-xs lg:text-sm">Медитация сиддхов онлайн</p>
          </div>
          <div className="text-center text-xs bg-red-100 p-1 rounded-lg">
            <p className="w-full text-end font-bold mb-2">28</p>
            <p></p>
          </div>
          <div className="text-center text-xs bg-red-100 p-1 rounded-lg">
            <p className="w-full text-end font-bold mb-2">29</p>
            <p></p>
          </div>
          <div className="text-center text-xs bg-red-100 p-1 rounded-lg">
            <p className="w-full text-end font-bold mb-2">30</p>
            <p className="text-indigo-800 bg-indigo-200 rounded-md verySmallText md:text-xs lg:text-sm">Медитация сиддхов онлайн</p>
          </div>
          <div className="text-center text-xs bg-red-50 p-1 rounded-lg">
            <p className="w-full text-end font-bold mb-2"></p>
            <p></p>
          </div>

        </div>
      </div>


    </Container>
  )
}

export default page