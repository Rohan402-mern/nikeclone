import React from 'react'
import styles from "@/styles/CategoryHead.module.css"
const CategoryHead = ({list,title}:{list:string[],title:string}) => {
  return (
    <div className={styles['categoryhead']}>
      <div>{title}</div>
      <ul>
        {list.map((item,index)=>(
            <li key={index} >{item}</li>
        ))}
      </ul>
    </div>
  )
}

export default CategoryHead
