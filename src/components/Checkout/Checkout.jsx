import React from 'react';
import { useParams } from 'react-router-dom';
import s from './Checkout.module.css';

const Checkout = () => {
    const { idCompra } = useParams();

    return (
        <div className={s.checkoutContainer}>
            <span>Gracias por tu compra! </span>
             con el siguiente codigo podras seguir el
            envío: 
            <span> {idCompra}</span>
        </div>
    );
};

export default Checkout;