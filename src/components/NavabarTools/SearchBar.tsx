import React from 'react'
import styles from '@/styles/Navbar.module.css'
import Link from 'next/link'
import { useState } from 'react'
const SearchItem=["on court styles", "road racing", "air jordan 1", "sneakers men", "air force 1", "shoes", "jordan", "running shoes"]

const SearchBar = ({search,onCancel}:{search:boolean,onCancel:()=>void}) => {
    const [query, setQuery] = useState("");
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };
  const handleClear = () => {
    setQuery("");
  };
  return (
    <div className={`${styles['searchbar']}  ${search ?styles.open2:'' }`}>
     <div className={styles['searchbar-bar']}>
        <div>
            <img src="icons/search.png" alt="" />
            <input type="text" placeholder='Search' value={query} onChange={handleChange} />
           {query !== ""?  <img className={styles['cross-icon']} onClick={handleClear} src="icons/cross.png" alt="" />:""}
        </div>
        <button onClick={onCancel}>Cancel</button>
      </div>
      <div className={styles['searchbar-terms']}>
        <h1>Popular Search Terms</h1>
        <ul>
            {SearchItem.map((item:string,index:number)=>(
            <Link href={"/in/men"} key={index} >{item}</Link>
        ))
        }
        </ul>
      </div>
    </div>
  )
}

export default SearchBar
