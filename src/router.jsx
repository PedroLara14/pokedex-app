import { createBrowserRouter } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import ProtectedRoute from './components/ProtectedRoute';
import Home from './views/Home';
import Pokedex from './views/Pokedex';
import PokemonDetail from './views/PokemonDetail';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/pokedex',
    element: (
      <ProtectedRoute>
        {' '}
        <MainLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: '',
        element: <Pokedex />,
      },
      {
        path: ':id',
        element: <PokemonDetail />,
      },
    ],
  },
]);
