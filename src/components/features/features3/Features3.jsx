import React from 'react';
import { AiFillCheckCircle } from 'react-icons/ai';

// Images
import ExpertsImage1 from '../../../assets/images/experts-1.png';
import ExpertsImage2 from '../../../assets/images/experts-2.png';

function Features3() {
    return (
        <section className='py-20 bg-slate-50'>
            <div className="container mx-auto px-10">
                <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-16">
                    <div className='relative'>

                        <img src={ExpertsImage1} alt="Experts" className='absolute top-0 left-0 rounded-xl' />
                        <img src={ExpertsImage2} alt="Experts" className='absolute bottom-0 right-0 rounded-xl' />

                        <div className='w-32 h-32 bg-red-500 rounded-lg absolute top-0 right-0' />
                        <div className='w-32 h-32 bg-yellow-500 rounded-lg absolute bottom-0 left-0' />

                        <div className='w-24 h-24 bg-orange-500 rounded-lg absolute top-36 right-36' />
                        <div className='w-24 h-24 bg-green-500 rounded-lg absolute bottom-36 left-36' />

                    </div>
                    <div>
                        <h3 className='sm:text-2xl md:text-4xl lg:text-5xl text-gray-700 font-bold my-10 drop-shadow-lg'>
                            Marketing experts are
                            ready to help you
                        </h3>
                        <p className='my-10 text-gray-500 text-xl'>
                            Duis aute irure dolor in reprehenderit in voluptate velit
                            esse cillum dolore eu fugiat nulla pariatur.
                        </p>
                        <ul className='my-10'>
                            <li className='my-2 text-gray-500'>
                                <AiFillCheckCircle className='text-2xl text-orange-500 inline-block mr-4' />
                                Refresing to get such a personal touch.
                            </li>
                            <li className='my-2 text-gray-500'>
                                <AiFillCheckCircle className='text-2xl text-orange-500 inline-block mr-4' />
                                Duis aute irure dolor in reprehenderit in voluptate.
                            </li>
                            <li className='my-2 text-gray-500'>
                                <AiFillCheckCircle className='text-2xl text-orange-500 inline-block mr-4' />
                                Velit esse cillum dolore eu fugiat nulla pariatur.
                            </li>
                            <li className='my-2 text-gray-500'>
                                <AiFillCheckCircle className='text-2xl text-orange-500 inline-block mr-4' />
                                Duis aute irure dolor in reprehenderit in voluptate.
                            </li>
                            <li className='my-2 text-gray-500'>
                                <AiFillCheckCircle className='text-2xl text-orange-500 inline-block mr-4' />
                                Velit esse cillum dolore eu fugiat nulla pariatur.
                            </li>
                        </ul>
                        <button className='py-4 px-12 my-4 shadow-lg text-white bg-orange-500 rounded-3xl'>
                            Get Started
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Features3