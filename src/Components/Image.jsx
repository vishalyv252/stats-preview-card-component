import React from 'react'
import Desktop from './Images/image-header-desktop.jpg';
import Mobile from './Images/image-header-mobile.jpg';

const Image = () => {
    return (
    <>
        <div>
        <img className='block h-[400px] w-auto rounded-r-lg Tablet:hidden' src={Desktop} alt={'Desktop'} />
        <img className='hidden h-auto w-72 rounded-t-lg Tablet:block' src={Mobile} alt={'Mobile'} />
        </div>
    </>
    )
}

export default Image;