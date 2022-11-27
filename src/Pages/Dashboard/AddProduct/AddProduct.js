import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';
import Loading from '../../Shared/Loading/Loading';

const AddProduct = () => {
    const { user } = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const imageHostKey = process.env.REACT_APP_imgbb_key;

    const { data: categories, isLoading } = useQuery({
        queryKey: ['name'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/categoryName');
            const data = await res.json();
            return data;
        }
    });

    const handleAddProduct = data => {
        const available = "available";
        const advertise = "false";
        var catId = 0;
        var current = new Date();
        const date = current.toLocaleDateString();
        console.log(data);
        if (data.categoryName === "Shirt") {
            catId = 1;
        }
        else if (data.categoryName === "Pant") {
            catId = 2;
        }
        else if (data.categoryName === "Dress") {
            catId = 3;
        }
        else {

        }
        const image = data.picture[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?expiration=600&key=${imageHostKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    console.log(imgData.data.url);
                    const product = {
                        name: data.name,
                        location: data.location,
                        description: data.description,
                        resalePrice: data.resalePrice,
                        originalPrice: data.originalPrice,
                        yearsUsed: data.yearsUsed,
                        categoryName: data.categoryName,
                        categoryId: catId,
                        picture: imgData.data.url,
                        sellerName: user?.displayName,
                        sellerEmail: user?.email,
                        mobileNumber: data.mobileNumber,
                        status: available,
                        postedTime: date,
                        advertise: advertise

                    }

                    // save doctor information to the database
                    fetch('http://localhost:5000/products', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(product)
                    })
                        .then(res => res.json())
                        .then(result => {
                            console.log(result);
                            toast.success(`${data.name} is added successfully`);
                            navigate('/dashboard/myproducts')
                        })
                }
            })
    }

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className=''>
            <h2 className="text-4xl">Add A Product</h2>
            <form onSubmit={handleSubmit(handleAddProduct)}>
                <div className="form-control w-full ">
                    <label className="label"> <span className="label-text">Name</span></label>
                    <input type="text" {...register("name", {
                        required: "Name is Required"
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Location</span></label>
                    <input type="text" {...register("location", {
                        required: true
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.location && <p className='text-red-500'>{errors.location.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Description</span></label>
                    <input type="text" {...register("description", {
                        required: true
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.description && <p className='text-red-500'>{errors.description.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Resale Price</span></label>
                    <input type="number" {...register("resalePrice", {
                        required: true
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.resalePrice && <p className='text-red-500'>{errors.resalePrice.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Original Price</span></label>
                    <input type="number" {...register("originalPrice", {
                        required: true
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.originalPrice && <p className='text-red-500'>{errors.originalPrice.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Years Used</span></label>
                    <input type="number" {...register("yearsUsed", {
                        required: true
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.yearsUsed && <p className='text-red-500'>{errors.yearsUsed.message}</p>}
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Category Type</span></label>
                    <select
                        {...register('categoryName')}
                        className="select input-bordered w-full max-w-xs">
                        {
                            categories.map(category => <option
                                key={category._id}
                                value={category.categoryName}
                            >{category.categoryName}</option>)
                        }


                    </select>
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Condition</span></label>
                    <select  {...register('condition')} className="select input-bordered w-full max-w-xs">
                        <option disabled selected>Excellent</option>
                        <option>Good</option>
                        <option>Fair</option>
                    </select>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Mobile Number</span></label>
                    <input type="text" {...register("mobileNumber", {
                        required: true
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.mobileNumber && <p className='text-red-500'>{errors.mobileNumber.message}</p>}
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Photo</span></label>
                    <input type="file" {...register("picture", {
                        required: "Photo is Required"
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.picture && <p className='text-red-500'>{errors.picture.message}</p>}
                </div>

                <input className='btn btn-accent w-full mt-4' value="Add Product" type="submit" />
            </form>
        </div>
    );

};

export default AddProduct;