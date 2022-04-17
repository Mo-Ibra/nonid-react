import React from 'react';
import './News.scss';
import { BsFillCursorFill } from 'react-icons/bs';

function News() {
    return (
        <section className='py-20' id='news'>
            <div className="container mx-auto px-10">
                <div className="my-10 text-center">
                    <h2 className='sm:text-2xl md:text-4xl lg:text-5xl text-gray-700 font-bold my-4 drop-shadow-lg w-2/4 mx-auto'>
                        Check out our latest
                        news & articles
                    </h2>
                </div>
                <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className='newsCard orange bg-white shadow-2xl rounded-sm p-8 cursor-pointer hover:text-white relative'>
                        <div className="newsBadge absolute top-0 left-0 p-2 text-white text-sm font-semibold rounded-br-lg">
                            30 April, 2019
                        </div>
                        <div className="my-10">
                            <span className='text-orange-500 text-sm my-2'>BY LAYERDROPS</span>
                            <h3 className='text-2xl font-semibold text-gray-700 my-2'>Pre launch mobile app marketing pitfalls</h3>
                        </div>
                        <div className='my-5'>
                            <p className='text-gray-500 text-lg my-2'>
                                There are many variations of passages of but majority have in some by inject.
                            </p>
                            <BsFillCursorFill className='my-5 text-gray-500 text-2xl' />
                        </div>
                    </div>
                    <div className='newsCard blue bg-white shadow-2xl rounded-sm p-8 cursor-pointer hover:text-white relative'>
                        <div className="newsBadge absolute top-0 left-0 p-2 text-white text-sm font-semibold rounded-br-lg">
                            30 April, 2019
                        </div>
                        <div className="my-10">
                            <span className='text-orange-500 text-sm my-2'>BY LAYERDROPS</span>
                            <h3 className='text-2xl font-semibold text-gray-700 my-2'>Pre launch mobile app marketing pitfalls</h3>
                        </div>
                        <div className='my-5'>
                            <p className='text-gray-500 text-lg my-2'>
                                There are many variations of passages of but majority have in some by inject.
                            </p>
                            <BsFillCursorFill className='my-5 text-gray-500 text-2xl' />
                        </div>
                    </div>
                    <div className='newsCard red bg-white shadow-2xl rounded-sm p-8 cursor-pointer hover:text-white relative'>
                        <div className="newsBadge absolute top-0 left-0 p-2 text-white text-sm font-semibold rounded-br-lg">
                            30 April, 2019
                        </div>
                        <div className="my-10">
                            <span className='text-orange-500 text-sm my-2'>BY LAYERDROPS</span>
                            <h3 className='text-2xl font-semibold text-gray-700 my-2'>Pre launch mobile app marketing pitfalls</h3>
                        </div>
                        <div className='my-5'>
                            <p className='text-gray-500 text-lg my-2'>
                                There are many variations of passages of but majority have in some by inject.
                            </p>
                            <BsFillCursorFill className='my-5 text-gray-500 text-2xl' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default News