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
    <div className="pokemon-card">
      <Link to={`/pokedex/${pokemonInfo.id}`}>
        <header className="header-pokemon-card">
          <img
            className="img-pokemon-card"
            src={pokemonInfo.sprites.other['official-artwork'].front_default}
            alt={`imagen del pokemon ${pokemonInfo.name}`}
          />
        </header>
        <div>
          <h2 className="pokemon-card-name">{pokemonInfo.name}</h2>
          <span className="pokemon-card-type-text">Type</span>
          <p className="pokemon-card-type">
            {pokemonInfo.types[0].type.name}
            {pokemonInfo.types[1] && ` / ${pokemonInfo.types[1].type.name}`}
          </p>
          <hr className="pokemon-card-hr" />
          <ul className="pokemon-card-stats-ul">
            <li className="pokemon-card-stats-container">
              hp
              <span className="pokemon-card-stats-number">
                {pokemonInfo.stats[0].base_stat}
              </span>
            </li>
            <li className="pokemon-card-stats-container">
              attack
              <span className="pokemon-card-stats-number">
                {pokemonInfo.stats[1].base_stat}
              </span>
            </li>
            <li className="pokemon-card-stats-container">
              defense
              <span className="pokemon-card-stats-number">
                {pokemonInfo.stats[2].base_stat}
              </span>
            </li>
            <li className="pokemon-card-stats-container">
              special attack
              <span className="pokemon-card-stats-number">
                {pokemonInfo.stats[3].base_stat}
              </span>
            </li>
            <li className="pokemon-card-stats-container">
              special defense
              <span className="pokemon-card-stats-number">
                {pokemonInfo.stats[4].base_stat}
              </span>
            </li>
            <li className="pokemon-card-stats-container">
              speed
              <span className="pokemon-card-stats-number">
                {pokemonInfo.stats[5].base_stat}
              </span>
            </li>
          </ul>
        </div>
      </Link>
    </div>
  );
};

export default PokemonCard;
