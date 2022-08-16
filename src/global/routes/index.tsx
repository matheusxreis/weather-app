import React from 'react';
import { Routes, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { Home } from '../../modules/weather/presentation/Home';

export function MyRoutes () {
  return (
      <BrowserRouter>
        <Routes>
            <Route
            element={<Home />}
            path='/a'
            />
            <Route
            element={<Home />}
            path='/logs'
            />
        </Routes>
        </BrowserRouter>
  );
}
