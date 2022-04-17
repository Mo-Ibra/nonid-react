import React from 'react';

function Plans() {
    return (
        <section className='py-20' id='price'>
            <div className="container mx-auto px-10">
                <div className="my-10 text-center">
                    <h2 className='sm:text-2xl md:text-4xl lg:text-5xl text-gray-700 font-bold my-4 drop-shadow-lg w-2/4 mx-auto'>
                        Choose pricing plans which
                        suits your needs
                    </h2>
                </div>
                <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className='bg-white shadow-2xl text-center p-8 rounded-lg border-t-4 border-orange-500'>
                        <div>
                            <h2 className='text-6xl text-orange-500 my-8'>$20.00</h2>
                            <span className='italic my-8 text-gray-700 font-semibold block'>BASIC PACK</span>
                            <hr className='my-8' />
                        </div>
                        <div>
                            <ul>
                                <li className='my-5 text-gray-500'>
                                    Extra features
                                </li>
                                <li className='my-5 text-gray-500'>
                                    Lifetime free support
                                </li>
                                <li className='my-5 text-gray-200'>
                                    Upgrade options
                                </li>
                                <li className='my-5 text-gray-200'>
                                    Full access
                                </li>
                            </ul>
                            <button className='my-8 border border-orange-300 text-gray-500 rounded-3xl py-2 px-8 hover:bg-orange-500 hover:text-white duration-300'>Choose Plan</button>
                        </div>
                    </div>
                    <div className='bg-white shadow-2xl text-center p-8 rounded-lg border-t-4 border-blue-500'>
                        <div>
                            <h2 className='text-6xl text-blue-500 my-8'>$40.00</h2>
                            <span className='italic my-8 text-gray-700 font-semibold block'>PREMUIM PACK</span>
                            <hr className='my-8' />
                        </div>
                        <div>
                            <ul>
                                <li className='my-5 text-gray-500'>
                                    Extra features
                                </li>
                                <li className='my-5 text-gray-500'>
                                    Lifetime free support
                                </li>
                                <li className='my-5 text-gray-500'>
                                    Upgrade options
                                </li>
                                <li className='my-5 text-gray-200'>
                                    Full access
                                </li>
                            </ul>
                            <button className='my-8 border border-blue-300 text-gray-500 rounded-3xl py-2 px-8 hover:bg-blue-500 hover:text-white duration-300'>Choose Plan</button>
                        </div>
                    </div>
                    <div className='bg-white shadow-2xl text-center p-8 rounded-lg border-t-4 border-red-500'>
                        <div>
                            <h2 className='text-6xl text-red-500 my-8'>$60.00</h2>
                            <span className='italic my-8 text-gray-700 font-semibold block'>ADVANCED PACK</span>
                            <hr className='my-8' />
                        </div>
                        <div>
                            <ul>
                                <li className='my-5 text-gray-500'>
                                    Extra features
                                </li>
                                <li className='my-5 text-gray-500'>
                                    Lifetime free support
                                </li>
                                <li className='my-5 text-gray-500'>
                                    Upgrade options
                                </li>
                                <li className='my-5 text-gray-500'>
                                    Full access
                                </li>
                            </ul>
                            <button className='my-8 border border-red-300 text-gray-500 rounded-3xl py-2 px-8 hover:bg-red-500 hover:text-white duration-300'>Choose Plan</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Plans