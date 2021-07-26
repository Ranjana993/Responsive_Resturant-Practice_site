import React from 'react'

function Navbar({ filterItem, menuList }) {
    return (
        <div>
            <nav className="main_header">
                {
                    menuList.map((currList) => {
                        return (
                            <button onClick={() => filterItem(currList)} className="btn_group">{currList}</button>
                        )
                    })
                }
            </nav><br />
        </div>
    )
}

export default Navbar
