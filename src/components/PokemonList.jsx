import React, { useState } from 'react';
import { usePagination } from '../hooks/usepagination';
import PokemonCard from './PokemoCard';

const PokemonList = ({ pokemonsData }) => {
  const [quantity, setQuantity] = useState(20);
  const {
    listSlice: pokemonsDataSlice,
    currentPage,
    pages,
    nextPage,
    previousPage,
    changePageTo,
  } = usePagination(pokemonsData, quantity);
  return (
    <>
      <div className="grid">
        <div className="ml-2 mt-4 pointer container-btns flex flex-wrap gap-2">
          <button className="number-page pages" onClick={previousPage}>
            {'<'}
          </button>
          {pages.map((page) => (
            <div
              onClick={() => changePageTo(page)}
              className={`btn-page number-page number-page-active ${
                page === currentPage ? 'btn-page-active' : ''
              }`}
              key={page}
            >
              {page}
            </div>
          ))}
          <button className="number-page pages" onClick={nextPage}>
            {'>'}
          </button>
          <select
            name="pagination"
            value={quantity.toString()}
            onChange={(e) => setQuantity(+e.target.value)}
            className="hidden"
          >
            <option value="20">20</option>
            <option value="25">25</option>
            <option value="30">30</option>
            <option value="40">40</option>
          </select>
        </div>
      </div>
      <div className="card-container">
        {pokemonsDataSlice.map((pokemon) => (
          <PokemonCard key={pokemon.name} pokemon={pokemon} />
        ))}
      </div>
    </>
  );
};

export default PokemonList;
