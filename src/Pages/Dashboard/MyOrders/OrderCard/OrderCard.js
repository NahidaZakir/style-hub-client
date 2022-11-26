import React from 'react';
import { Link } from 'react-router-dom';
const OrderCard = ({ order }) => {
    const { picture, productName, resalePrice } = order;
    return (
        <div className="card card-compact  bg-base-100 shadow-xl">
            <figure><img src={picture} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{productName}</h2>
                <p>{resalePrice}</p>
                <div className="card-actions justify-end">
                    <Link
                        to={`/dashboard/payment/${order._id}`}
                    >
                        <button
                            className='btn btn-primary btn-sm'
                        >Pay</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default OrderCard;