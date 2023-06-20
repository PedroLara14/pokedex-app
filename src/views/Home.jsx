import React, { useContext, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

const Home = () => {
  const [nameValue, setNameValue] = useState('');
  const [nameError, setNameError] = useState(null);
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const newNameValue = e.target.value;

    setNameValue(newNameValue);
    if (newNameValue === '') setNameError('Name is required ');
    /*else if (!/^[A-Z][a-z]{2,}$/.test(newNameValue))
      setNameError('Only letters and blanks are allowed and least should be 3 letters');*/ else
      setNameError(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!nameError) {
      setUser(nameValue);
    }
  };
  return (
    <div className="flex flex-col justify-center h-screen max-h-screen ">
      <div className="flex justify-center">
        <img src="/poke_img.png" className="pokedex_img" alt="pokedex" />
      </div>
      <div className="text-center">
        <h1 className="text-red-600 mb-4  text-4xl font-bold">Hi trainer!</h1>
        <p>
          to see the information of the pokemon tell me your trainer name.
        </p>
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-row justify-center items-center mt-8 gap-3"
      >
        <input
          className="trainer_input"
          type="text"
          value={nameValue}
          onChange={handleChange}
          placeholder='Enter your trainer name.'
        />
        <button className="input_btn" type="submit">
          Let Start
        </button>
      </form>
      {nameError && <p className="text-red-600 text-center mt-4">{nameError}</p>}

      {user && <Navigate to="/pokedex" />}
      <div className="w-full h-[80px] bg-red-600 absolute bottom-0">
        <div className="w-full h-[35px] bg-[#0c0c0c] absolute bottom-0"></div>
        <div className="circle"></div>
      </div>
    </div>
  );
};

export default Home;
