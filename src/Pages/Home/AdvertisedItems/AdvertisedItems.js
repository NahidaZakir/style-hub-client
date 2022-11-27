import React from 'react';
import { useQuery } from '@tanstack/react-query';
import ProductCard from '../../ProductCard/ProductCard';
import AdvertisedCard from '../AdvertisedCard/AdvertisedCard';
const AdvertisedItems = () => {

    const { data: products = [] } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            try {
                const res = await fetch('http://localhost:5000/advertised', {
                    headers: {
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    }
                });
                const data = await res.json();
                return data;
            }
            catch (error) {

            }
        }
    });
    return (
        <div>

            {
                products.map(prod => <AdvertisedCard key={prod._id} productInfo={prod}></AdvertisedCard>)
            }
        </div>
    );
};

export default AdvertisedItems;