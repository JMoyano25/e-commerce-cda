import React from 'react';
import useCounter from '../../customHooks/useCounter';
import s from './Counter.module.css';

const Counter = ({ stock, initial, onAdd }) => {
    const { count, aumentar, restar } = useCounter(stock, initial);

    const agregar = () => {
        onAdd(count);
    };

    return (
        <div className={s.counter}>
            <div className={s.addSub}>
                <button onClick={restar}>-</button>
                <p>{count}</p>
                <button onClick={aumentar}>+</button>
            </div>
            <div>
                <button className={s.add} onClick={agregar}>
                    Agregar al carrito
                </button>
            </div>
        </div>
    );
};

export default Counter;
