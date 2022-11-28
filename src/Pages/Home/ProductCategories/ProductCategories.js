import React from 'react';
import { useQuery } from '@tanstack/react-query';
import ProductCategoryCard from '../ProductCategoryCard/ProductCategoryCard';
const ProductCategories = () => {
    const { data: categories = [] } = useQuery({
        queryKey: ['categoryCollection'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/category');
            const data = await res.json();
            return data;
        }
    });
    return (
        <div>

            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6'>
                {
                    categories.map(cat => <ProductCategoryCard key={cat._id} category={cat}></ProductCategoryCard>)
                }
            </div>

        </div>
    );
};

export default ProductCategories;