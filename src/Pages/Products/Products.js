import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from '../BookingModal/BookingModal';
import ProductCard from '../ProductCard/ProductCard';
const Products = () => {
    const allProducts = useLoaderData();
    const [productName, setProductName] = useState(null);
    const [resalePrice, setResalePrice] = useState(null);
    const [picture, setPicture] = useState(null);
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6'>
                {
                    allProducts.map(prod =>
                        <ProductCard
                            key={prod._id}
                            productInfo={prod}
                            setProductName={setProductName}
                            setResalePrice={setResalePrice}
                            setPicture={setPicture}
                        ></ProductCard>)
                }
            </div>
            <BookingModal productName={productName} resalePrice={resalePrice} picture={picture}></BookingModal>
        </div>

    );
};

export default Products;