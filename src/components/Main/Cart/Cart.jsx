import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../../context/CartContext';
import CartDetail from './CartDetail';
import s from './Cart.module.css';
import Form from '../../Form/Form';

const Cart = () => {
    const { cart, clearCart, deleteOne, totalPrice, disminuir, aumentar } = useContext(CartContext);
    
    if (cart.length === 0) {
        return (
            <div className={s.cartContainer}>
                <h1>
                    Aún no tenés ningún producto en el carrito,{' '}
                    <Link to="/">Acá</Link> vas a poder encontrar todo lo que
                    buscás
                </h1>
            </div>
        );
    }
    return (
        <>
            <div className={s.cartContainer}>
                <div className={s.containerCartItems}>
                    {cart.map((prod) => (
                        <CartDetail
                            key={prod.id}
                            prod={prod}
                            deleteOne={deleteOne}
                            disminuir={disminuir}
                            aumentar={aumentar}
                        />
                    ))}
                    <div className={s.totalCart}>
                        <button className={s.vaciar} onClick={clearCart}>
                            Vaciar carrito
                        </button>
                        <h2>Total: ${totalPrice}</h2>
                    </div>
                </div>
                <div className={s.formContainer}>
                    <Form
                        cart={cart}
                        totalPrice={totalPrice}
                        clearCart={clearCart}
                    />
                </div>
            </div>
        </>
    );
};

export default Cart;
