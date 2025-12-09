import { menuItemsData } from '@/helpers/menuItemsData'
import MenuItems from './MenuItems'

const Navbar = () => {
  const depthLevel = 0
  return (
    <nav className="desktop-nav">
      <ul className="menus flex items-center justify-between flex-wrap text-xl gap-1 transition-all duration-1000 ease-in">
        {menuItemsData.map((menu) => {
          return <MenuItems items={menu} key={menu.title} depthLevel={depthLevel} />
        })}
      </ul>
    </nav>
  )
}

export default Navbar
