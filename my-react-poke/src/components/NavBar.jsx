function NavBar({ setPokemonIndex, pokemonList }) {
  const pokeClick = (index) => {
    setPokemonIndex(index)
  
  if (pokemonList[index].name === 'Pikachu') {
    alert('Pika Pikachu!!!');
  }}
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
