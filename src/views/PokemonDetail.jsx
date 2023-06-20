import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
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
        <div className="pokemon-info-container">
          <a className="go-to-pokemon-list" href="/#pokemon/">
            {'<'}
          </a>
          <article className="card-info">
            <header className="header-card-info">
              <button className="preview-next-pokemon-info">{'<'}</button>
              <img
                src={pokemonInfo.sprites.other['official-artwork'].front_default}
                alt={`imagen del pokemon ${pokemonInfo.name}`}
                className="srite-card-info"
              />
              <button className="preview-next-pokemon-info">{'>'}</button>
            </header>
            <div className="body-card-info">
              <section className="general-info-card-info">
                <div className="id-general-info">#{pokemonInfo.id}</div>
                <hr className="hr-card-info" />
                <h1 className="name-pokemon-card-info">{pokemonInfo.name}</h1>
                <ul className="height-weight-container">
                  <li className="height-weight">
                    <span className="span-height-weight">Weight</span>
                    {pokemonInfo.weight}
                  </li>
                  <li className="height-weight">
                    <span className="span-height-weight">Height</span>
                    {pokemonInfo.height}
                  </li>
                </ul>
                <ul className="type-habilities-container">
                  <li className="text-center">
                    <span className="span-type-habilities">Type</span>
                    <div className="type-habilities-flex">
                      <div className="type-habilitie">
                        {pokemonInfo.types[0].type.name}
                      </div>
                    </div>
                  </li>
                  <li className="text-center">
                    <span className="span-type-habilities">Abilites</span>
                    <div className="type-habilities-flex">
                      <div className="type-habilitie ability-card-info">
                        {pokemonInfo.abilities[0].ability.name}
                      </div>
                      <div className="type-habilitie ability-card-info">
                        {pokemonInfo.abilities[1].ability.name}
                      </div>
                    </div>
                  </li>
                </ul>
              </section>
              <section></section>
            </div>
          </article>
          <article className="movement-container">
            <hr className="separator-movement" />
            <h2 className="movement-title">Movements </h2>
            <div className="movement-tag-container">
              {pokemonInfo?.moves.map((move) => (
                <p className="movement-tag">"Insertar Ataque"</p>
              ))}
            </div>
          </article>

          {/* <p className="pokemonId">#{pokemonInfo.id}</p>
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
          </div> */}
        </div>
      ) : (
        <p>la pagina esta cargando ...</p>
      )}
    </main>
  );
};

export default PokemonDetail;
