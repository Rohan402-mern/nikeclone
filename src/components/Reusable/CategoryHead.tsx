"use client"
import { useState,useEffect } from 'react'
import React from 'react'
import styles from "@/styles/CategoryHead.module.css"
const CategoryHead = ({list,title}:{list:string[],title:string}) => {
  const [isSticky, setIsSticky] = useState(false);
  useEffect(() => {
    const handleScroll=()=>{
      const categoryHead = document.querySelector(`.${styles.categoryhead}`);
    const rect = categoryHead?.getBoundingClientRect();
    if ( rect?.top != undefined && rect?.top<=0) {
      setIsSticky(true); 
    } else {
      setIsSticky(false); 
    }
    }

     window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

  }, [])
  
  return (
    <div className={`${styles['categoryhead']} ${isSticky ? styles.sticky : ''}`}>
      <div >{title}</div>
      <ul>
        {list.map((item,index)=>(
            <li key={index} >{item}</li>
        ))}
      </ul>
    </div>
  )
}

export default CategoryHead
