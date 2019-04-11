import React, { Component } from "react";
import "./App.css";
import axios from 'axios'

import PokemonList from './components/PokemonList/PokemonList'

class App extends Component {
  constructor(){
    super()
    this.state = {
      pokemonList: [],
      count: 1,
      limit: 9
    }
  }

  componentDidMount(){
    this.grabNewPokemon(this.state.count)
  }
  
  grabNewPokemon(num){
    let pokemonCopyList = this.state.pokemonList.slice()
    axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`).then(resp => {
      pokemonCopyList.push(resp.data)
      this.setState({pokemonList: [...pokemonCopyList]})

      if (this.state.count !== this.state.limit){
        this.setState({
          count: this.state.count + 1
        })
        this.grabNewPokemon(this.state.count)
      }

    })
  }

  render(){
    return (
      <div id="App">
        <PokemonList pokemon={this.state.pokemonList} />
      </div>
    )
  }
}

export default App;
