import Link from "next/link";
import { useState } from "react";


const Menu = () => {
  const [openDropdown, setDropdown] = useState(false)

  function handleClickItem() {
    // close it
    setDropdown(false)
  }

  return (
    <>
      <li><Link href='/' className="text-gray-700 dark:text-gray-300">О центре</Link></li>
      <li >
        <details open={openDropdown} className="dropdown text-gray-700 dark:text-gray-300">
          <summary id="sum" className="text-gray-700 dark:text-gray-300">Практики</summary>
          <ul onClick={handleClickItem} className="w-48 wp-2 text-sm text-gray-700 dark:text-gray-300 bg-white dark:bg-base-content border-l border-gray-300 dark:border-gray-600">
            <li ><Link href='/meditation' className="text-gray-700 dark:text-gray-300 w-full">Медитации сиддхов</Link></li>
            <li ><Link href='/sutra' className="text-gray-700 dark:text-gray-300 w-full">Утренняя сутра</Link></li>
            <li><Link href='/bhadjan-mandala' className="text-gray-700 dark:text-gray-300 w-full">Бхаджан мандала</Link></li>
          </ul>
        </details>
      </li>
      <li >
        <details className="text-gray-700 dark:text-gray-300">
          <summary className="text-gray-700 dark:text-gray-300">Мероприятия</summary>
          <ul className="w-48 wp-2 text-sm text-gray-700 dark:text-gray-300 bg-white dark:bg-base-content border-l border-gray-300 dark:border-gray-600">
            <li><Link href='/raspisanie' className="text-gray-700 dark:text-gray-300 w-full">Расписание</Link></li>
            <li><Link href='/calendar' className="text-gray-700 dark:text-gray-300 w-full">Календарь</Link></li>
            <li><Link href='/seminary' className="text-gray-700 dark:text-gray-300 w-full">Семинары</Link></li>

          </ul>
        </details>
      </li>
      <li><Link href='/contacts' className="text-gray-700 dark:text-gray-300">Контакты</Link></li>
      <li><Link href='/donate' className="text-gray-700 dark:text-gray-300">Поддержать нас</Link></li>
    </>
  )
}

export default Menu