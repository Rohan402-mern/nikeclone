import React from 'react'
import styles from '@/styles/NavbarMenu.module.css'
import Link from 'next/link'

const InnerItem={
    "new":[
        {title:"New Arrivals",next:false,href:'/in/newarrivals',
           submenu: [
            { title: "New & Upcoming Drops", href: "/in/newarrivals", next: false,class:"Featured" },
            { title: "Featured Collabs", href: "/in/collabs", next: false,class:"Featured" },
          ],
        }, 
        {title:"Bestsellers",next:false,href:"in/bestsellers",
           submenu: [
            { title: "New & Upcoming Drops", href: "/in/newarrivals", next: false, class:"Featured" },
            { title: "Featured Collabs", href: "/in/collabs", next: false, class:"Featured" },
          ],
        },
        {title:"Featured", next:true, class:"featured",
          submenu: [
            { title: "New & Upcoming Drops", href: "/in/newarrivals", next: false,class:"Featured" },
            { title: "SNKRS Launch Calendar", href: "/in/collabs", next: false,class:"Featured" },
            { title: "Customize with Nike By You", href: "/in/nike-by-you", next: false,class:"Featured" },
            { title: "Jordan", href: "/in/jordan", next: false,class:"Featured" },
          ],
        },
        {title:"Trending",next:true,class:"trending",
          submenu: [
            { title: "Summer Essentials", href: "/in/essential", next: false,class:"Trending" },
            { title: "Struture 26 - Run Supported", href: "/in/support", next: false,class:"Trending" },
            { title: "What's Trending", href: "/in/trending", next: false,class:"Trending" },
            { title: "Nike 24.7", href: "/in/nike24", next: false,class:"Trending" },
            { title: "Colours of the Season: Earth Tones", href: "/in/nikeco", next: false,class:"Trending" },
            { title: "Retro Running", href: "/in/support", next: false,class:"Trending" },
            { title: "Struture 26 - Running Shoe Finder", href: "/in/runsupport", next: false, class:"Trending" },
          ],
        },
        {title:"Shop Icons",next:true,class:"shopicons",
          submenu: [
            { title: "Lifestyle", href: "/in/lifestyle", next: false,class:"Shop Icons" },
            { title: "Air Force 1", href: "/in/airforce1", next: false,class:"Shop Icons" },
            { title: "Air Jordan 1", href: "/in/airjordan1", next: false,class:"Shop Icons" },
            { title: "Air Max", href: "/in/airmax", next: false,class:"Shop Icons" },
            { title: "Dunk", href: "/in/dunk", next: false,class:"Shop Icons" },
            { title: "Cortez", href: "/in/cortez", next: false,class:"Shop Icons" },
            { title: "Blazer", href: "/in/blazer", next: false,class:"Shop Icons" },
            { title: "Pegasus", href: "/in/pegasus", next: false,class:"Shop Icons" },
            { title: "Vomero", href: "/in/airmax", next: false,class:"Shop Icons" },
          ],
        },
        {title:"Shop By Sport",next:true,class:"shopbysport",
          submenu: [
            { title: "Running", href: "/in/running", next: false, class:"Shop By Sport" },
            { title: "Basketball", href: "/in/basketball", next: false, class:"Shop By Sport" },
            { title: "Football", href: "/in/basketball", next: false, class:"Shop By Sport" },
            { title: "Golf", href: "/in/basketball", next: false, class:"Shop By Sport" },
            { title: "Tennis", href: "/in/basketball", next: false, class:"Shop By Sport" },
            { title: "Gym and Training", href: "/in/basketball", next: false, class:"Shop By Sport" },
            { title: "Yoga", href: "/in/basketball", next: false, class:"Shop By Sport" },
            { title: "Skateboarding", href: "/in/basketball", next: false, class:"Shop By Sport" },

          ],
        }
    ],

    "men":[
        {title:"New Arrivals",next:false,href:'/in/newarrivals',
          submenu: [
            { title: "Running Shoes", href: "/in/men/shoes/running", next: false,class:"Shoes" },
            { title: "Training Shoes", href: "/in/men/shoes/training", next: false,class:"Shoes" },
            { title: "Sneakers", href: "/in/men/shoes/sneakers", next: false,class:"Shoes" },
          ],
        },
        {title:"Bestsellers",next:false,href:"in/bestsellers",
          submenu: [
            { title: "Running Shoes", href: "/in/men/shoes/running", next: false,class:"Shoes" },
            { title: "Training Shoes", href: "/in/men/shoes/training", next: false,class:"Shoes" },
            { title: "Sneakers", href: "/in/men/shoes/sneakers", next: false,class:"Shoes" },
          ],
        },
        {title:"Shoes",next:true,class:"shoes",
          submenu: [
            { title: "All Shoes", href: "/in/men/shoes/running", next: false,class:"Shoes" },
            { title: "Lifestyle", href: "/in/men/shoes/training", next: false,class:"Shoes" },
            { title: "Jordan", href: "/in/men/shoes/sneakers", next: false,class:"Shoes" },
            { title: "Running", href: "/in/men/shoes/sneakers", next: false,class:"Shoes" },
            { title: "Football", href: "/in/men/shoes/sneakers", next: false,class:"Shoes" },
            { title: "Basketball", href: "/in/men/shoes/sneakers", next: false,class:"Shoes" },
            { title: "Gym and Training", href: "/in/men/shoes/sneakers", next: false,class:"Shoes" },
            { title: "Skateboarding", href: "/in/men/shoes/sneakers", next: false,class:"Shoes" },
            { title: "Sandals and Slides", href: "/in/men/shoes/sneakers", next: false,class:"Shoes" },
            { title: "Nike By You", href: "/in/men/shoes/sneakers", next: false,class:"Shoes" },
          ],
        },
        {title:"Clothing",next:true,class:"clothing",
          submenu: [
            { title: "All Clothing", href: "/in/men/clothing/tshirts", next: false,class:"Clothing" },
            { title: "Tops and T-Shirts", href: "/in/men/clothing/jackets", next: false,class:"Clothing"  },
            { title: "Pants and Leggings", href: "/in/men/clothing/shorts", next: false,class:"Clothing"  },
            { title: "Hoodies and Sweatshirts", href: "/in/men/clothing/shorts", next: false,class:"Clothing"  },
            { title: "Jackets and Gilets", href: "/in/men/clothing/shorts", next: false,class:"Clothing"  },
            { title: "Jerseys and Kits", href: "/in/men/clothing/shorts", next: false,class:"Clothing"  },
            { title: "Jordan", href: "/in/men/clothing/shorts", next: false,class:"Clothing"  },
          ],
        },
        {title:"Shop By Sport",next:true,class:"shopbysport",
          submenu: [
            { title: "Running", href: "/in/men/football", next: false,class:"Shop By Sport"  },
            { title: "Basketball", href: "/in/men/football", next: false,class:"Shop By Sport" },
            { title: "Football", href: "/in/men/football", next: false,class:"Shop By Sport" },
            { title: "Golf", href: "/in/men/football", next: false,class:"Shop By Sport" },
            { title: "Tennis", href: "/in/men/football", next: false,class:"Shop By Sport" },
            { title: "Gym and Training", href: "/in/men/football", next: false,class:"Shop By Sport" },
            { title: "Yoga", href: "/in/men/gym", next: false,class:"Shop By Sport" },
            { title: "Skateboarding", href: "/in/men/gym", next: false,class:"Shop By Sport" },
          ],
        },
        {title:"Accessories and Equipment",next:true,class:"accessories",
          submenu: [
            { title: "All Accessories and Equipment", href: "/in/men/accessories/bags", next: false,class:"Accessories and Equipment" },
            { title: "Bags and Backpacks", href: "/in/men/accessories/bags", next: false,class:"Accessories and Equipment" },
            { title: "Socks", href: "/in/men/accessories/socks", next: false,class:"Accessories and Equipment" },
            { title: "Hats and Headwear", href: "/in/men/accessories/bags", next: false,class:"Accessories and Equipment" },
          ]
        }
    ],

    "women":[
        {title:"New Arrivals",next:false,href:'/in/newarrivals',
          submenu: [
            { title: "Running Shoes", href: "/in/women/shoes/running", next: false,class:"Shoes" },
            { title: "Lifestyle", href: "/in/women/shoes/lifestyle", next: false,class:"Shoes" },
          ],
        },
        {title:"Bestsellers",next:false,href:"in/bestsellers",
          submenu: [
            { title: "Running Shoes", href: "/in/women/shoes/running", next: false,class:"Shoes" },
            { title: "Lifestyle", href: "/in/women/shoes/lifestyle", next: false,class:"Shoes" },
          ],},
        {title:"Shoes",next:true,class:"shoes",
          submenu: [
            { title: "All Shoes", href: "/in/women/shoes/lifestyle", next: false,class:"Shoes" },
            { title: "Lifestyle", href: "/in/women/shoes/lifestyle", next: false,class:"Shoes" },
            { title: "Jordan", href: "/in/women/shoes/lifestyle", next: false,class:"Shoes" },
            { title: "Running", href: "/in/women/shoes/running", next: false,class:"Shoes" },
            { title: "Gym and Training", href: "/in/women/shoes/lifestyle", next: false,class:"Shoes" },
            { title: "Football", href: "/in/women/shoes/lifestyle", next: false,class:"Shoes" },
            { title: "Basketball", href: "/in/women/shoes/lifestyle", next: false,class:"Shoes" },
            { title: "Sandals and Slides", href: "/in/women/shoes/lifestyle", next: false,class:"Shoes" },
            { title: "Nike By You", href: "/in/women/shoes/lifestyle", next: false,class:"Shoes" },
          ],
        },
        {title:"Clothing",next:true,class:"clothing",
          submenu: [
            { title: "All Clothing", href: "/in/women/clothing/leggings", next: false,class:"Clothing" },
            { title: "Performance Essentials", href: "/in/women/clothing/leggings", next: false,class:"Clothing" },
            { title: "Tops and T-shirts", href: "/in/women/clothing/leggings", next: false,class:"Clothing" },
            { title: "Sports Bras", href: "/in/women/clothing/sports-bras", next: false,class:"Clothing" },
            { title: "Pants and Leggings", href: "/in/women/clothing/leggings", next: false,class:"Clothing" },
            { title: "Shorts", href: "/in/women/clothing/leggings", next: false,class:"Clothing" },
            { title: "Hoodies and Sweatshirts", href: "/in/women/clothing/leggings", next: false,class:"Clothing" },
            { title: "Jackets and Gilets", href: "/in/women/clothing/leggings", next: false,class:"Clothing" },
            { title: "Skirts and Dresses", href: "/in/women/clothing/leggings", next: false,class:"Clothing" },
            { title: "Modest Wear", href: "/in/women/clothing/leggings", next: false,class:"Clothing" },
            { title: "Nike Maternity", href: "/in/women/clothing/leggings", next: false,class:"Clothing" },
            { title: "Plus Size", href: "/in/women/clothing/leggings", next: false,class:"Clothing" },
          ],
        },
        {title:"Shop By Sport",next:true,class:"shopbysport",
          submenu: [
            { title: "Yoga", href: "/in/women/sport/yoga", next: false,class:"Shop By Sport" },
            { title: "Running", href: "/in/women/sport/dance", next: false,class:"Shop By Sport" },
            { title: "Gym and Training", href: "/in/women/sport/dance", next: false,class:"Shop By Sport" },
            { title: "Basketball", href: "/in/women/sport/dance", next: false,class:"Shop By Sport" },
            { title: "Tennis", href: "/in/women/sport/dance", next: false,class:"Shop By Sport" },
            { title: "Golf", href: "/in/women/sport/dance", next:false,class:"Shop By Sport" },
            { title: "Football", href: "/in/women/sport/dance", next: false,class:"Shop By Sport" },
            { title: "Skateboarding", href: "/in/women/sport/dance", next: false,class:"Shop By Sport" },
          ],
        },
        {title:"Accessories and Equipment",next:true,class:"accessories",
          submenu: [
            { title: "All Accessories and Equipment", href: "/in/women/accessories/hairbands", next: false,class:"Accessories and Equipment" },
            { title: "Bags and Backpacks", href: "/in/women/accessories/hairbands", next: false,class:"Accessories and Equipment" },
            { title: "Socks", href: "/in/women/accessories/hairbands", next: false,class:"Accessories and Equipment" },
            { title: "Hats and Headwear", href: "/in/women/accessories/hairbands", next: false,class:"Accessories and Equipment" },
          ]
        }
    ],

    "kids":[
        {title:"New Arrivals",next:false,href:'/in/newarrivals',
          submenu: [
      { title: "Mini Sneakers", href: "/in/kids/featured/mini-sneakers", next: false,class:"Featured" },
      { title: "Just In", href: "/in/kids/featured/just-in", next: false,class:"Featured" },
    ],},
        {title:"Bestsellers",next:false,href:"in/bestsellers",
          submenu: [
      { title: "Mini Sneakers", href: "/in/kids/featured/mini-sneakers", next: false,class:"Featured" },
      { title: "Just In", href: "/in/kids/featured/just-in", next: false,class:"Featured" },
    ],},
        {title:"Featured",next:true,class:"featured",
          submenu: [
      { title: "Back to School", href: "/in/kids/featured/mini-sneakers", next: false,class:"Featured" },
      { title: "Sport Gear", href: "/in/kids/featured/just-in", next: false,class:"Featured" },
      { title: "Lifestyle Looks", href: "/in/kids/featured/just-in", next: false ,class:"Featured"},
    ],
        },
        {title:"Shoes",next:true,class:"shoes",
           submenu: [
      { title: "All Shoes", href: "/in/kids/shoes/school", next: false,class:"Shoes" },
      { title: "Lifestyle", href: "/in/kids/shoes/sports", next: false,class:"Shoes" },
      { title: "Jordan", href: "/in/kids/shoes/sports", next: false,class:"Shoes" },
      { title: "Football", href: "/in/kids/shoes/sports", next: false,class:"Shoes" },
      { title: "Running", href: "/in/kids/shoes/sports", next: false,class:"Shoes" },
      { title: "Basketball", href: "/in/kids/shoes/sports", next: false,class:"Shoes" },
    ],
        },
        {title:"Clothing",next:true,class:"clothing",
           submenu: [
            { title: "All Clothing", href: "/in/kids/clothing/tshirts", next: false ,class:"Clothing"},
            { title: "Tops and T-Shirts", href: "/in/kids/clothing/tshirts", next: false,class:"Clothing" },
            { title: "Sport Bras", href: "/in/kids/clothing/tracksuits", next: false,class:"Clothing" },
            { title: "Hoodies and Sweatshirts", href: "/in/kids/clothing/tracksuits", next: false,class:"Clothing" },
            { title: "Pants and Leggings", href: "/in/kids/clothing/tracksuits", next: false,class:"Clothing" },
            { title: "Shorts", href: "/in/kids/clothing/tracksuits", next: false,class:"Clothing" },
            { title: "Jackets and Gilets", href: "/in/kids/clothing/tracksuits", next: false,class:"Clothing" },
    ],
        },
        {title:"Kids By Age",next:true,class:"kidsbyage",
          submenu: [
      { title: "Older Kids (7 - 14 years)", href: "/in/kids/age/babies", next: false,class:"Kids By Age"},
      { title: "Younger Kids (4 - 7 years)", href: "/in/kids/age/babies", next: false,class:"Kids By Age"},
      { title: "Babies & Toddlers (0 - 4 years)", href: "/in/kids/age/older-kids", next: false,class:"Kids By Age" },
    ],
        },
        {title:"Shop By Sports",next:true,class:"shopbysport",
          submenu: [
            { title: "Football", href: "/in/kids/sport/football", next: false,class:"Shop By Sports" },
            { title: "Running", href: "/in/kids/sport/football", next: false,class:"Shop By Sports" },
            { title: "Basketball", href: "/in/kids/sport/basketball", next: false,class:"Shop By Sports" },
            { title: "Gym and Training", href: "/in/kids/sport/basketball", next: false,class:"Shop By Sports" },
    ],
        },
        {title:"Accessories and Equipment",next:true,class:"accessories",
          submenu: [
      { title: "All Accessories and Equipment", href: "/in/kids/accessories/backpacks", next: false,class:"Accessories and Equipment" },
      { title: "Bags and Backpacks", href: "/in/kids/accessories/backpacks", next: false,class:"Accessories and Equipment" },
      { title: "Socks", href: "/in/kids/accessories/water-bottles", next: false,class:"Accessories and Equipment" },
      { title: "Hats and Headwear", href: "/in/kids/accessories/water-bottles", next: false,class:"Accessories and Equipment" },
    ]
        },
    ],

    "sale":[
        {title:"Shop All Sale",next:false,href:'/in/newarrivals',
          submenu: [
      { title: "Shoes", href: "/in/sale/men/shoes", next: false,class:"Men's Sale" },
      { title: "Clothing", href: "/in/sale/men/clothing", next: false,class:"Men's Sale" },
    ],},
        {title:"Bestsellers",next:false,href:"in/bestsellers",
          submenu: [
      { title: "Shoes", href: "/in/sale/men/shoes", next: false,class:"Men's Sale" },
      { title: "Clothing", href: "/in/sale/men/clothing", next: false,class:"Men's Sale" },
    ],},
        {title:"Last Chance",next:false,
          submenu: [
      { title: "Shoes", href: "/in/sale/men/shoes", next: false,class:"Men's Sale" },
      { title: "Clothing", href: "/in/sale/men/clothing", next: false,class:"Men's Sale" },
    ],},
        {title:"Men's Sale",next:true,class:"menssale",
          submenu: [
      { title: "Shoes", href: "/in/sale/men/shoes", next: false,class:"Men's Sale" },
      { title: "Clothing", href: "/in/sale/men/clothing", next: false,class:"Men's Sale" },
      { title: "Accessories and Equipment", href: "/in/sale/men/clothing", next: false,class:"Men's Sale" },
    ],
        },
        {title:"Women's Sale",next:true,class:"womenssale",
          submenu: [
      { title: "Shoes", href: "/in/sale/women/shoes", next: false,class:"Women's Sale" },
      { title: "Clothing", href: "/in/sale/women/clothing", next: false,class:"Women's Sale" },
      { title: "Accessories and Equipment", href: "/in/sale/women/clothing", next: false,class:"Women's Sale" },
    ],
        },
        {title:"Kid's Sale",next:true,class:"kidssale",
          submenu: [
      { title: "Shoes", href: "/in/sale/kids/shoes", next: false,class:"Kid's Sale" },
      { title: "Clothing", href: "/in/sale/kids/clothing", next: false,class:"Kid's Sale" },
      { title: "Accessories and Equipment", href: "/in/sale/kids/clothing", next: false,class:"Kid's Sale" },
    ],
        },
        {title:"Shop By Sports",next:true,class:"shopbysport",
          submenu: [
      { title: "Football", href: "/in/sale/last-chance", next: false,class:"Shop By Sports" },
      { title: "Running", href: "/in/sale/almost-gone", next: false,class:"Shop By Sports" },
      { title: "Basketball", href: "/in/sale/almost-gone", next: false,class:"Shop By Sports" },
      { title: "Gym and Training", href: "/in/sale/almost-gone", next: false,class:"Shop By Sports" },
      { title: "Tennis", href: "/in/sale/almost-gone", next: false,class:"Shop By Sports" },
    ]
        }
    ]
}

