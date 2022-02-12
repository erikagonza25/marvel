import React from 'react';
import styled from 'styled-components';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './elementos/Header';
import Home from './views/Home';
import CharactersResult from './views/Characters';
import Error from './views/Error';

/* const PAGE_NUMBER = 1; */

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Main>
        <Routes>
          <Route path="*" element={<Error />} />
          <Route path="/" element={<Home />} />
          <Route path="/characters" element={<CharactersResult />} />
        </Routes>
      </Main>
    </BrowserRouter>
  );
};

const Main = styled.main`
  padding: 40px;
`;
export default App;
