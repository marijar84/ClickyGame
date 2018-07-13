import React from "react";

import "./Card.css";


const Card = props => (
    <div>
        <div className="card">
            <div className="img-container">
                <img src={props.url} alt={props.name} id={props.id} onClick={() => props.clickImage(props.id)} />
            </div>
        </div>
    </div>
);

export default Card;