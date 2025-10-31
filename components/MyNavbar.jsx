'use client'
import Link from 'next/link'
import Image from 'next/image'
import logo from '@/public/ShaktiMa-logo.webp'
import ThemeChanger from './DarkSwitch'
import tilaka from '@/public/svg/shiva_tilak.svg'
import Menu from '@/components/Menu'
import MenuNavbar from './MenuNavbar'

const MyNavbar = () => {
  return (
    <div className="container navbar relative flex items-center justify-between p-2 md:p-4  mx-auto xl:px-1">
      <div className="justify-start shrink-0">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden w-full dark:hover:bg-gray-700"
          >
            <Image src={tilaka} alt="tilaka" className="h-8 w-8" />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-xs sm:menu-sm md:menu-lg dropdown-content rounded-box z-50 mt-3 w-56 md:w-[20rem] p-2 shadow bg-base-100 dark:bg-base-content border border-gray-400"
          >
            <Menu />
          </ul>
        </div>

        {/* Logo  */}
        <Link
          href="/"
          className="btn btn-ghost text-xl hidden lg:flex dark:hover:bg-gray-700"
        >
          <div className="flex items-center space-x-2 text-2xl font-medium text-gray-600 dark:text-gray-100 ">
            <Image
              src={logo}
              width="32"
              alt="N"
              height="32"
              loading="eager"
              className="w-8 rounded-full"
            />
            <h2 className="text-xl xl:text-2xl 2xl:text-3xl font-izmir text-red-500">
              ШактиМа
            </h2>
          </div>
        </Link>
      </div>

      <div className="navbar-center  flex lg:hidden">
        <Link href="/" className="btn btn-ghost text-xl dark:hover:bg-gray-700">
          <div className="btn btn-ghost flex items-center space-x-2 text-2xl font-medium text-gray-500 dark:text-gray-100 ">
            <Image
              src={logo}
              width="32"
              alt="N"
              height="32"
              className="w-8 rounded-full"
            />
            <h2 className="text-xl xl:text-2xl font-izmir text-red-500">
              ШактиМа
            </h2>
          </div>
        </Link>
      </div>

      <div className="navbar-center justify-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-base text-gray-700 dark:text-gray-300 ">
          <MenuNavbar />
        </ul>
      </div>

      <div className="justify-end shrink-0">
        <div className="btn btn-ghost hover:bg-gray-300 dark:hover:bg-gray-700">
          <ThemeChanger />
        </div>
      </div>
    </div>
  )
}

export default MyNavbar
