import { Menu, MenuButton, MenuItem, MenuItems, MenuSeparator } from '@headlessui/react'
import Link from 'next/link'

const MenuNavbar = () => {
  return (
    <div className='flex flex-col lg:flex-row items-center'>

      <Link href="/" className='btn btn-ghost text-lg font-normal hover:bg-red-600 hover:text-white dark:hover:bg-gray-700 dark:text-white transition duration-300 ease-in'>О центре</Link>

      <Menu>
        <MenuButton className="btn btn-ghost text-lg font-normal dark:text-white hover:bg-red-600 hover:text-white dark:hover:bg-gray-700 transition duration-300 ease-in">Мероприятия</MenuButton>
        <MenuItems transition anchor="bottom" className="w-[var(--button-width)] origin-top transition duration-300 ease-out data-[closed]:scale-95 data-[closed]:opacity-0 flex flex-col gap-1">
          <MenuItem>
            <Link
              href='/raspisanie'
              className="mt-1 w-full btn dark:btn-outline dark:bg-base-content hover:bg-red-100 dark:text-white dark:hover:border-white btn-sm font-normal data-[focus]:bg-red-100 dark:data-[focus]:bg-gray-700 transition duration-300 ease-in">
              Расписание
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
              href='/calendar'
              className="w-full btn dark:btn-outline dark:bg-base-content hover:bg-red-100 dark:text-white dark:hover:border-white btn-sm font-normal data-[focus]:bg-red-100 dark:data-[focus]:bg-gray-700 transition duration-300 ease-in">
              Календарь
            </Link>
          </MenuItem>

          <MenuItem>
            <Link
              href='/mdc-events'
              className="w-full btn dark:btn-outline dark:bg-base-content dark:text-white dark:hover:border-white btn-sm font-normal data-[focus]:bg-red-100 dark:data-[focus]:bg-gray-700 transition duration-300 ease-in">
              События центра
            </Link>
          </MenuItem>
        </MenuItems>
      </Menu >

      <Menu>
        <MenuButton className="btn btn-ghost text-lg font-normal dark:text-white hover:bg-red-600 hover:text-white dark:hover:bg-gray-700">Практики</MenuButton>
        <MenuItems transition anchor="bottom" className="w-[var(--button-width)] origin-top transition duration-300 ease-in data-[closed]:scale-95 data-[closed]:opacity-0 flex flex-col gap-1">
          <MenuItem>
            <Link
              className="mt-1 w-full btn dark:btn-outline dark:bg-base-content dark:text-white dark:hover:border-white btn-sm font-normal data-[focus]:bg-red-100 dark:data-[focus]:bg-gray-700 transition duration-300 ease-in"
              href="/upasana">
              Алтарная садхана
            </Link>
          </MenuItem>
        </MenuItems>
      </Menu>

      <Link href="/blog" className='btn btn-ghost text-left text-lg font-normal dark:text-white hover:bg-red-600 hover:text-white dark:hover:bg-gray-700 transition duration-300 ease-in'>Блог</Link>

      <Link href="/contacts" className='btn btn-ghost text-left text-lg font-normal dark:text-white hover:bg-red-600 hover:text-white dark:hover:bg-gray-700 transition duration-300 ease-in'>Контакты</Link>

      <Link href="/donate" className='btn btn-ghost text-left text-lg font-normal dark:text-white hover:bg-red-600 hover:text-white dark:hover:bg-gray-700 transition duration-300 ease-in'>Поддержать нас</Link>
    </div>
  )
}

export default MenuNavbar