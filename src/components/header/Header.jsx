import React from 'react';
import HeaderImage from '../../assets/images/header.png';
import SectionImage from '../../assets/images/section.png';

function Header() {
    return (
        <header className='py-20 relative' id="home">
            <div className="container mx-auto px-10">
                <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="description">
                        <h2 className='text-6xl text-gray-700 font-bold my-4 drop-shadow-lg'>
                            Boost your web
                            traffic & rank
                            with nonid
                        </h2>
                        <p className='text-gray-500 text-lg w-3/4 my-4'>
                            Excepteur sint occaecat cupidatat non proident sunt in
                            culpa qui officia deserunt mollit lorem ipsum anim id est
                            laborum perspiciatis unde.
                        </p>
                        <button className='py-4 px-12 my-4 shadow-lg text-white bg-orange-500 rounded-3xl'>
                            Get Started
                        </button>
                    </div>
                    <div className="imageProvider">
                        <img src={HeaderImage} alt="Header" width="100%" height="100%" />
                    </div>
                </div>
            </div>
            <div className="absolute top-0 left-0 bottom-0 right-0" style={{zIndex: '-1'}}>
                <img src={SectionImage} alt="Section" />
            </div>
        </header>
    )
}

export default Header