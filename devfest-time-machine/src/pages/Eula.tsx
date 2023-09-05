import React, { useState } from 'react';
import Layout from "../components/common/Layout";
import { ROUTES } from "../config/routes.constants";

function Eula() {

    const [ isEulaChecked, setIsEulaChecked ] = useState(false);

    return (
        <Layout>
            <div className="container">
                <h1>Conditions d'utilisation</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.</p>

                <div className="checkbox-container">
                    <input
                        type="checkbox"
                        id="eulaCheckbox"
                        checked={isEulaChecked}
                        onChange={() => setIsEulaChecked(!isEulaChecked)}
                        className="checkbox-input"
                    />
                    <label htmlFor="eulaCheckbox" className="checkbox-label">
                        I agree to the terms and conditions
                    </label>
                </div>

                <a href={ROUTES.CATEGORY}>
                    <button
                        className={`primary ${!isEulaChecked ? 'disabled' : ''}`}
                        disabled={!isEulaChecked}
                    >
                        Valider
                    </button>
                </a>
            </div>
        </Layout>
    );
}

export default Eula;
