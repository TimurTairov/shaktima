'use client'
import Link from 'next/link'
import Image from 'next/image'
import logo from '@/public/ShaktiMa-logo.jpg'
import ThemeChanger from './DarkSwitch'
import tilaka from '@/public/img/shiva-tilak-3100736.png'
import Menu from '@/components/Menu'
import MenuNavbar from './MenuNavbar'

const MyNavbar = () => {
  const navigation = [
    {
      title: 'О центре',
      url: '/',
    },
    {
      title: 'Практики',
      url: '/praktiki',
      submenu: {
        title: 'Медитация сиддхов',
        url: '/meditation',
      },
    },
    {
      title: 'Семинары',
      url: '/seminary',
    },
    {
      title: 'Контакты',
      url: '/contacts',
    },
    {
      title: 'Поддержать',
      url: '/donate',
    },
  ]
  return (
    <div className="container navbar relative flex items-center justify-between p-2 md:p-4 lg:p-8 mx-auto xl:px-1">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden w-full"
          >
            <Image
              src={tilaka}
              alt="tilaka"
              loading="eager"
              className="h-8 w-8 text-gray-500 dark:text-gray-50"
            />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm md:menu-lg dropdown-content rounded-box z-50 mt-3 w-56 md:w-[20rem] p-2 shadow bg-base-100 dark:bg-base-content border border-gray-400"
          >
            <Menu />
          </ul>
        </div>

        {/* Logo  */}
        <Link href="/" className="btn btn-ghost text-xl hidden lg:flex">
          <div className="flex items-center space-x-2 text-2xl font-medium text-gray-600 dark:text-gray-100">
            <Image
              src={logo}
              width="32"
              alt="N"
              height="32"
              loading="eager"
              className="w-8 rounded-full"
            />
            <h2 className="text-xl xl:text-2xl pattaya-regular">Шакти Ма</h2>
          </div>
        </Link>
      </div>

      <div className="navbar-center flex lg:hidden">
        <Link href="/" className="btn btn-ghost text-xl">
          <div className="flex items-center space-x-2 text-2xl font-medium text-gray-500 dark:text-gray-100">
            <Image
              src={logo}
              width="32"
              alt="N"
              height="32"
              className="w-8 rounded-full"
            />
            <h2 className="text-xl xl:text-2xl pattaya-regular">Шакти Ма</h2>
          </div>
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-base text-gray-700 dark:text-gray-300 ">
          <MenuNavbar />
        </ul>
      </div>

      <div className="navbar-end">
        <div className="">
          <ThemeChanger />
        </div>
      </div>
    </div>
  )
}

export default MyNavbar
