import React from 'react';
import UserInputForm from "../components/eula/InputForm";
import Layout from "../components/common/Layout";

function Home() {

  return (
      <Layout>
          <div className="container">
              <h1>Bienvenue !</h1>
              <p>Vous allez participer à un jeu blablabla</p>
              <UserInputForm/>
          </div>
      </Layout>
  );
}

export default Home;
