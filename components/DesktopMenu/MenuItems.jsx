'use client'
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Dropdown from './Dropdown'
import { FaCaretDown } from 'react-icons/fa'
import { FaCaretUp } from 'react-icons/fa'

const MenuItems = ({ items, depthLevel }) => {
  const [dropdown, setDropdown] = useState(false)
  let ref = useRef()

  useEffect(() => {
    const handler = (event) => {
      if (dropdown && ref.current && !ref.current.contains(event.target)) {
        setDropdown(false)
      }
    }
    document.addEventListener('mousedown', handler)
    document.addEventListener('touchstart', handler)
    return () => {
      // Cleanup the event listener
      document.removeEventListener('mousedown', handler)
      document.removeEventListener('touchstart', handler)
    }
  }, [dropdown])

  // const onMouseEnter = () => {
  //   setDropdown(true)
  // }

  const onMouseLeave = () => {
    setDropdown(false)
  }

  const closeDropdown = () => {
    setDropdown(!dropdown)
  }

  return (
    <li
      className="relative p-2 text-gray-700 dark:text-gray-300 hover:bg-slate-200 dark:hover:bg-slate-600 rounded-md"
      ref={ref}
      // onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={closeDropdown}
    >
      {items.url && !items.submenu ? (
        //Для тех элементов меню, в которых нет подменю
        <>
          <button
            type="button"
            aria-haspopup="menu"
            aria-expanded={dropdown ? 'true' : 'false'}
          >
            <Link href={items.url} className="text-gray-700 dark:text-gray-300">
              {items.title}
              {''}
            </Link>
          </button>
        </>
      ) : //Для тех элементов меню, в которых есть подменю
      !items.url && items.submenu ? (
        <>
          <button
            type="button"
            aria-haspopup="menu"
            aria-expanded={dropdown ? 'true' : 'false'}
            onClick={() => setDropdown((prev) => !prev)}
            className="flex items-center gap-1 text-gray-700 dark:text-gray-300"
          >
            {items.title}
            {dropdown ? <FaCaretUp /> : <FaCaretDown />}
          </button>
          <Dropdown
            depthLevel={depthLevel}
            submenus={items.submenu}
            dropdown={dropdown}
          />
        </>
      ) : (
        <>
          <div>
            <Link
              href={items.url}
              className="w-full px-2 py-4 text-gray-700 dark:text-gray-300"
            >
              {items.title}
            </Link>
          </div>
        </>
      )}
    </li>
  )
}

export default MenuItems
