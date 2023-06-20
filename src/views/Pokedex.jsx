import React, { useContext, useEffect, useState } from 'react';
import PokemonList from '../components/PokemonList';
import { UserContext } from '../context/UserContext';
import { getData } from '../services/getData';

const Pokedex = () => {
  const { user } = useContext(UserContext);
  const [pokemonsData, setPokemonsData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [types, setTypes] = useState([]);

  const loadData = async () => {
    const res = await getData('https://pokeapi.co/api/v2/pokemon?offset=0&limit=1281');
    const res2 = await getData('https://pokeapi.co/api/v2/type/');

    setPokemonsData(res.results);
    setTypes(res2.results);
  };

  useEffect(() => {
    if (pokemonsData.length === 0) {
      loadData();
    }
  }, [pokemonsData]);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredPokemons = pokemonsData.filter((pokemon) =>
    pokemon.name.includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="">
      <p className="text-center relative bottom-14">
        <span className="text-[#fe1936] font-bold capitalize">Welcome {user}, </span>Here
        you can find your favorite pokemon
      </p>
      <div className="flex flex-wrap content-center relative max-w-full bottom-8 ml-80 mt-4">
        <input
          type="text"
          placeholder="Buscar por nombre ..."
          value={searchTerm}
          onChange={handleChange}
          className="pokemon_input"
        />
        <button className="button-form">Search</button>
        <form className="drop-shadow-lg ml-24">
          {' '}
          Pokemons por tipos{'   '}
          <select className="ml-4 h-10 p-1 rounded text-black font-bold" name="pokemon_type ">
            {types.map((type) => (
              <option key={type.url} value={type.name}>
                {type.name}
              </option>
            ))}
          </select>
        </form>
      </div>
      <PokemonList pokemonsData={filteredPokemons} />
    </div>
  );
};

export default Pokedex;
