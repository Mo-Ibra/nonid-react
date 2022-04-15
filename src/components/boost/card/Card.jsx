import React from 'react';
import './Card.scss';
import { AiFillFastForward } from 'react-icons/ai';

function Card({IconUrl, title, hover}) {
    return (
        <div className={`bg-white shadow-lg border border-slate-100 p-8 rounded-md cursor-pointer ${hover} `}>
            <div className='my-4'>
                {IconUrl}
                <h3 className='text-2xl font-semibold text-gray-700'>{title}</h3>
            </div>
            <div className="my-4 text-gray-500">
                <p>
                    Lorem ipsum is are
                    many variations of
                    pass of majority.
                </p>
            </div>
            <div className="my-4">
                <AiFillFastForward className='text-3xl text-gray-500' />
            </div>
        </div>
    )
}

export default Card