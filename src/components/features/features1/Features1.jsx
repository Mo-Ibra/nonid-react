import React from 'react';
import { AiFillCheckCircle } from 'react-icons/ai';

// Images
import MobileImage from '../../../assets/images/mobile.png';
import SectionImage from '../../../assets/images/section.png';

function Features1() {
    return (
        <section className='py-20 relative' id='features'>
            <div className="container mx-auto px-10">
                <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                        <img src={MobileImage} alt="Mobile" />
                    </div>
                    <div>
                        <h3 className='sm:text-2xl md:text-4xl lg:text-5xl text-gray-700 font-bold my-10 drop-shadow-lg'>
                            Powerful tools for your customers
                        </h3>
                        <p className='my-10 text-gray-500 text-xl'>
                            Duis aute irure dolor in reprehenderit in voluptate velit
                            esse cillum dolore eu fugiat nulla pariatur.
                        </p>
                        <ul className='my-10'>
                            <li className='my-2 text-gray-500 text-sm'>
                                <AiFillCheckCircle className='text-2xl text-orange-500 inline-block mr-4' />
                                Refresing to get such a personal touch.
                            </li>
                            <li className='my-2 text-gray-500 text-sm'>
                                <AiFillCheckCircle className='text-2xl text-orange-500 inline-block mr-4' />
                                Duis aute irure dolor in reprehenderit in voluptate.
                            </li>
                            <li className='my-2 text-gray-500 text-sm'>
                                <AiFillCheckCircle className='text-2xl text-orange-500 inline-block mr-4' />
                                Velit esse cillum dolore eu fugiat nulla pariatur.
                            </li>
                            <li className='my-2 text-gray-500 text-sm'>
                                <AiFillCheckCircle className='text-2xl text-orange-500 inline-block mr-4' />
                                Duis aute irure dolor in reprehenderit in voluptate.
                            </li>
                            <li className='my-2 text-gray-500 text-sm'>
                                <AiFillCheckCircle className='text-2xl text-orange-500 inline-block mr-4' />
                                Velit esse cillum dolore eu fugiat nulla pariatur.
                            </li>
                        </ul>
                        <button className='py-4 px-12 my-4 shadow-lg text-white bg-orange-500 rounded-3xl'>
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
            <div className="absolute top-0 left-0 bottom-0 right-0" style={{zIndex: '-1'}}>
                <img src={SectionImage} alt="Section" />
            </div>
        </section>
    )
}

export default Features1