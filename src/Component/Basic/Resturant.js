import React from 'react'
import "./Style.css"
import { useState } from 'react'
import Menu from './MenuApi'
import MenuCard from './MenuCard'
import Navbar from './Navbar'

// import Menu from "./MenuApi"

const UniqueList = [...new Set(Menu.map((currItem) => {
    return currItem.category;
})),
"All"    
]

console.log(UniqueList);

function Resturant() {
    const [menuData, setmenuData] = useState(Menu)
    const [menuList, setMenulist] = useState(UniqueList)

    const filterItem = (category) => {
        if(category==="All"){
            setmenuData(Menu);
            return
        }
    // console.log(menuData);
    
        const updatedList = Menu.filter((currItem) => {
            return currItem.category === category;
        });
        setmenuData(updatedList);
    }
    return (
        <div>
            <Navbar filterItem={filterItem} menuList={menuList} />
            <MenuCard menuCard={menuData} />

        </div>

    )
}

export default Resturant
