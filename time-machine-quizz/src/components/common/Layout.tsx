import React, { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

interface HeaderProps {
    children: ReactNode
    score: string
    time: string
    backButton?: boolean
    leaveButton?: boolean
    displayHighScores?: boolean
}

function Layout(props: HeaderProps) {

    const navigate = useNavigate();

    return (
        <div className="page">
            <header className="header">
                <div className={"top-left-buttons"}>
                    {props.backButton && <button className="button back-button" onClick={() => navigate(-1)}>
                        Retour
                    </button>}
                    {props.leaveButton && <button className="button leave-button" onClick={() => alert("voulez-vous vraiment quitter ?")}>
                        Quitter
                    </button>}
                </div>
                <div className={"logo-container"}>
                    <img src={require("../../assets/logo.png")} alt={"logo back to the future"}/>
                </div>
                <div className={"top-right-labels"}>
                    <div className={"score"}>
                        <span className="label">{props.displayHighScores ? "High score": "Score"}</span>
                        <span className="value">{props.score}</span>
                    </div>
                    <div className={"time"}>
                        <span className="label">{props.displayHighScores ? "High time": "Time"}</span>
                        <span className="value">{props.time}</span>
                    </div>
                </div>
            </header>
            {props.children}
        </div>
    );
}

export default Layout;
