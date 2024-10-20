import Link from "next/link";


const Menu = () => {
  return (
    <>
      <li><Link href='/' className="text-gray-700 dark:text-gray-300">О центре</Link></li>
      <li >
        <details className="text-gray-700 dark:text-gray-300">
          <summary className="text-gray-700 dark:text-gray-300">Практики</summary>
          <ul className="w-48 p-2 text-sm text-gray-700 dark:text-gray-300 bg-white dark:bg-base-content dark:border border-gray-600 rounded-xl">
            <li><Link href='/meditation' className="text-gray-700 dark:text-gray-300">Медитация сиддхов</Link></li>
            <li><a className="text-gray-700 dark:text-gray-300">Бхаджан мандала</a></li>
          </ul>
        </details>
      </li>
      <li><Link href='/seminary' className="text-gray-700 dark:text-gray-300">Семинары</Link></li>
      <li><Link href='/contacts' className="text-gray-700 dark:text-gray-300">Контакты</Link></li>
      <li><Link href='/donate' className="text-gray-700 dark:text-gray-300">Поддержать</Link></li>
    </>
  )
}

export default Menu