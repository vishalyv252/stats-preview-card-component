import React from 'react'

const Stats = () => {
    return (
    <>
        <div className='flex flex-row justify-between Tablet:flex-col Tablet:text-center Tablet:w-72 Tablet:justify-center Tablet:mx-auto Tablet:m-0 w-96 m-5'>
            <div className='Tablet:mb-5'>
                <h1 className='font-LDeca text-2xl font-bold text-White Tablet:text-xl'>10k+</h1>
                <p className='font-Inter text-[15px] text-STWH Tablet:text-xs'>COMPANIES</p>
            </div>
            <div className='Tablet:mb-5'>
                <h1 className='font-LDeca text-2xl font-bold text-White Tablet:text-xl'>314</h1>
                <p className='font-Inter text-[15px] text-STWH Tablet:text-xs'>TEMPLATES</p>
            </div>
            <div>
                <h1 className='font-LDeca text-2xl font-bold text-White Tablet:text-xl'>12m+</h1>
                <p className='font-Inter text-[15px] text-STWH Tablet:text-xs'>QUERIES</p>
            </div>
        </div>
    </>
    )
}

export default Stats;