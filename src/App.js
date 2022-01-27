import React from 'react';
import { Outlet } from 'react-router-dom';

import './App.css';

import Layout from './components/Layout/Layout';

const themes = {
  light: 'light',
  dark: 'dark',
};

export const ThemeContext = React.createContext(themes);

const App = () => {
  return (
    <ThemeContext.Provider value={themes}>
      <Layout>{<Outlet />}</Layout>
    </ThemeContext.Provider>
  );
};

export default App;
