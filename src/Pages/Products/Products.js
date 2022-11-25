import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductCard from '../ProductCard/ProductCard';
const Products = () => {
    const allProducts = useLoaderData();
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6'>
            {
                allProducts.map(prod => <ProductCard key={prod._id} productInfo={prod}></ProductCard>)
            }
        </div>
    );
};

export default Products;