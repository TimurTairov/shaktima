"use client";
import Link from "next/link";
import ThemeChanger from "./DarkSwitch";
import Image from "next/image"
import { Disclosure } from "@headlessui/react";
import logo from '@/public/ShaktiMa-logo.jpg'
import MenuNavbar from "@/components/Menu"
import { title } from "process";

export const Navbar = () => {
  const navigation = [
    {
      title: "О центре",
      url: "/",
    },
    {
      title: "Практики",
      url: "/praktiki",
      submenu: {
        title: "Медитация сиддхов",
        url: "/meditation",
      },
    },
    {
      title: "Семинары",
      url: "/seminary",
    },
    {
      title: "Контакты",
      url: "/contacts",
    },
    {
      title: "Поддержать",
      url: "/donate",
    },
  ];

  return (
    <div className="w-full">
      <nav className="container relative flex flex-wrap items-center justify-between p-8 mx-auto lg:justify-between xl:px-1">
        {/* Logo  */}
        <Link href="/">
          <div className="flex items-center space-x-2 text-2xl font-medium text-indigo-500 dark:text-gray-100">
            <Image
              src={logo}
              width="32"
              alt="N"
              height="32"
              className="w-8 rounded-full"
            />
            <h2 className="text-xl xl:text-4xl">Шакти Ма</h2>
          </div>
        </Link>

        {/* get started  */}
        <div className="gap-3 nav__item mr-2 lg:flex ml-auto lg:ml-0 lg:order-2">
          <ThemeChanger />
          {/* <div className="hidden mr-3 lg:flex nav__item">
            <Link href="/" className="px-6 py-2 text-white bg-indigo-600 rounded-md md:ml-5">
              Начать практиковать
            </Link>
          </div> */}
        </div>

        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button
                aria-label="Toggle Menu"
                className="px-2 py-1 text-gray-500 rounded-md lg:hidden hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:text-gray-300 dark:focus:bg-indigo-900">
                <svg
                  className="w-6 h-6 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24">
                  {open && (
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                    />
                  )}
                  {!open && (
                    <path
                      fillRule="evenodd"
                      d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                    />
                  )}
                </svg>
              </Disclosure.Button>

              <Disclosure.Panel className="flex flex-wrap w-full my-5 lg:hidden">
                <div className="flex flex-col flex-start">
                  {/* <MenuNavbar /> */}
                  {navigation.map((item) => (
                    <Link key={item.title} href={item.url} className="w-full px-4 py-2 -ml-4 text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 dark:focus:bg-indigo-900 focus:outline-none">
                      {item.title}
                    </Link>
                  ))}
                  {/* <Link href="/" className="w-full px-6 py-2 mt-3 text-center text-white bg-indigo-500 rounded-md lg:ml-5">
                    Практиковать
                  </Link> */}
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        {/* menu  */}
        <div className="hidden text-center lg:flex lg:items-center">
          <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
            {navigation.map((menu) => (
              <li className="mr-3 nav__item" key={menu.title}>
                <Link href={menu.url} className="inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-indigo-900">
                  {menu.title}
                </Link>
              </li>
            ))}

          </ul>

          {/* <MenuNavbar /> */}

        </div>


      </nav>
    </div>
  );
}

