import { Menu, MenuButton, MenuItem, MenuItems, MenuSeparator } from '@headlessui/react'
import Link from 'next/link'

const MenuNavbar = () => {
  return (
    <div className='flex flex-col lg:flex-row items-center font-izmir '>

      <Link href="/" className='btn btn-ghost text-lg font-normal dark:hover:bg-gray-700'>О центре</Link>

      <Menu>
        <MenuButton className="btn btn-ghost text-lg font-normal dark:hover:bg-gray-700">Мероприятия</MenuButton>
        <MenuItems transition anchor="bottom" className="w-[var(--button-width)] origin-top transition duration-300 ease-out data-[closed]:scale-95 data-[closed]:opacity-0 flex flex-col gap-1">
          <MenuItem>
            <Link
              href='/raspisanie'
              className="mt-1 w-full btn dark:btn-outline dark:bg-base-content dark:text-gray-400 dark:hover:border-white btn-sm font-normal data-[focus]:bg-indigo-100 dark:data-[focus]:bg-gray-700 font-izmir">
              Расписание
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
              href='/calendar'
              className="w-full btn dark:btn-outline dark:bg-base-content dark:text-gray-400 dark:hover:border-white btn-sm font-normal data-[focus]:bg-indigo-100 dark:data-[focus]:bg-gray-700 font-izmir">
              Календарь
            </Link>
          </MenuItem>

          <MenuItem>
            <Link
              href='/mdc-events'
              className="w-full btn dark:btn-outline dark:bg-base-content  dark:text-gray-400 dark:hover:border-white btn-sm font-normal data-[focus]:bg-indigo-100 dark:data-[focus]:bg-gray-700 font-izmir">
              События центра
            </Link>
          </MenuItem>
        </MenuItems>
      </Menu >

      <Menu>
        <MenuButton className="btn btn-ghost text-lg font-normal dark:hover:bg-gray-700">Практики</MenuButton>
        <MenuItems transition anchor="bottom" className="w-[var(--button-width)] origin-top transition duration-500 ease-out data-[closed]:scale-95 data-[closed]:opacity-0 flex flex-col gap-1">
          <MenuItem>
            <Link
              className="mt-1 w-full btn dark:btn-outline dark:bg-base-content dark:text-gray-400 dark:hover:border-white btn-sm font-normal data-[focus]:bg-indigo-100 dark:data-[focus]:bg-gray-700 font-izmir"
              href="/upasana">
              Алтарная садхана
            </Link>
          </MenuItem>
          {/* <MenuItem>
            <Link
              className="w-full btn dark:btn-outline dark:bg-base-content dark:text-gray-400 dark:hover:border-white btn-sm font-normal data-[focus]:bg-indigo-100 dark:data-[focus]:bg-gray-700"
              href="/datta-sadhana">
              Садхана Даттатрее
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
              className="w-full btn dark:btn-outline dark:bg-base-content dark:text-gray-400 dark:hover:border-white btn-sm font-normal data-[focus]:bg-indigo-100 dark:data-[focus]:bg-gray-700"
              href="/achamana">
              Ачамана
            </Link>
          </MenuItem> */}
        </MenuItems>
      </Menu>

      <Link href="/blog" className='btn btn-ghost text-left text-lg font-normal dark:hover:bg-gray-700'>Блог</Link>

      <Link href="/contacts" className='btn btn-ghost text-left text-lg font-normal dark:hover:bg-gray-700'>Контакты</Link>

      <Link href="/donate" className='btn btn-ghost text-left text-lg font-normal dark:hover:bg-gray-700'>Поддержать нас</Link>
    </div>
  )
}

export default MenuNavbar