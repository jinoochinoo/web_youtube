import React, { Suspense, lazy } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from './components/section/Main'

const Home = lazy(() => import('./pages/Home'));
const TableTemplate = lazy(() => import('./pages/TableTemplate'));
const CardTemplate = lazy(() => import('./pages/CardTemplate'));
const Search = lazy(() => import('./pages/Search'));
const Not = lazy(() => import('./pages/Not'));

const App = () => {
  return (
      <BrowserRouter>
        <Suspense fallback={<Main />}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/tableTemplate' element={<TableTemplate />} />
            <Route path='/cardTemplate' element={<CardTemplate />} />
            <Route path='/search/:searchId' element={<Search />} />
            <Route path='*' element={<Not />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
  );
}

export default App;
