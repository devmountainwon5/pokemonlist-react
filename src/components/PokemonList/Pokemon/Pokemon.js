import React from 'react'

const pokemon = (props) => {
    const {name, sprites} = props.pokebuddy
    
    return (
        <div className="pokemon">
            <img src={sprites.front_default} alt={name} />
            <h4>{name}</h4>
        </div>
    )
}
export default pokemon


