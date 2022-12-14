import React from 'react';
import { useParams } from 'react-router-dom';
import { useFetch } from '../../../customHooks/useFetch';
import CardDetail from './CardDetail';
import s from './CardDetail.module.css';

const DetailContainer = () => {
    const { id } = useParams();

    // eslint-disable-next-line
    const { data, loading, error } = useFetch(`detail/${id}`);

    return (
        <>{loading ? 
        <h1>Cargando...</h1>
        :
        <div className={s.detailContainer}>
            {data ? <CardDetail item={data} /> : <h1>Cargando...</h1>}
        </div>
        }
        </>
        
    );
};

export default DetailContainer;
