import React from 'react';
import { AiFillAppstore, AiFillApple, AiFillAndroid, AiFillCustomerService } from 'react-icons/ai';
import Card from './card/Card';

function boost() {
    return (
        <section className='py-20'>
            <div className="container mx-auto px-10">
                <div className="my-8 text-center">
                    <h2 className='sm:text-2xl md:text-4xl lg:text-5xl text-gray-700 font-bold my-4 drop-shadow-lg w-2/4 mx-auto'>
                        Nodin agency can boost
                        up your web traffic
                    </h2>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <Card IconUrl={<AiFillAppstore className='text-5xl text-blue-500 my-4' />} title="Speed Optimization" hover="hoverBlue" />
                    <Card IconUrl={<AiFillApple className='text-5xl text-orange-500 my-4' />} title="Speed Optimization" hover="hoverOrange" />
                    <Card IconUrl={<AiFillAndroid className='text-5xl text-red-500 my-4' />} title="Speed Optimization" hover="hoverRed" />
                    <Card IconUrl={<AiFillCustomerService className='text-5xl text-yellow-500 my-4' />} title="Speed Optimization" hover="hoverYellow" />
                </div>
            </div>
        </section>
    )
}

export default boost