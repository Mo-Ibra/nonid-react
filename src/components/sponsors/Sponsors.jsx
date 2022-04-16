import React from 'react';

// Images
import LogoImage1 from './images/1.svg';
import LogoImage2 from './images/2.svg';
import LogoImage3 from './images/3.svg';
import LogoImage4 from './images/4.svg';
import LogoImage5 from './images/5.svg';

function Sponsors() {
    return (
        <section className='py-10'>
            <div className="container mx-auto px-10">
                <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 mx-auto my-4'>
                    <img src={LogoImage1} alt="Logo" className='inline-block w-32 my-4 mx-auto opacity-80 hover:opacity-100 cursor-pointer duration-300' />
                    <img src={LogoImage2} alt="Logo" className='inline-block w-32 my-4 mx-auto opacity-80 hover:opacity-100 cursor-pointer duration-300' />
                    <img src={LogoImage3} alt="Logo" className='inline-block w-32 my-4 mx-auto opacity-80 hover:opacity-100 cursor-pointer duration-300' />
                    <img src={LogoImage4} alt="Logo" className='inline-block w-32 my-4 mx-auto opacity-80 hover:opacity-100 cursor-pointer duration-300' />
                    <img src={LogoImage5} alt="Logo" className='inline-block w-32 my-4 mx-auto opacity-80 hover:opacity-100 cursor-pointer duration-300' />
                    <img src={LogoImage1} alt="Logo" className='inline-block w-32 my-4 mx-auto opacity-80 hover:opacity-100 cursor-pointer duration-300' />
                </div>
            </div>
        </section>
    )
}

export default Sponsors