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
        <details className="text-gray-700 dark:text-gray-300">
          <summary className="text-gray-700 dark:text-gray-300">Мероприятия</summary>
          <ul className="w-48 wp-2 text-sm text-gray-700 dark:text-gray-300 bg-white dark:bg-base-content border-l border-gray-300 dark:border-gray-600">
            <li><Link href='/raspisanie' className="text-gray-700 dark:text-gray-300 w-full">Расписание</Link></li>
            <li><Link href='/calendar' className="text-gray-700 dark:text-gray-300 w-full">Календарь</Link></li>
            <li><Link href='/mdc-events' className="text-gray-700 dark:text-gray-300 w-full">События центра</Link></li>

          </ul>
        </details>
      </li>
      <li >
        <details open={openDropdown} className="dropdown text-gray-700 dark:text-gray-300">
          <summary id="sum" className="text-gray-700 dark:text-gray-300">Практики</summary>
          <ul onClick={handleClickItem} className="w-48 wp-2 text-sm text-gray-700 dark:text-gray-300 bg-white dark:bg-base-content border-l border-gray-300 dark:border-gray-600">
            <li ><Link href='/upasana' className="text-gray-700 dark:text-gray-300 w-full">Алтарная садхана</Link></li>
            {/* <li ><Link href='/datta-sadhana' className="text-gray-700 dark:text-gray-300 w-full">Садхана Даттатрее</Link></li>
            <li><Link href='/achamana' className="text-gray-700 dark:text-gray-300 w-full">Ачамана</Link></li> */}
          </ul>
        </details>
      </li>
      <li><Link href='/blog' className="text-gray-700 dark:text-gray-300">Блог</Link></li>
      <li><Link href='/contacts' className="text-gray-700 dark:text-gray-300">Контакты</Link></li>
      <li><Link href='/donate' className="text-gray-700 dark:text-gray-300">Поддержать нас</Link></li>
    </>
  )
}

export default Menu