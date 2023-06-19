import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import '../style.css';

const PokemonDetail = () => {
  const [pokemonInfo, setpokemonInfo] = useState(null);

  const { id } = useParams();

  const getPokemonById = async () => {
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    return res.data;
  };

  useEffect(() => {
    const loadData = async () => {
      const pokemon = await getPokemonById();
      setpokemonInfo(pokemon);
    };

    loadData();
  });
  return (
    <main>
      {pokemonInfo ? (
        <section className="principal">
          <img
            src={pokemonInfo.sprites.front_default}
            alt={`imagen del pokemon ${pokemonInfo.name}`}
          />
          <p className="pokemonId">#{pokemonInfo.id}</p>
          <h2 className="pokemonName">{pokemonInfo.name}</h2>
          <section className="measures">
            <div className="weight">
              <h3>Peso:</h3>
              <p>{pokemonInfo.weight}</p>
            </div>
            <div className="height">
              <h3>Altura:</h3>
              <p>{pokemonInfo.height}</p>
            </div>
          </section>
          <section className="infoBasic">
            <div className="types">
              <h3>Tipo:</h3>
              <div>
                <p>{pokemonInfo.types[0].type.name}</p>
              </div>
              <div>
                <p>{pokemonInfo.types[1] && `${pokemonInfo.types[1].type.name}`}</p>
              </div>
            </div>
            <div className="abilities">
              <h3>Habilidades:</h3>
              <div>
                <p>{pokemonInfo.abilities[0].ability.name}</p>
              </div>
              <div>
                <p>
                  {pokemonInfo.abilities[1] && `${pokemonInfo.abilities[1].ability.name}`}
                </p>
              </div>
            </div>
          </section>
          <div className="stats">
            <h3>Stats</h3>
            <div>
              <p>
                <span>HP: </span>
                {pokemonInfo.stats[0].base_stat}/255
              </p>
            </div>
            <div>
              <p>
                <span>Attack: </span>
                {pokemonInfo.stats[1].base_stat}/190
              </p>
            </div>
            <div>
              <p>
                <span>Defense: </span>
                {pokemonInfo.stats[2].base_stat}/250
              </p>
            </div>
            <div>
              <p>
                <span>Especial-attack: </span>
                {pokemonInfo.stats[3].base_stat}/210
              </p>
            </div>
            <div>
              <p>
                <span>Especial-defense: </span>
                {pokemonInfo.stats[4].base_stat}/250
              </p>
            </div>
            <div>
              <p>
                <span>Speed: </span>
                {pokemonInfo.stats[5].base_stat}/180
              </p>
            </div>
          </div>
        </section>
      ) : (
        <p>la pagina esta cargando ...</p>
      )}
    </main>
  );
};

export default PokemonDetail;
