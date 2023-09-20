import React from 'react';
import UserInputForm from "../components/eula/InputForm";
import Layout from "../components/common/Layout";

function Home() {

  return (
      <Layout score={"0"} time={"0"} displayHighScores>
          <div className="container">
              <h1>Bienvenue !</h1>
              <p>Ce jeu va changer votre vie blablabla</p>
              <UserInputForm/>
          </div>
      </Layout>
  );
}

export default Home;
