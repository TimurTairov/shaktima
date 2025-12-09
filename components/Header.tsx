import MobileNav from '../components/MobileMenu/MobileNav'
import Navbar from '../components/DesktopMenu/Navbar'
import ButtonDarkMode from '../components/DarkSwitch'
import Logo from './Logo'

const Header = () => {
  return (
    <header>
      <div className="w-full flex items-center justify-between mx-0 my-auto py-3 px-3 xl:px-20 dark:bg-slate-800 text-gray-200 dark:text-gray-800">
        {/* for large screens */}
        <MobileNav />
        <Logo />
        <Navbar />
        {/* for small screens */}
        <ButtonDarkMode />
      </div>
    </header>
  )
}

export default Header
