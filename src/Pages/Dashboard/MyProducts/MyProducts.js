import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../context/AuthProvider';
import ConfirmationModal from '../../Shared/ConfirmationModal/ConfirmationModal';
import Loading from '../../Shared/Loading/Loading';

const MyProducts = () => {
    const [deletingProduct, setDeletingProduct] = useState(null);
    const [advertise, setAdvertise] = useState(null);
    const { user } = useContext(AuthContext);
    /*
        const { data: products = [], refetch } = useQuery({
            queryKey: ['products'],
            queryFn: async () => {
                const res = await fetch(`https://style-hub-server.vercel.app/products/${user?.email}`);
                const data = await res.json();
                return data;
            }
        });
    
    */

    const closeModal = () => {
        setDeletingProduct(null);
        setAdvertise(null);
    }


    const { data: products, isLoading, refetch } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            try {
                const res = await fetch(`https://style-hub-server.vercel.app/products/${user?.email}`, {
                    headers: {
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    }
                });
                const data = await res.json();
                return data;
            }
            catch (error) {

            }
        }
    });


    const handleDeleteProduct = product => {
        fetch(`https://style-hub-server.vercel.app/products/${product._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch();
                    toast.success(`Doctor ${product.name} deleted successfully`)
                }
            })
    }
    const handleAdvertise = product => {
        fetch(`https://style-hub-server.vercel.app/products/${product._id}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {

                    toast.success(`Product:  ${product.name} Advertised successfully`);
                    refetch();
                }
            })
    }

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h2 className="text-3xl">My products</h2>
            {
                products.length > 0 && <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Status</th>
                                <th>Price</th>
                                <th>Delete</th>
                                <th>Advertise</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                products.map((product, i) => <tr key={product._id}>
                                    <th>{i + 1}</th>
                                    <td>{product.name}</td>
                                    <td>{product.status}</td>
                                    <td>{product.resalePrice}</td>


                                    <td>
                                        <label onClick={() => setDeletingProduct(product)} htmlFor="confirmation-modal" className="btn btn-sm btn-primary">Delete</label>
                                    </td>
                                    <td>
                                        <label onClick={() => setAdvertise(product)} htmlFor="confirmation-modal" className="btn btn-sm btn-primary">Advertise</label>
                                    </td>

                                </tr>)
                            }

                        </tbody>
                    </table>
                    {
                        deletingProduct && <ConfirmationModal
                            title={`Are you sure you want to delete?`}
                            message={`If you delete ${deletingProduct.name}. It cannot be undone.`}
                            successAction={handleDeleteProduct}
                            successButtonName="Delete"
                            modalData={deletingProduct}
                            closeModal={closeModal}
                        >
                        </ConfirmationModal>
                    }
                    {
                        advertise && <ConfirmationModal
                            title={`Are you sure you want to advertise?`}
                            message={`If you advertise ${advertise.name}. It cannot be undone.`}
                            successAction={handleAdvertise}
                            successButtonName="Advertise"
                            modalData={advertise}
                            closeModal={closeModal}
                        >
                        </ConfirmationModal>
                    }
                </div>
            }

        </div>
    );
};

export default MyProducts;