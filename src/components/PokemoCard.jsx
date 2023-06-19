import React, { useEffect, useState } from 'react';
import { getData } from '../services/getData';
import { Link } from 'react-router-dom';

const PokemonCard = ({ pokemon }) => {
  const [pokemonInfo, setPokemonInfo] = useState(null);

  const fetchPokemon = async () => {
    const res = await getData(pokemon.url);
    setPokemonInfo(res);
  };

  useEffect(() => {
    fetchPokemon();
  });

  if (!pokemonInfo) {
    return <div>Loading...</div>;
  }
  return (
    <div className="drop-shadow-lg border-2 text-center h-max w-96 rounded-xl">
      <Link to={`/pokedex/${pokemonInfo.id}`}>
        <img
          className="w-80"
          src={pokemonInfo.sprites.front_default}
          alt={`imagen del pokemon ${pokemonInfo.name}`}
        />
        <h2 className="text-2xl font-bold">{pokemonInfo.name}</h2>
        <p>
          {pokemonInfo.types[0].type.name}
          {pokemonInfo.types[1] && ` / ${pokemonInfo.types[1].type.name}`}
        </p>
        <span>tipo </span>
        <hr />
        <div className="flex flex-wrap">
          <p className="mx-12 my-4">
            <span className="font-bold ">HP </span>
            <br />
            {pokemonInfo.stats[0].base_stat}
          </p>
          <p className="mx-12 my-4 pl-10">
            <span className="font-bold">Attack </span>
            <br />
            {pokemonInfo.stats[1].base_stat}
          </p>
          <p className="mx-12 my-4">
            <span className="font-bold">Defense </span>
            <br />
            {pokemonInfo.stats[2].base_stat}
          </p>
          <p className="mx-12 my-4">
            <span className="font-bold">Speed </span>
            <br />
            {pokemonInfo.stats[5].base_stat}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default PokemonCard;
