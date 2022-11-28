import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import ConfirmationModal from '../../Shared/ConfirmationModal/ConfirmationModal';
import Loading from '../../Shared/Loading/Loading';
const AllSellers = () => {
    const [deletingSeller, setDeletingSeller] = useState(null);
    const [verify, setVerify] = useState(null);
    const closeModal = () => {
        setDeletingSeller(null);
    }

    const accountType = "seller";
    const { data: users, isLoading, refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch(`https://style-hub-server.vercel.app/sellers?accountType=${accountType}`);
            const data = await res.json();
            return data;
        }
    });
    const handleMakeAdmin = id => {
        fetch(`https://style-hub-server.vercel.app/users/admin/${id}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Make admin successful.')
                    refetch();
                }
            })
    }

    const handleDeleteSeller = user => {
        fetch(`https://style-hub-server.vercel.app/users/${user._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch();
                    toast.success(`Seller ${user.name} deleted successfully`)
                }
            })
    }
    const handleVerify = seller => {
        fetch(`https://style-hub-server.vercel.app/sellers/${seller._id}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch();
                    toast.success(`Seller:  ${seller.name} verified successfully`);

                }
            })
    }

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h2 className="text-3xl">All Sellers</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Admin</th>
                            <th>Delete</th>
                            <th>Verify</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, i) => <tr key={user._id}>
                                <th>{i + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user?.role !== 'admin' && <button onClick={() => handleMakeAdmin(user._id)} className='btn btn-xs btn-primary'>Make Admin</button>}</td>

                                <td>
                                    <label onClick={() => setDeletingSeller(user)} htmlFor="confirmation-modal" className="btn btn-sm btn-primary">Delete</label>
                                </td>
                                <td>
                                    {
                                        user.verified === "true" ? <label className="btn btn-sm btn-primary">Verified</label> : <label onClick={() => handleVerify(user)} htmlFor="confirmation-modal" className="btn btn-sm btn-primary">Verify</label>

                                    }

                                </td>



                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
            {
                deletingSeller &&

                <ConfirmationModal
                    title={`Are you sure you want to delete?`}
                    message={`If you delete ${deletingSeller.name}. It cannot be undone.`}
                    successAction={handleDeleteSeller}
                    successButtonName="Delete"
                    modalData={deletingSeller}
                    closeModal={closeModal}
                >
                </ConfirmationModal>
            }


        </div>
    );
};

export default AllSellers;