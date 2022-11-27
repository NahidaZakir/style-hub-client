import React from 'react';


const AdvertisedCard = ({ productInfo }) => {
    const { picture, name, location, resalePrice, originalPrice, yearsUsed, postedTime, sellerName, verified } = productInfo;

    return (
        <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure><img src={picture} alt="Album" /></figure>
            <div className="card-body">
                <div>
                    <h2 className="text-3xl my-3">Product {name}</h2>
                    <div className='flex justify-start my-3'>
                        <div>
                            <p className='mr-6 text-xl'>Seller: {sellerName}</p>
                        </div>

                        <div>
                            {
                                verified === "true" && <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>

                            }
                        </div>

                    </div>
                    <p className='text-xl my-3'>Uploaded on: {postedTime}</p>


                    <p className='text-xl my-3'>Location: {location}</p>
                    <p className='text-xl my-3'>Resale Price: ${resalePrice}</p>
                    <p className='text-xl my-3' >Original Price: ${originalPrice}</p>
                    <p className='text-xl my-3'>Years Used: {yearsUsed}</p>


                </div>

            </div>
        </div>
    );
};

export default AdvertisedCard;