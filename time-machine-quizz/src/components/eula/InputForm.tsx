import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from "../../config/routes.constants";

function UserInputForm() {
    const [name, setName] = useState('');
    const [isInputEmpty, setIsInputEmpty] = useState(true);
    const navigate = useNavigate();

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value;
        setName(inputValue);
        setIsInputEmpty(inputValue.trim() === '');
    };

    const goToNextPage = () => {
        navigate(ROUTES.EULA);
    };

    return (
        <form className="form" onSubmit={goToNextPage}>
            <label htmlFor="nameInput">Votre nom ou adresse mail :</label>
            <input
                type="text"
                id="nameInput"
                name="nameInput"
                value={name}
                onChange={handleInputChange}
                required
            />
            <button
                type="submit"
                className={`primary ${isInputEmpty ? 'disabled' : ''}`}
                disabled={isInputEmpty}
            >
                Valider
            </button>
        </form>
    );
}

export default UserInputForm;
