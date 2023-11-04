function NavBar({ setPokemonIndex, pokemonList }) {
  const pokeClick = (index) => {
    setPokemonIndex(index)
  }
  return (
    <>
      {pokemonList.map((poke,index) => (
        <button key={index} onClick={() => pokeClick(index)}>
          {poke.name}
        </button>
      ))}
    </>
  );
}

export default NavBar;
