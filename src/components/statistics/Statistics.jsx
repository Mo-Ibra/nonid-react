import React from 'react'

function Statistics() {
    return (
        <section className='py-20'>
            <div className="container mx-auto px-10">
                <div className="my-10 text-center">
                    <h2 className='sm:text-2xl md:text-4xl lg:text-5xl text-gray-700 font-bold my-4 drop-shadow-lg w-2/4 mx-auto'>
                        Choose pricing plans which
                        suits your needs
                    </h2>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                    <div className='bg-white w-44 h-44 rounded-full shadow-lg border border-orange-500 text-center'>
                        <div className='mt-14'>
                            <h3 className='text-orange-500 text-4xl'>4789</h3>
                            <span className='text-gray-500 text-sm uppercase'>Projects</span>
                        </div>
                    </div>
                    <div className='bg-white w-44 h-44 rounded-full shadow-lg border border-green-500 text-center relative top-10'>
                        <div className='mt-14'>
                            <h3 className='text-green-500 text-4xl'>6400</h3>
                            <span className='text-gray-500 text-sm uppercase'>Customers</span>
                        </div>
                    </div>
                    <div className='bg-white w-44 h-44 rounded-full shadow-lg border border-red-500 text-center'>
                        <div className='mt-14'>
                            <h3 className='text-red-500 text-4xl'>960</h3>
                            <span className='text-gray-500 text-sm uppercase'>Success</span>
                        </div>
                    </div>
                    <div className='bg-white w-44 h-44 rounded-full shadow-lg border border-blue-500 text-center relative top-10'>
                        <div className='mt-14'>
                            <h3 className='text-blue-500 text-4xl'>448</h3>
                            <span className='text-gray-500 text-sm uppercase'>Awards</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Statistics