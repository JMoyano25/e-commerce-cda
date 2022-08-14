import React from 'react';
import { Link } from 'react-router-dom';

import s from './Card.module.css';

const Card = ({ prod }) => {
    
    return (
        <div className={s.card}>
            <img src={prod.img} alt={prod.name} />
            <div className={s.info}>
                <h3>{prod.name}</h3>
                <h4>$ {prod.price}</h4>
                <Link className={s.detalle} to={`/detail/${prod.id}`}>
                    Ver Detalle
                </Link>
            </div>
        </div>
    );
};

export default Card;
