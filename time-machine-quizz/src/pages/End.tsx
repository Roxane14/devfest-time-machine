import React from 'react';
import Layout from "../components/common/Layout";
import { ROUTES } from "../config/routes.constants";
import Statistic from "../components/end/Statistic";

function End() {

    return (
        <Layout score={"0"} time={"0"}>
            <div className="container">
                <h1>Merci pour votre participation !</h1>
                <div className={"stats"}>
                    <Statistic image={"score"} label={"Score"} value={"17"}/>
                    <Statistic image={"temps"} label={"Temps"} value={"12'30'"}/>
                    <Statistic image={"rang"} label={"Rang"} value={"2ème"}/>
                </div>

                <p>Au plaisir de vous revoir à un prochain jeu !</p>

                <a href={ROUTES.HOME}>
                    <button
                        className={"primary"}
                    >
                        Terminer
                    </button>
                </a>
            </div>
        </Layout>
    );
}

export default End;
