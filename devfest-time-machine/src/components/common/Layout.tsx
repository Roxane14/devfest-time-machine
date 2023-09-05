import React, { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

interface HeaderProps {
    children: ReactNode
}

function Layout(props: HeaderProps) {

    const navigate = useNavigate();

    return (
        <div className="page">
            <header className="header">
                <button className="button back-button" onClick={() => navigate(-1)}>
                    Retour
                </button>
                <span className="timer">00:00</span>
            </header>
            {props.children}
        </div>
    );
}

export default Layout;
