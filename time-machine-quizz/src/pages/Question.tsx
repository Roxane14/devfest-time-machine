import React from 'react';
import Layout from "../components/common/Layout";

function Question() {

    return (
        <Layout leaveButton score={"0"} time={"0"}>
            <div className="container question">
                <img src={require("../assets/oscar.png")} alt={"logo oscar"}/>
                <h1>Qui a gagné l’Oscar du meilleur film en 1998 ?</h1>
            </div>
            <div className={"options"}>
                <button className="container">
                    <h1>Titanic</h1>
                </button>
                <button className="container">
                    <h1>Barbie</h1>
                </button>
                <button className="container">
                    <h1>Oppenheimer</h1>
                </button>
                <button className="container">
                    <h1>Thor 4</h1>
                </button>
            </div>


        </Layout>
    );
}

export default Question;
