import React from 'react'
import styles from '@/styles/NavbarMenu.module.css'
import Link from 'next/link';

type SubCategoryItem = {
  title: string;
  href: string;
  next: boolean;
  class:string;
};

type Categorytype = "new" | "men" | "women" | "kids" | "sale";
const TitleItem = {"new":"New & Featured","men":"Men","women":"Women","kids":"kids","sale":"Sale"}

const LastItem = ({category, subcategory, handleBack,handleBack2, setShowInnerMenu, handlemenuClose,}:{category:Categorytype, subcategory:SubCategoryItem[],handleBack:()=>void,handleBack2:()=>void,setShowInnerMenu:(value:boolean)=>void,handlemenuClose:()=>void}) => {
  // console.log(subcategory)

  return (
    <div className={styles['lastitem']}>

      <div className={styles['innermenu-head']}>
        <button onClick={handleBack2} className={styles['innermenu-head-allbutton']} >
            <img src="icons/left.png" alt="" />
            <span>{TitleItem[category as keyof typeof TitleItem]}</span>
        </button>
        <button onClick={()=>{handlemenuClose(); setShowInnerMenu(false);handleBack2(); handleBack() }} ><img src="icons/cross.png" alt="" /></button>
      </div>

      <h1 className={styles['lastmenu-h1']}>{subcategory?.[2]?.class || "No title"}</h1>

       <div className={styles['navbarmenu-btn']}>
      {subcategory.map((item,index)=>( 
        <button key={index}><Link className={styles['innermenu-span']} href={"/in/launch"}>{item.title}</Link></button>
      ))}
      </div>
      
    </div>
  )
}

export default LastItem
