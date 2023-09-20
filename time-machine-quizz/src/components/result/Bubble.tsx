import React from 'react';

interface BubbleProps {
    name: string
}

function Bubble(props: BubbleProps) {

    return (
        <div className={`circle-container ${props.name}`}>
            <div className="outer-circle"></div>
            <div className="inner-circle"></div>
        </div>
    );
}

export default Bubble;
