import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import Header from './Header';
import FormOne from './FormOne';
import FormTwo from './FormTwo';
import FormThree from './FormThree';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<FormOne />} />
        <Route path="/formtwo" element={<FormTwo />} />
        <Route path="/formthree" element={<FormThree />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
