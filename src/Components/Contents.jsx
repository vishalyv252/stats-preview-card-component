import React from 'react'
import Heading from './Contents/Heading';
import Paragraph from './Contents/Paragraph';
import Stats from './Contents/Stats';

const Contents = () => {
    return (
    <>
        <div className='flex flex-col p-10 Tablet:items-end'>
            <Heading />
            <Paragraph />
            <Stats />
        </div>
    </>
    )
}

export default Contents;