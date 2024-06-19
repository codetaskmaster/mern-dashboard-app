import React, { useMemo } from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { themeSettings } from './theme.js';
import { useSelector } from 'react-redux';

import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';
import Layout from './scenes/layout/index.jsx';
import Dashboard from './scenes/dashboard/index.jsx';
import Products from './scenes/products/index.jsx';
import Customers from './scenes/customers/index.jsx';

const App = () => {
  const mode = useSelector((state) => state.global.mode);
  const theme = useMemo(
    () => createTheme(themeSettings(mode)),
    [mode]
  );
  return (
    <div>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route element={<Layout />}>
              <Route
                path="/"
                element={<Navigate to="/dashboard" replace />}
              />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/products" element={<Products />} />
              <Route path="/customers" element={<Customers />} />
            </Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;
