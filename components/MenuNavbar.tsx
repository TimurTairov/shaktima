import { Menu, MenuButton, MenuItem, MenuItems, MenuSeparator } from '@headlessui/react'
import Link from 'next/link'

const MenuNavbar = () => {
  return (
    <div className='flex flex-col lg:flex-row items-center'>
      <Link href="/" className='btn btn-ghost text-left text-lg font-normal'>О центре</Link>
      <Menu>
        <MenuButton className="btn btn-ghost text-left text-lg font-normal">Практики</MenuButton>
        <MenuItems transition anchor="bottom" className="w-[var(--button-width)] origin-top transition duration-300 ease-out data-[closed]:scale-95 data-[closed]:opacity-0">
          <MenuItem>
            <Link href='/meditation' className="w-full btn btn-sm font-normal data-[focus]:bg-indigo-100">
              Медитация сиддхов
            </Link>
          </MenuItem>
          <MenuItem>
            <Link className="w-full btn btn-sm font-normal data-[focus]:bg-indigo-100" href="/bhadjan-mandala">
              Бхаджан Мандала
            </Link>
          </MenuItem>
          <MenuItem>
            <Link className="w-full btn btn-sm font-normal data-[focus]:bg-indigo-100" href="/sutra">
              Утреняя Сутра
            </Link>
          </MenuItem>
        </MenuItems>
      </Menu>
      <Menu>
        <MenuButton className="btn btn-ghost text-left text-lg font-normal">Мероприятия</MenuButton>
        <MenuItems transition anchor="bottom" className="w-[var(--button-width)] origin-top transition duration-300 ease-out data-[closed]:scale-95 data-[closed]:opacity-0">
          <MenuItem>
            <Link href='/calendar' className="w-full btn btn-sm font-normal data-[focus]:bg-indigo-100">
              Календарь
            </Link>
          </MenuItem>
        </MenuItems>
      </Menu >
      <Link href="/contacts" className='btn btn-ghost text-left text-lg font-normal'>Контакты</Link>
      <Link href="/donate" className='btn btn-ghost text-left text-lg font-normal'>Поддержать нас</Link>
    </div>
  )
}

export default MenuNavbar