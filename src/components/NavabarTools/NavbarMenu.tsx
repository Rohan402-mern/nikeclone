"use client"
import React from 'react'
import styles from '@/styles/NavbarMenu.module.css'
import Link from 'next/link'
import NikeBtn from '../Reusable/NikeBtn'
import InnerMenu from './InnerMenu'
import { useState,useEffect } from 'react'
import LastItem from './LastItem'

const HamburgerItem=[
  {title:"New & Featured",class:"new",next:true},
  {title:"Men",class:"men",next:true},
  {title:"Women",class:"women",next:true}, 
  {title:"Kids",class:"kids",next:true}, 
  {title:"Sale",class:"sale",next:true}, 
  {title:"SNKRS",class:"new",next:false}
]
const lastItem = {
  new: {
    featured: [
      { title: "New & Upcoming Drops", href: "/in/newarrivals", next: false },
      { title: "Featured Collabs", href: "/in/collabs", next: false },
    ],
    trending: [
      { title: "Street Styles", href: "/in/trending", next: false },
      { title: "Most Liked", href: "/in/mostliked", next: false },
    ],
    shopIcons: [
      { title: "Air Force 1", href: "/in/airforce1", next: false },
      { title: "Air Max", href: "/in/airmax", next: false },
    ],
    shopBySport: [
      { title: "Running", href: "/in/running", next: false },
      { title: "Basketball", href: "/in/basketball", next: false },
    ],
  },

  men: {
    shoes: [
      { title: "Running Shoes", href: "/in/men/shoes/running", next: false },
      { title: "Training Shoes", href: "/in/men/shoes/training", next: false },
      { title: "Sneakers", href: "/in/men/shoes/sneakers", next: false },
    ],
    clothing: [
      { title: "T-Shirts", href: "/in/men/clothing/tshirts", next: false },
      { title: "Jackets", href: "/in/men/clothing/jackets", next: false },
      { title: "Shorts", href: "/in/men/clothing/shorts", next: false },
    ],
    shopBySport: [
      { title: "Football", href: "/in/men/football", next: false },
      { title: "Gym", href: "/in/men/gym", next: false },
    ],
    accessories: [
      { title: "Bags", href: "/in/men/accessories/bags", next: false },
      { title: "Socks", href: "/in/men/accessories/socks", next: false },
    ]
  },

  women: {
    shoes: [
      { title: "Running Shoes", href: "/in/women/shoes/running", next: false },
      { title: "Lifestyle", href: "/in/women/shoes/lifestyle", next: false },
    ],
    clothing: [
      { title: "Leggings", href: "/in/women/clothing/leggings", next: false },
      { title: "Sports Bras", href: "/in/women/clothing/sports-bras", next: false },
    ],
    shopBySport: [
      { title: "Yoga", href: "/in/women/sport/yoga", next: false },
      { title: "Dance", href: "/in/women/sport/dance", next: false },
    ],
    accessories: [
      { title: "Hairbands", href: "/in/women/accessories/hairbands", next: false },
      { title: "Gym Bags", href: "/in/women/accessories/gym-bags", next: false },
    ]
  },

  kids: {
    featured: [
      { title: "Mini Sneakers", href: "/in/kids/featured/mini-sneakers", next: false },
      { title: "Just In", href: "/in/kids/featured/just-in", next: false },
    ],
    shoes: [
      { title: "School Shoes", href: "/in/kids/shoes/school", next: false },
      { title: "Sports Shoes", href: "/in/kids/shoes/sports", next: false },
    ],
    clothing: [
      { title: "T-Shirts", href: "/in/kids/clothing/tshirts", next: false },
      { title: "Tracksuits", href: "/in/kids/clothing/tracksuits", next: false },
    ],
    kidsByAge: [
      { title: "Babies", href: "/in/kids/age/babies", next: false },
      { title: "Older Kids", href: "/in/kids/age/older-kids", next: false },
    ],
    shopBySport: [
      { title: "Football", href: "/in/kids/sport/football", next: false },
      { title: "Basketball", href: "/in/kids/sport/basketball", next: false },
    ],
    accessories: [
      { title: "Backpacks", href: "/in/kids/accessories/backpacks", next: false },
      { title: "Water Bottles", href: "/in/kids/accessories/water-bottles", next: false },
    ]
  },

  sale: {
    mensSale: [
      { title: "Shoes", href: "/in/sale/men/shoes", next: false },
      { title: "Clothing", href: "/in/sale/men/clothing", next: false },
    ],
    womensSale: [
      { title: "Shoes", href: "/in/sale/women/shoes", next: false },
      { title: "Clothing", href: "/in/sale/women/clothing", next: false },
    ],
    kidsSale: [
      { title: "Shoes", href: "/in/sale/kids/shoes", next: false },
      { title: "Clothing", href: "/in/sale/kids/clothing", next: false },
    ],
    lastChance: [
      { title: "Final Clearance", href: "/in/sale/last-chance", next: false },
      { title: "Almost Gone", href: "/in/sale/almost-gone", next: false },
    ]
  }
};

