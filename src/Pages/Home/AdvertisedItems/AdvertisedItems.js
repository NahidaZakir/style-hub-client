import React from 'react';
import { useQuery } from '@tanstack/react-query';
import ProductCard from '../../ProductCard/ProductCard';
import AdvertisedCard from '../AdvertisedCard/AdvertisedCard';
const AdvertisedItems = () => {

    const { data: products = [] } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            try {
                const res = await fetch('https://style-hub-server.vercel.app/advertised', {
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
                products.length > 0 && <>
                    <div className='text-center font-bold text-2xl text-primary'>Advertised Items</div>
                    {
                        products.map(prod => <AdvertisedCard key={prod._id} productInfo={prod}></AdvertisedCard>)
                    }
                </>
            }
        </div>
    );
};

export default AdvertisedItems;