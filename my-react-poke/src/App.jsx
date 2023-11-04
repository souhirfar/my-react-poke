import PokemonCard from "./components/PokemonCard";
import { useState } from "react";
import "./styles/App.css";
import NavBar from "./components/NavBar";
const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "charmander",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    name: "squirtle",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    name: "pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {
    name: "mew",
  },
];

function App() {
  
  const [pokemonIndex, setPokemonIndex] = useState(0);
  function buttonNext() {
    setPokemonIndex(pokemonIndex + 1);
  }

  const buttonPrev = () => {
    pokemonIndex > 0;
    setPokemonIndex(pokemonIndex - 1);
  };

  return (
    <div>
      <PokemonCard pokemon={pokemonList[pokemonIndex]} />
      <NavBar pokemonIndex={pokemonIndex} 
      buttonNext={buttonNext}
      buttonPrev={buttonPrev}
      pokemonList={pokemonList}

      button/>
    </div>
  );
}
export default App;
