import React from 'react';
import SectionImage from '../../assets/images/section.png';

function Subscripe() {
    return (
        <section className='py-20 relative' id='subscripe'>
            <div className="container mx-auto px-10">
                <div className="my-10 text-center">
                    <h2 className='sm:text-2xl md:text-4xl lg:text-5xl text-gray-700 font-bold my-4 drop-shadow-lg w-3/4 mx-auto'>
                        Subscribe our newsletter
                        to get new updates
                    </h2>
                </div>
                <div className='my-10 text-center mx-auto'>
                    <input className='py-4 px-12 border border-slate-200 rounded-3xl mr-4 outline-none text-gray-500' type="text" placeholder='Enter You email' />
                    <button className='py-4 my-2 px-8 border border-orange-500 text-orange-500 rounded-3xl hover:bg-orange-500 hover:text-white duration-300'>Subscripe</button>
                </div>
            </div>
            <div className="absolute top-0 left-0 bottom-0 right-0" style={{zIndex: '-1'}}>
                <img src={SectionImage} alt="Section" />
            </div>
        </section>
    )
}

export default Subscripe