import React from 'react';
import { useParams } from 'react-router-dom';
import { useFetch } from '../../../customHooks/useFetch';
import CardList from './CardList';
import s from './CardContainer.module.css';

const CardContainer = () => {
    const { categoryId } = useParams();

    const endpoint = categoryId ? `category/${categoryId}` : '';

    // eslint-disable-next-line
    const { data, loading, error } = useFetch(endpoint);

 
    return (
        <div className={s.container}>
            {data && (
                <>
                    {loading ? (
                        <h1>Cargando...</h1>
                    ) : (
                        <>
                            {categoryId ? (
                                <h2>
                                    Conocé nuestras{' '}
                                    {categoryId.toLocaleLowerCase()}
                                </h2>
                            ) : (
                                <h2>Mirá todos nuestros artículos</h2>
                            )}
                            <CardList
                                items={data}
                            />
                        </>
                    )}
                </>
            )}
        </div>
    );
};

export default CardContainer;
