import React from 'react';
const AboutUs = () => {

    return (
        <div className="my-10">
            <h1 className="font-bold text-3xl  text-center mb-10">All Thrills, Zero Guilt</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-10  text-white'>
                <div className="card bg-primary shadow-xl  p-5">
                    <div className="card-body">
                        <h2 className="card-title">Easy Returns</h2>
                        <p>Thrift without the risk. Enjoy hassle-free returns with your order.</p>

                    </div>
                </div>
                <div className="card  bg-primary shadow-xl  p-5">
                    <div className="card-body">
                        <h2 className="card-title">Quality Finds</h2>
                        <p>Each item undergoes a 12-point inspection to meet our high quality standards.</p>

                    </div>
                </div>
                <div className="card bg-primary shadow-xl  p-5">
                    <div className="card-body">
                        <h2 className="card-title">Sustainable Style</h2>
                        <p>Buying (and wearing!) secondhand clothing instead of new reduces CO2 emissions by 25%.</p>

                    </div>
                </div>
            </div>
        </div>
    );
};
export default AboutUs;