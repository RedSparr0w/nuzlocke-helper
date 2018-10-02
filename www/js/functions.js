function getPokemonImage(pokemon, shiny = false){
  image_name = simplifyPokemonName(name);
  state = shiny ? 'shiny' : 'normal';
  if (pokemon[name] >= 722)
    return `https://img.pokemondb.net/sprites/sun-moon/dex/${state}/${image_name}.png`;
  else
    return `https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/${state}/${image_name}.png`;
}

function getPokemonIcon(name){
  icon_name = simplifyPokemonName(name);
  return `https://img.pokemondb.net/sprites/sun-moon/icon/bulbasaur.png`
}

function simplifyPokemonName(name){
  return name.toLowerCase().replace('♀', '-f').replace('♂', '-m').replace(/[.':]/g, '').replace(/\W/g, '-');
}
