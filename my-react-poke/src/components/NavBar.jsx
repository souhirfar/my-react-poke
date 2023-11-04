function NavBar({pokemonIndex, buttonNext, buttonPrev, pokemonList}) {
 

  return (
    <>
      {pokemonIndex > 0 ? <button onClick={buttonPrev}>Précédent</button> : ""}
      {pokemonIndex < pokemonList.length - 1 ? (
        <button onClick={buttonNext}>Suivant</button>
      ) : (
        ""
      )}
    </>
  );
}

export default NavBar;
