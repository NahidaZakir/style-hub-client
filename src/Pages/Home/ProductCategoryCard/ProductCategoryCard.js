import React from 'react';
import { Link } from 'react-router-dom';
const ProductCategoryCard = ({ category }) => {
    const { categoryName, categoryImage, categoryId } = category;
    return (
        <div className="card card-compact  bg-base-100 shadow-xl">
            <figure><img src={categoryImage} alt={categoryName} /></figure>
            <div className="card-body">
                <div className='flex justify-between'>
                    <h2 className="card-title text-center">{categoryName}</h2>
                    <Link to={`/category/${categoryId}`}><button className="btn btn-primary">See All</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ProductCategoryCard;