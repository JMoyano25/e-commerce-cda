import React from 'react';
import Card from './Card';
import s from './CardList.module.css';

const CardList = ({ items }) => {  
    return (
        <div className={s.listCards}>
            {items.map((prod) => (
                <Card prod={prod} key={prod.id} />
            ))}
        </div>
    );
};

export default CardList;
