function getImage(name, shiny = false){
	image_name = simplifyName(name);
	state = shiny ? 'shiny' : 'normal';
	if (pokemon[name] >= 722)
		return `https://img.pokemondb.net/sprites/sun-moon/dex/${state}/${image_name}.png`;
	else
		return `https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/${state}/${image_name}.png`;
}

function getIcon(name){
	icon_name = simplifyName(name);
	return `https://img.pokemondb.net/sprites/sun-moon/icon/bulbasaur.png`
}

function simplifyName(name){
	return name.toLowerCase().replace('♀', '-f').replace('♂', '-m').replace(/[.':]/g, '').replace(/\W/g, '-');
}
