import React from 'react';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <div>
      <div className="max-w-full">
        <div className=" bg-red-500 z-0 h-12"></div>
        <div className=" bg-black z-0 h-8"></div>
        <div className="bg-white rounded-full z-1 bottom-14 relative h-14 w-14 border-solid border-4 border-black flex items-center justify-center ml-auto mr-10 circle_header">
          <div className="bg-black rounded-full h-8 w-8"></div>
        </div>
        <div className="w-[240px] bottom-32 left-16 relative">
          <img src="/poke_img.png" alt="pokedex" />
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default MainLayout;
