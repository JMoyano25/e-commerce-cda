import React, { useContext } from 'react';
import s from './Nav.module.css';
import carrito from '../../assets/cart_white.svg';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

const categories = [
    {
        id: 1,
        name: 'Remeras',
        path: '/category/remeras',
    },
    {
        id: 2,
        name: 'Camisas',
        path: '/category/camisas',
    },
    {
        id: 3,
        name: 'Gorras',
        path: '/category/gorras',
    },
    {
        id: 4,
        name: 'Billeteras',
        path: '/category/billeteras',
    },
    {
        id: 5,
        name: 'Riñoneras',
        path: '/category/rinoneras',
    },
];
const redesSociales = [
    {
        id: 1,
        name: 'Instagram',
        path: '',
    },
    {
        id: 2,
        name: 'Facebook',
        path: '',
    },
    {
        id: 3,
        name: 'Twitter',
        path: '',
    }
];

const Nav = ({isInHeader}) => {
    const { totalUnidades } = useContext(CartContext);

    return (
        <>
            {isInHeader ? 
                <nav className={s.nav}>
                <Link className={s.logo} to="/">
                    <h2>E-Commerce</h2>
                </Link>
                <ul>
                    {categories.map((categorie) => (
                        <Link
                            key={categorie.id}
                            className= {s.linkNav}
                            to={categorie.path}
                        >
                            {categorie.name}
                        </Link>
                    ))}
                </ul>
                <div >
                    <Link className={s.cart} to="/cart">
                        <div>
                            <img
                                src= {carrito}
                                alt="logo"
                                className={s.logoCart}
                            />
                            <span className={s.unidadesCart}>
                                {totalUnidades === 0 ? null : totalUnidades}
                            </span>
                        </div>
                    </Link>
                </div>
            </nav>
        :
        <nav className={s.navFooter}>
                <ul>
                    {redesSociales.map((redes) => (
                        <Link
                            key={redes.id}
                            className= {s.linkFooter}
                            to={redes.path}
                        >
                            {redes.name}
                        </Link>
                    ))}
                </ul>
            </nav>
        }

        </>
        
    );
};

export default Nav;
