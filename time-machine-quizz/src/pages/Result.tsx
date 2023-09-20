import React from 'react';
import Layout from "../components/common/Layout";
import { ROUTES } from "../config/routes.constants";
import Bubble from "../components/result/Bubble";

function Result() {

    const bubbles = ["red", "green", "grey", "grey", "grey", "grey", "grey", "grey", "grey", "grey"]
    const success = true;

    return (
        <Layout leaveButton score={"0"} time={"0"}>
            <div className={`container result ${success ? "success" : "failure"}`}>
                <h1 className={"result-title"}>{success ? "Bravo !" : "Mauvaise réponse."}</h1>
                {!success && <p>La réponse correcte était <strong>Titanic</strong>.</p>}
                <p>Score actuel : 1/2</p>
                <div className={"bubbles"}>
                    {bubbles.map(bubble => {
                        return <Bubble name={bubble}/>
                    })}
                </div>
                <a href={ROUTES.END}>
                    <button
                        className={"primary"}
                    >
                        Question suivante
                    </button>
                </a>
            </div>
        </Layout>
    );
}

export default Result;
