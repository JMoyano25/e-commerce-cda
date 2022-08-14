import React, { useContext } from 'react';
import s from './CardDetail.module.css';
import Counter from '../../Counter/Counter';
import { Link, useNavigate } from 'react-router-dom';
import { CartContext } from '../../../context/CartContext';
import { isIn } from '../../../utils/utils';

const CardDetail = ({ item }) => {
    const { addToCart, cart } = useContext(CartContext);

    const isInCartDetail = isIn(cart, item.id);

    const navigate = useNavigate();

    const onAdd = (cantidad) => {
        addToCart(item, cantidad);
        navigate('/cart');
    };

    return (
        <div className={s.detail}>
            <img src={item?.img} alt={item?.name} />
            <div className={s.info}>
                <h2>{item?.name}</h2>
                <p>
                    Detalle del producto
                </p>
                <h4>#{item?.categoria}</h4>
                <h3>$ {item?.price}.-</h3>
                {isInCartDetail ? (
                    <h4>
                        Ya está en el <Link to="/cart">carrito</Link>
                    </h4>
                ) : (
                    <Counter stock={item?.stock} initial={1} onAdd={onAdd} />
                )}
            </div>
        </div>
    );
};

export default CardDetail;

