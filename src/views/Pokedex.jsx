import React, { useContext, useEffect, useState } from 'react';
import PokemonList from '../components/PolemonList';
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
        <span className="text-red-500 font-bold">Bienvenid@ {user}, </span>aquí
        encontrarás tus pokemons favoritos
      </p>
      <div className="flex flex-wrap content-center relative max-w-full bottom-8 ">
        <input
          type="text"
          placeholder="Buscar por nombre ..."
          value={searchTerm}
          onChange={handleChange}
          className="drop-shadow-lg mr-20 h-8 w-80 pl-2 ml-10 rounded"
        />
        <form className="drop-shadow-lg">
          {' '}
          Pokemons por tipos{'   '}
          <select className="h-8 rounded text-red-400  font-bold" name="pokemon_type ">
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
