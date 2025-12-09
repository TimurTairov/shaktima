'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { menuItemsData } from '@/helpers/menuItemsData'
import MobileMenuItems from './MobileMenuItems'
import tilaka from '@/public/Tilaka/shiva-tilak-3100736.png'
import { LiaTimesSolid } from 'react-icons/lia'


const MobileNav = () => {
  const depthLevel = 0
  const [showMenu, setShowMenu] = useState(false)
  //.let ref = useRef()
  // let ref = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   const handler = (event: { target: any }) => {
  //     if (showMenu && ref.current && !ref.current.contains(event.target as HTMLDivElement)) {
  //       setShowMenu(false)
  //     }
  //   }
  //   document.addEventListener('mousedown', handler)
  //   document.addEventListener('touchstart', handler)
  //   return () => {
  //     // Cleanup the event listener
  //     document.removeEventListener('mousedown', handler)
  //     document.removeEventListener('touchstart', handler)
  //   }
  // }, [showMenu])

  const toggleNavBar = () => {
    setShowMenu(!showMenu)
  }

  return (
    <nav className="mobile-nav z-50">
      <button
        className="mobile-nav__menu-button relative  dark:bg-gray-800 cursor-pointer border-none"
        type="button"
        onClick={toggleNavBar}
      >
        {showMenu ? (
          <LiaTimesSolid className="h-12 w-12 text-gray-700 dark:text-gray-300 pt-1" />
        ) : (
          <Image
            src={tilaka}
            alt="menu"
            className="h-12 w-12 dark:bg-gray-800 pt-2"
          />

        )}
      </button>
      {showMenu && (
        <ul
          className="menus absolute top-18 left-1 rounded-lg w-60  border text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800"
        // ref={ref}
        >
          {menuItemsData.map((menu, index) => {
            return (
              <MobileMenuItems
                items={menu}
                key={index}
                depthLevel={depthLevel}
                showMenu={showMenu}
                setShowMenu={setShowMenu}
              />
            )
          })}
        </ul>
      )}
    </nav>
  )
}

export default MobileNav
