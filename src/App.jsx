import React from 'react'
import Contents from './Components/Contents';
import Image from './Components/Image';

const App = () => {
  return (
  <>
    <div className='flex justify-center items-center h-screen w-full Tablet:overflow-y-auto Tablet:overflow-x-hidden Tablet:h-auto'>
      {/*This is for desktop view*/}
      <div className='flex flex-row  justfiy-center items-center h-auto w-auto m-5 rounded-lg bg-DarkBlue Tablet:hidden'>
        <Contents />
        <Image />
      </div>
      {/*This is for mobile view*/}
      <div className='Tablet:flex Tablet:justfiy-center Tablet:items-center Tablet:h-auto Tablet:m-5 Tablet:rounded-lg Tablet:bg-DarkBlue Tablet:flex-col Tablet:w-72 Tablet:flex hidden'>
        <Image />
        <Contents />
      </div>
    </div>
  </>
  )
}

export default App;