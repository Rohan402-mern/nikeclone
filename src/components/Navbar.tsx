"use client"
import React from 'react'
import styles from '../styles/Navbar.module.css'
import Link from 'next/link'
import { useState } from 'react'
const Navbar1 = ()=>{
    return(
        <div className={styles['navbar1']}>
           <Link href={"/in/jordan"} className={styles['navbar1-logo']}>
           <img src="icons/jordan-logo.png" alt="JordanLogo" /></Link>
           <div className={styles['navbar1-ul']}>
            <ul>
            <li><Link href={'/in/retail'}>Find a Store</Link> <p></p> </li>
            <li><Link href={'/in/help'}>Help</Link> <p></p> </li>
            <li><Link href={'/in/membership'} >Join Us</Link> <p></p> </li>
            <li><Link href={'/accounts'}>Sign In</Link></li>
           </ul> 
           </div> 

        </div>
    )
}
type Navbar2Props = {
  handlehover: () => void;
  mouseOut: () => void;
};

const Navbar2 = ({handlehover,mouseOut}:Navbar2Props)=>{
    return(
        
        <div className={styles['navbar2']}>
            <Link href={"/in"} className={styles['navbar2-logo']}>
            <img src="icons/nike-logo.png" alt="nike-logo" />
            </Link>
            <ul className={styles['navbar2-routes']}>
                <li onMouseEnter={handlehover} onMouseLeave={mouseOut} >New & Featured</li>
                <li onMouseEnter={handlehover} onMouseLeave={mouseOut} ><Link href={"/in/men/"}>Men</Link></li>
                <li onMouseEnter={handlehover} onMouseLeave={mouseOut}><Link href={"/in/women"}>Women</Link></li>
                <li onMouseEnter={handlehover} onMouseLeave={mouseOut}><Link href={"in/kids"}>Kids</Link></li>
                <li onMouseEnter={handlehover} onMouseLeave={mouseOut}><Link href={"/in/w/sale-3yaep"}>Sale</Link></li>
                <li><Link href={"in/snkrs"}>SNKRS</Link></li> 
            </ul>
            <ul className={styles['navbar2-ul']}>
                <img className={styles['navbar2-searchicon']} src="icons/search.png" alt="search_logo" />
                <Link className={styles['navbar2-acc']} href={"/account"}> <img src="/icons/user.png" alt="cart_logo" /></Link>
                <search className={styles['navbar2-searchbar']}>
                    <img src="icons/search.png" alt="search_logo" />
                    <span>Search</span>
                </search>
                <Link className={styles['navbar2-heart']} href={"/in/favoutarius"}> <img src="/icons/heart.png" alt="cart_logo" /></Link>
                <Link className={styles['navbar2-cart']} href={"/in/cart"}> <img src="/icons/cart.png" alt="cart_logo" /></Link>
                <button className={styles['navbar2-hamburger']}><img src="/icons/menu.png" alt="cart_logo" /></button>
            </ul>

        </div>
    ) 
}

const Navbar3 = ()=>{
    return(
        <div className={styles['navbar3']}>
            <h1>New Styles On Sale: Up To 40% Off</h1>
            <p><Link href={"/in/w/sale-3yaep"}>Shop All Our New Markdowns</Link></p>
        </div>
    )
}

const NavbarDropdown =({handlehover,mouseOut}:Navbar2Props)=>{
    return(
        <div className={styles['navbar2-dropdown']} onMouseEnter={handlehover} onMouseLeave={mouseOut} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit blanditiis maiores dolor perspiciatis tenetur temporibus aperiam ut saepe quis iste distinctio odio alias unde at, porro autem accusamus impedit veniam corporis provident, repellat natus esse dignissimos adipisci! Dicta vel dolorum voluptate aliquid beatae nesciunt et maxime temporibus debitis quo? Expedita nam doloribus explicabo repudiandae veritatis cupiditate molestiae dolor illo, sed, quas consequuntur excepturi quidem corporis temporibus at laudantium, saepe possimus recusandae aliquid distinctio. Odit doloribus dolore labore ab similique culpa sapiente animi necessitatibus atque. Praesentium, libero. Laborum et accusantium veritatis maiores officia odio error. At assumenda ipsum sapiente possimus optio.</div>
    )
}

const Navbar = () => {
    const [open, setOpen] = useState(false)
    const handlehover:()=>void=()=>{
    setOpen(true)
    }
    const mouseOut:()=>void=()=>{
    setOpen(false)
    }
  return (
    <div className={styles.navbar}>
        <Navbar1/>
       <div className={styles['navbar-wrapper']}>
         <Navbar2 handlehover={handlehover} mouseOut={mouseOut} />
        {open && <NavbarDropdown handlehover={handlehover} mouseOut={mouseOut} />}
       </div>
        <Navbar3/>
    </div>
  )
}

export default Navbar
