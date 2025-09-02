import React from 'react'
import { NavbarItems } from '@/Jsfile/NavbarItems';
import styles from '@/styles/Navbar.module.css'
const NavbarDrop = ({ type,handleDrophover,onLeaveMenu,open }: { type: keyof typeof NavbarItems,
    handleDrophover:()=>void,onLeaveMenu:()=>void,open:boolean }) => {
  return (
    <div className={`${styles['navbar2-dropdown']} ${open ? styles.open : ''}`} onMouseEnter={handleDrophover} onMouseLeave={onLeaveMenu}>
      {NavbarItems[type].map((section, index) => (
        <div key={index}>
          <h3>{section.title}</h3>
          <ul>
            {section.items.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};


export default NavbarDrop
