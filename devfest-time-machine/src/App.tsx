import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import Eula from "./pages/Eula";
import { ROUTES } from "./config/routes.constants";
import Category from "./pages/Category";

function App() {
  return (
  <Router>
    <Routes>
      <Route path={ROUTES.HOME} element={<Home />}/>
      <Route path={ROUTES.EULA} element={<Eula />}/>
      <Route path={ROUTES.CATEGORY} element={<Category />}/>
    </Routes>
  </Router>
  );
}

export default App;
