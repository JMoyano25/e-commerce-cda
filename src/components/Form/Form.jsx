import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import s from './Form.module.css';

const URL = 'https://fake-products-eric.herokuapp.com/api/orders';

const Form = ({ cart, totalPrice, handleId, clearCart }) => {
    const [user, setUser] = useState('');
    const [phone, setPhone] = useState('');
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const order = async () => {
        setLoading(true);
        const enviarInfo = await fetch(URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                cart,
                total: totalPrice,
                user,
                phone,
            }),
        });
        const response = await enviarInfo.json();
        setLoading(false);
        clearCart();
        navigate(`/checkout/${response.id}`);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        order();
    };

    const handleChangeUser = (e) => {
        setUser(e.target.value);
    };
    const handleChangePhone = (e) => {
        const { value, maxLength } = e.target;
        const phone = value.slice(0, maxLength);
        setPhone(phone);
    };

    return (
        <div>
            <form className={s.form} onSubmit={handleSubmit}>
                <span>Nombre:</span>
                <input
                    type="text"
                    name="nombre"
                    placeholder="Ingresa tu nombre"
                    onChange={handleChangeUser}
                    value={user}
                    required={true}
                />
                <span>Telefono:</span>
                <input
                    type="number"
                    name="telefono"
                    placeholder="Ingresa tu telefono"
                    onChange={handleChangePhone}
                    value={phone}
                    required={true}
                    maxLength="10"
                />
                <button>{loading ? 'Finalizando compra....' : 'Finalizar compra'}</button>
            </form>
        </div>
    );
};

export default Form;
