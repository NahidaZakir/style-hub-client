import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';
import OrderCard from './OrderCard/OrderCard';


const MyOrders = () => {
    const { user } = useContext(AuthContext);

    const url = `https://style-hub-server.vercel.app/bookings?email=${user?.email}`;

    const { data: bookings = [] } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            return data;
        }
    })


    return (
        <div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>
                {
                    bookings.length > 0 ? bookings.map(order => <OrderCard key={order._id} order={order}></OrderCard>) : <p className="font-bold text-center text-2xl"
                    >No orders added</p>

                }

            </div>


        </div>

    );
};

export default MyOrders;