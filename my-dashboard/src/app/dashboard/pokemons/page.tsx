import { PokemonGrid, PokemonsResponse, SimplePokemon } from '@/pokemons';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pokemons page',
  description: 'Aqui estan los primeros 151 pokemons'
}

const getPokemons = async (limit = 20, offset = 0): Promise<SimplePokemon[]> => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
  const data: PokemonsResponse = await response.json()

  const pokemons = data.results.map(pokemon => ({
    id: pokemon.url.split('/').at(-2)!,
    name: pokemon.name,
  }));

  // throw new Error('Esto es un error que no deberia existir');

  return pokemons;
}


const PokemonsPage = async () => {

  const pokemons = await getPokemons(151);

  return (
    <div className="flex flex-col">

      <span className="text-5xl my-2">Listado de Pokemon <small>estatico</small></span>

      <PokemonGrid pokemons={pokemons} />

    </div>
  );
}

export default PokemonsPage;