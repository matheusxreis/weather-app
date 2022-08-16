import React from 'react';
import { Routes, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { Home } from '../../modules/weather/presentation/Home';
import { Ranking } from '../../modules/weather/presentation/Ranking';

export function MyRoutes () {
  return (
      <BrowserRouter>
        <Routes>
            <Route
            element={<Home />}
            path='/'
            />
            <Route
            element={<Ranking />}
            path='/ranking'
            />
        </Routes>
        </BrowserRouter>
  );
}
