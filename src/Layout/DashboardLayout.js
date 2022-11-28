import React, { useContext, useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';
import useAdmin from '../hooks/useAdmin';
import Navbar from '../Pages/Shared/Navbar/Navbar';


const DashboardLayout = () => {
    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email);
    const [account, setAccountType] = useState('');

    useEffect(() => {
        fetch(`http://localhost:5000/users/${user?.email}`)
            .then(res => res.json())
            .then(data => setAccountType(data.accountType));
    }, [])
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 text-base-content">

                        {
                            account === "seller" && <><li><Link to="/dashboard/myproducts">My products</Link></li>
                                <li><Link to="/dashboard/addproduct">Add a product</Link></li></>
                        }
                        {
                            account === "buyer" && <><li><Link to="/dashboard/myorders">My Orders</Link></li><li></li></>

                        }








                        {
                            isAdmin && <>
                                <li><Link to="/dashboard/sellers">All Sellers</Link></li>
                                <li><Link to="/dashboard/buyers">Add Buyers</Link></li>

                            </>
                        }

                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;