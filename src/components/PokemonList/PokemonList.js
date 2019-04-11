import React from 'react'
import Pokemon from './Pokemon/Pokemon'

const pokemonList = (props) => {
    const {pokemon} = props
    var pmonster = 'Loading...'

    if(pokemon.length > 0){
        pmonster = pokemon.map(pocketmonster => {
            return <Pokemon key={pocketmonster.id} pokebuddy={pocketmonster} />
        })
    }

    return (
        <div>
            {pmonster}
        </div>
        // React.createElement('div', null, React.createElement('h1', null, 'test'))
    )
}

export default pokemonList

