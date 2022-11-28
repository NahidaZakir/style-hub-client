import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';
const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(err => console.log(err));
    }
    const [account, setAccountType] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:5000/users/${user?.email}`)
            .then(res => res.json())
            .then(data => setAccountType(data.accountType));
    }, [])
    const menuItems = <React.Fragment>
        <li><Link to="/"><button className="btn btn-outline btn-primary font-bold">Home</button></Link></li>
        <li><Link to="/blogs"><button className="btn btn-outline btn-primary font-bold">Blogs</button></Link></li>

        {user?.uid ?
            <>

                <li><Link to="/dashboard"><button className='btn btn-outline btn-primary font-bold'>Dashboard</button></Link></li>
                <li><Link><button className='btn btn-outline btn-primary font-bold' onClick={handleLogOut}>Sign out</button></Link></li>
                <li>
                    {
                        account === "seller" && <>
                            <div className="form-control">
                                <label className="label cursor-pointer">
                                    <span className="label-text mr-3 font-bold text-lg">Seller</span>
                                    <input type="radio" name="radio-2" className="radio radio-primary" checked />
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label cursor-pointer">
                                    <span className="label-text mr-3 font-bold text-lg">Buyer</span>
                                    <input type="radio" name="radio-2" className="radio radio-primary" disabled />
                                </label>
                            </div>
                        </>
                    }
                    {
                        account === "buyer" && <>
                            <div className="form-control">
                                <label className="label cursor-pointer">
                                    <span className="label-text mr-3 font-bold text-lg">Seller</span>
                                    <input type="radio" name="radio-2" className="radio radio-primary" disabled />
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label cursor-pointer">
                                    <span className="label-text mr-3 font-bold text-lg">Buyer</span>
                                    <input type="radio" name="radio-2" className="radio radio-primary" checked />
                                </label>
                            </div>
                        </>
                    }
                </li>
            </>
            : <>
                <li><Link to="/login"><button className='btn btn-outline btn-primary font-bold'>Login</button></Link></li>
                <li><Link to="/signup"><button className='btn btn-outline btn-primary font-bold'>Sign up</button></Link></li>
                <li><Link to="/createaccount"><button className='btn btn-outline btn-primary font-bold'>Create Seller Account</button></Link></li>

            </>}


    </React.Fragment>
    return (
        <div>
            <div className="navbar flex justify-between">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={1} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menuItems}
                        </ul>
                    </div>
                    <Link to="/" className="text-primary  font-bold normal-case text-xl">Style Hub</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {menuItems}
                    </ul>
                </div>
                <label htmlFor="dashboard-drawer" tabIndex={2} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
            </div>
        </div>
    );
};

export default Navbar;