type Categorytype = "new" | "men" | "women" | "kids" | "sale"

type SubCategoryItem = {
  title: string;
  href: string;
  next: boolean;
  class:string;
};

const StoreItem=[
  {title:"Help",src:"help",href:"/in/help"}
  ,{title:"Bag",src:"cart",href:"/in/cart"},
  {title:"Orders",src:"bag",href:"/in/orders"},
  {title:"Find a Store",src:"store",href:"/in/retail"}
]

const NavbarMenu = ({menu,handlemenuClose}:{menu:boolean,handlemenuClose:()=>void}) => {
  const [category, setCategory] = useState<"new" | "men" | "women" | "kids" | "sale">("new");
 const [subcategory, setSubCategory] = useState<SubCategoryItem[]>([]);
  const [showInnerMenu, setShowInnerMenu] = useState(false);
  const [showInnerMenu2, setShowInnerMenu2] = useState(false);
 
  const handleClick=(title:Categorytype)=>{
    setCategory(title)
    setShowInnerMenu(true);
  }

  const handleClick2=()=>{
    setShowInnerMenu2(true);
  }
  
  const handleBack = () => {
    setShowInnerMenu(false);
  };

  const handleBack2 = () => {
    setShowInnerMenu2(false);
  };

  return (
    
      <div className={`${styles['navbarmenu']} ${menu ? styles.open:''} `}>
        <div className={`${styles['navbarmenu-wrapper']} ${showInnerMenu ? styles['slidemenu']:""} 
          ${showInnerMenu2 ? styles['slidemenu2'] : ""}`}>

          <div className={styles['navbarmenu-cont']}>
      <div className={styles['navbarmenu-cancel']}>
        <button onClick={handlemenuClose} ><img src="icons/cross.png" alt="" /></button>
      </div>

      <div className={styles['navbarmenu-btn']}>
        {HamburgerItem.map((item,index)=>(
          <React.Fragment key={index}>
             {item.next ? <button onClick={()=>handleClick(item.class as Categorytype)} ><span className={styles['navbarmenu-btn-span']}>{item.title}</span><img src="icons/right.png" alt="" /></button> : 
            <button><Link className={styles['navbarmenu-btn-a']} href={"/in/launch"}>{item.title}</Link></button>}
          </React.Fragment>
      ))}
      </div>

      <button className={styles['navbarmenu-jordan']}>
        <Link href={"in/jordan"}><img src="icons/jordan-logo.png" alt="" />
        <span>Jordan</span></Link>
      </button>

      <p className={styles['navbarmenu-info']}>Become a Nike Member for the best products, inspiration and stories in sport. 
      <span>Learn More</span>
      </p>

      <div className={styles['navbarmenu-nikebtn']}>
        <NikeBtn title='Join Us' href='/in/membership' onclick={()=>{}} style='nikebtndark' />
        <NikeBtn title='Sign In' href='/accounts' onclick={()=>{}}  style='nikebtnlight'/>
      </div>

      <ul className={styles['navbarmenu-logo-ul']}>
        {StoreItem.map((item,index)=>(
          <Link key={index} href={`icons/${item.href}.png`}><img src={`icons/${item.src}.png`} alt="" />{item.title}</Link>
        ))}
      </ul>

          </div>

          <div className={styles['navbarmenu-innercont']}>
      <InnerMenu 
      handleClick2={handleClick2}
      setShowInnerMenu={setShowInnerMenu} 
      setSubCategory={setSubCategory}  
      handlemenuClose={handlemenuClose} 
      category={category} 
      handleBack={handleBack} />
          </div>

          <div className={styles['navbarmenu-innercont']}>
      <LastItem 
        category={category}
        handleBack2={handleBack2}
        subcategory={subcategory} 
        setShowInnerMenu={setShowInnerMenu} 
        handlemenuClose={handlemenuClose} 
        handleBack={handleBack}
         />
          </div>
     </div>
 </div>
  )
}

export default NavbarMenu
