import React from "react";


const Card = ({persona}) => {
    return (
        <div>
            <h3>Hola {persona.nombre}, tu serie favorita es {persona.serie}</h3>
        </div>
    )
};

export default Card;