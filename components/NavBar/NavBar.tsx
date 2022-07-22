import { ActiveLink } from "../ActiveLink/ActiveLink";
import navbar from './NavBar.module.css';

const menuItems = [
  {
      text: 'Home',
      href: '/'
  },
  {
      text: 'About',
      href: '/about'
  },
  {
      text: 'Contact',
      href: '/contact'
  },
  {
      text: 'Pricing',
      href: '/pricing'
  },
];

export const NavBar = () => {
  return (
    <nav className={navbar['menu-container']}>
      { menuItems && menuItems.map((item, i) => (
        <ActiveLink key={i} text={item.text} href={item.href}/>
      ))}
    </nav>
  )
}
