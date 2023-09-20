import React from 'react';
import Layout from "../components/common/Layout";
import { ROUTES } from "../config/routes.constants";

function Category() {

    return (
        <Layout leaveButton score={"0"} time={"0"}>
            <div className="container">
                <h1>Catégorie : acteur/actrice</h1>
                <p>Votre première question portera sur les acteurs et actrices célèbres.</p>
                <p>Le convecteur temporel propose de vous emmener à trois dates possibles. Laquelle choisissez-vous ?</p>

                <a href={ROUTES.QUESTION}>
                    <button
                        className={"primary"}
                    >
                        Suivant
                    </button>
                </a>
            </div>
        </Layout>
    );
}

export default Category;
