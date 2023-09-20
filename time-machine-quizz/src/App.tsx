import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import Eula from "./pages/Eula";
import { ROUTES } from "./config/routes.constants";
import Category from "./pages/Category";
import { getData } from "./services/get-data";
import Question from "./pages/Question";
import Result from "./pages/Result";
import End from "./pages/End";

function App() {
  getData();
  return (
  <BrowserRouter>
    <Routes>
      <Route path={ROUTES.HOME} element={<Home />}/>
      <Route path={ROUTES.EULA} element={<Eula />}/>
      <Route path={ROUTES.CATEGORY} element={<Category />}/>
      <Route path={ROUTES.QUESTION} element={<Question />}/>
      <Route path={ROUTES.RESULT} element={<Result />}/>
      <Route path={ROUTES.END} element={<End />}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;

