import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../context/AuthProvider';


const BookingModal = ({ productName, resalePrice }) => {
    const { user } = useContext(AuthContext);

    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;

        const email = form.email.value;
        const buyerName = form.username.value;

        const phoneNumber = form.phoneNumber.value;
        const productName = form.productName.value;

        const meetingLocation = form.meetingLocation.value;
        const resalePrice = form.resalePrice.value;

        const booking = {
            email,
            phoneNumber,
            buyerName,
            productName,
            meetingLocation,
            resalePrice
        }
        // TODO: send data to the server
        // and once data is saved then close the modal 
        // and display success toast
        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    toast.success('Booking confirmed');
                }
                else {
                    toast.error(data.message);
                }
            })


    }

    return (
        <>
            <div>
                <label htmlFor="booking-modal" className="btn btn-primary">Book Now</label>

                {/* Put this part before </body> tag */}
                <input type="checkbox" id="booking-modal" className="modal-toggle" />
                <div className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box">
                        <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                        <form onSubmit={handleBooking} data-modal-target="form" className='grid grid-cols-1 gap-3 mt-10'>
                            <input name="username" type="text" disabled defaultValue={user?.displayName} placeholder="Your Name" className="input w-full input-bordered" />
                            <input name="email" type="email" disabled defaultValue={user?.email} placeholder="Email Address" className="input w-full input-bordered" />
                            <input name="productName" type="text" disabled defaultValue={productName} className="input w-full input-bordered" />
                            <input name="resalePrice" type="text" disabled defaultValue={resalePrice} className="input w-full input-bordered" />
                            <input name="phoneNumber" type="text" placeholder="Phone Number" className="input w-full input-bordered" />
                            <input name="meetingLocation" type="text" placeholder="Meeting Location" className="input w-full input-bordered" />
                            <br />
                            <input className='btn btn-accent w-full' type="submit" value="Submit" />
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BookingModal;