"use client"
import React, { useState,useEffect } from 'react'
import styles from '../styles/Navbar.module.css'
import Link from 'next/link'
import NavbarDrop from './NavbarDrop'
import { NavbarItems } from '@/Jsfile/NavbarItems'
import SearchBar from './NavabarTools/SearchBar'

// Top bar with store, help, join, sign in links
const TopBar = () => {
  return (
    <div className={styles['navbar1']}>
      <Link href={"/in/jordan"} className={styles['navbar1-logo']}>
        <img src="icons/jordan-logo.png" alt="JordanLogo" />
      </Link>
      <div className={styles['navbar1-ul']}>
        <ul>
          <li><Link href={'/in/retail'}>Find a Store</Link> <p></p></li>
          <li><Link href={'/in/help'}>Help</Link> <p></p></li>
          <li><Link href={'/in/membership'}>Join Us</Link> <p></p></li>
          <li><Link href={'/accounts'}>Sign In</Link></li>
        </ul>
      </div>
    </div>
  )
}

type NavigationBarProps = {
  onHoverMenu: (menuType: keyof typeof NavbarItems) => void
  onLeaveMenu: () => void
  onSearchMenu:()=>void
}

// Middle navbar with main navigation links
const NavigationBar = ({ onHoverMenu, onLeaveMenu, onSearchMenu }: NavigationBarProps) => {
  return (
    <div className={styles['navbar2']}>
      <Link href={"/in"} className={styles['navbar2-logo']}>
        <img src="icons/nike-logo.png" alt="nike-logo" />
      </Link>
      <ul className={styles['navbar2-routes']}>
        <li onMouseEnter={() => onHoverMenu("new")} onMouseLeave={onLeaveMenu}>New & Featured</li>
        <li onMouseEnter={() => onHoverMenu("men")} onMouseLeave={onLeaveMenu}>
          <Link href={"/in/men/"}>Men</Link>
        </li>
        <li onMouseEnter={() => onHoverMenu("women")} onMouseLeave={onLeaveMenu}>
          <Link href={"/in/women"}>Women</Link>
        </li>
        <li onMouseEnter={() => onHoverMenu("kids")} onMouseLeave={onLeaveMenu}>
          <Link href={"/in/kids"}>Kids</Link>
        </li>
        <li onMouseEnter={() => onHoverMenu("sale")} onMouseLeave={onLeaveMenu}>
          <Link href={"/in/w/sale-3yaep"}>Sale</Link>
        </li>
        <li>
          <Link href={"in/snkrs"}>SNKRS</Link>
        </li>
      </ul>

      <ul className={styles['navbar2-ul']}>
        <img onClick={onSearchMenu} className={styles['navbar2-searchicon']} src="icons/search.png" alt="search_logo" />
        <Link className={styles['navbar2-acc']} href={"/account"}>
          <img src="/icons/user.png" alt="user_icon" />
        </Link>
        <search onClick={()=> onSearchMenu} className={styles['navbar2-searchbar']}>
          <img src="icons/search.png" alt="search_logo" />
          <span>Search</span>
        </search>
        <Link className={styles['navbar2-heart']} href={"/in/favoutarius"}>
          <img src="/icons/heart.png" alt="favorites_icon" />
        </Link>
        <Link className={styles['navbar2-cart']} href={"/in/cart"}>
          <img src="/icons/cart.png" alt="cart_icon" />
        </Link>
        <button className={styles['navbar2-hamburger']}>
          <img src="/icons/menu.png" alt="menu_icon" />
        </button>
      </ul>
    </div>
  )
}

// Bottom banner for promotions
const PromotionBanner = () => {
  return (
    <div className={styles['navbar3']}>
      <h1>New Styles On Sale: Up To 40% Off</h1>
      <p>
        <Link href={"/in/w/sale-3yaep"}>Shop All Our New Markdowns</Link>
      </p>
    </div>
  )
}

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState<keyof typeof NavbarItems>("new")
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [SearchOpen, setSearchOpen] = useState(false)

  const handleMenuHover = (menuType: keyof typeof NavbarItems) => {
    setActiveMenu(menuType)
    setDropdownOpen(true)
  }

  const handleDrophover=()=> {
    setDropdownOpen(true)
  }
  const handleSearch=()=> {
    setSearchOpen(true)
  }
  const handleSearchClose=()=> {
    setSearchOpen(false)
  }

  const handleMenuLeave = () => {
    setDropdownOpen(false)
  }

  useEffect(() => {
  if (SearchOpen) {
    document.body.style.overflow = 'hidden'; 
  } else {
    document.body.style.overflow = 'auto';
  }
}, [SearchOpen]);

  return (
    <div className={styles.navbar}>
      <TopBar />
      <div className={styles['navbar-wrapper']}>
        <NavigationBar 
        onHoverMenu={handleMenuHover} 
        onLeaveMenu={handleMenuLeave}
        onSearchMenu={handleSearch}
          />
        { <NavbarDrop
         type={activeMenu} 
         handleDrophover={handleDrophover} 
         onLeaveMenu={handleMenuLeave} 
         open={dropdownOpen}
         />
         }
      </div>
      <PromotionBanner />
      <SearchBar search={SearchOpen} onCancel={handleSearchClose}/>
    </div>
  )
}

export default Navbar