const TitleItem = {"new":"New & Featured","men":"Men","women":"Women","kids":"kids","sale":"Sale"}
    
type Categorytype = keyof typeof InnerItem

 type SubCategoryItem = {
  title: string;
  href: string;
  next: boolean;
  class:string;
};

const InnerMenu = ({category,setSubCategory, handleClick2, handleBack,setShowInnerMenu, handlemenuClose,}:  {category:Categorytype, setSubCategory:(value:SubCategoryItem[])=>void,
  handleClick2:()=>void, handleBack:()=>void,setShowInnerMenu:(value:boolean)=>void ,handlemenuClose:()=>void}) => {
    
  return (
    <div className={styles['innermenu']}>
      <div className={styles['innermenu-head']}>
        <button onClick={handleBack} className={styles['innermenu-head-allbutton']} >
            <img src="/icons/left.png" alt="" />
            <span>All</span>
        </button>
        <button onClick={()=>{handlemenuClose(); setShowInnerMenu(false)}} ><img src="icons/cross.png" alt="" /></button>
      </div>

      <h1>{TitleItem[category as keyof typeof TitleItem]}</h1>

      <div className={styles['navbarmenu-btn']}>
        {InnerItem[category].map((item,index)=>(
          <React.Fragment key={index}>
            {item.next ? <button onClick={()=>{setSubCategory(item.submenu); handleClick2()}} ><span className={styles['innermenu-span']} >{item.title}</span><img src="icons/right.png" alt="" /></button> : 
            <button><Link className={styles['innermenu-span']} href={"/in/launch"}>{item.title}</Link></button>}
          </React.Fragment>
      ))}
      </div>

    </div>
  )
}

export default InnerMenu
