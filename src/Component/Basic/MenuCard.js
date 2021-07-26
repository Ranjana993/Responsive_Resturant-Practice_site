import React from 'react'

function MenuCard({ menuCard }) {
    console.log(menuCard);
    return (
        <>
            {
                menuCard.map((currEle) => {
                    const { name, id, category, image } = currEle;
                    return (
                        <div className="card-container" key={id}>
                            <div className="card">
                                <div className="card-body">
                                    <span className="card-number card-circle subtle"> {id}</span><br />
                                    <span>{name}</span>
                                    <h2>{category}</h2><br />
                                    <span className="card-pallete">
                                        Lorem ipsum dolorsit amet consectetur adipisicing eliy
                                        Veroid libero quo animi aspernatur est facere mole
                                        stiae! Rerum porro, error dolore esse nemo et,
                                        autem, vero eos tenetur animi bvfdsg fsad.</span>
                                    <div>Read...</div>
                                </div>
                                <img className="image-category" src={image} alt="images" />
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}

export default MenuCard;
