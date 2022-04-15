import React from 'react';
import { AiFillSetting, AiFillShop, AiFillShopping } from 'react-icons/ai';

// Images
import ChatImage from '../../../assets/images/chat.png';

function Features2() {
    return (
        <section className='py-10'>
            <div className="container mx-auto px-10">
                <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                        <h3 className='sm:text-2xl md:text-4xl lg:text-5xl text-gray-700 font-bold my-10 drop-shadow-lg'>
                            Discover More New Features
                        </h3>
                        <div className="grid grid-cols-3 gap-4 my-5">
                            <div>
                                <AiFillSetting className='text-5xl text-green-500 my-2' />
                                <h4 className='text-2xl text-gray-700 font-semibold drop-shadow-md'>Business Strategy</h4>
                            </div>
                            <div>
                                <AiFillShop className='text-5xl text-blue-500 my-2' />
                                <h4 className='text-2xl text-gray-700 font-semibold drop-shadow-md'>Online Marketing</h4>
                            </div>
                            <div>
                                <AiFillShopping className='text-5xl text-red-500 my-2' />
                                <h4 className='text-2xl text-gray-700 font-semibold drop-shadow-md'>Consumer Products</h4>
                            </div>
                        </div>
                        <div className='my-5'>
                            <p className='text-gray-500'>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                when an unknown printer took a galley of type and scrambled it to make a type
                                specimen book. It has survived not only five centuries.
                            </p>
                        </div>
                        <div>
                            <button className='py-4 px-12 my-4 shadow-lg text-white bg-orange-500 rounded-3xl'>More Features</button>
                        </div>
                    </div>
                    <div>
                        <img src={ChatImage} alt="Chat" width="100%" height="100%" className='object-cover' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Features2