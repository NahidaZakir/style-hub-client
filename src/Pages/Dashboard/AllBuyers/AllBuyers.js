import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import ConfirmationModal from '../../Shared/ConfirmationModal/ConfirmationModal';
import Loading from '../../Shared/Loading/Loading';
const AllBuyers = () => {
    const [deletingBuyer, setDeletingBuyer] = useState(null);

    const closeModal = () => {
        setDeletingBuyer(null);
    }
    const accountType = "buyer";
    const { data: users, isLoading, refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/buyers?accountType=${accountType}`);
            const data = await res.json();
            return data;
        }
    });
    const handleMakeAdmin = id => {
        fetch(`http://localhost:5000/users/admin/${id}`, {
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
    const handleDeleteBuyer = user => {
        fetch(`http://localhost:5000/users/${user._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch();
                    toast.success(`Buyer ${user.name} deleted successfully`)
                }
            })
    }

    if (isLoading) {
        return <Loading></Loading>
    }


    return (
        <div>
            <h2 className="text-3xl">All Buyers</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Admin</th>
                            <th>Delete</th>
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
                                    {
                                        user?.role !== 'admin' &&
                                        <label onClick={() => setDeletingBuyer(user)} htmlFor="confirmation-modal" className="btn btn-sm btn-primary">Delete</label>
                                    }

                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
            {
                deletingBuyer &&

                <ConfirmationModal
                    title={`Are you sure you want to delete?`}
                    message={`If you delete ${deletingBuyer.name}. It cannot be undone.`}
                    successAction={handleDeleteBuyer}
                    successButtonName="Delete"
                    modalData={deletingBuyer}
                    closeModal={closeModal}
                >
                </ConfirmationModal>
            }
        </div>
    );
};

export default AllBuyers;