import React from 'react'

const ClientInfo = () => {
  return (
    <div className='w-full max-w-[540px] aspect-[9/16] bg-[url("/assets/Name.jpg")] mx-auto bg-cover '>
      <div className='relative top-[25%]  flex flex-col gap-2 lg:gap-4 w-1/2 mx-auto text-sm '>
        <div className='flex  font-bold'>
          <p>Name-</p>
          <p contentEditable  suppressContentEditableWarning={true}  className='ml-4'>Client's Name</p>
        </div>
        <div className='flex  font-bold'>
          <p>Age-</p>
          <p contentEditable  suppressContentEditableWarning={true} className='ml-4'>Client's Age</p>
        </div>
        <div className='flex  font-bold'>
          <p>Height-</p>
          <p contentEditable  suppressContentEditableWarning={true} className='ml-4'>Client's Height</p>
        </div>
        <div className='flex  font-bold'>
          <p>Weight-</p>
          <p contentEditable  suppressContentEditableWarning={true} className='ml-4'>Client's Weight</p>
        </div>
        <div className='flex  font-bold'>
          <p>BMI-</p>
          <p contentEditable  suppressContentEditableWarning={true} className='ml-4'>Client's BMI</p>
        </div>
        <div className='  font-bold'>
          
          <p contentEditable  suppressContentEditableWarning={true} className=''>Client ki motai  (ya pltlai, whatever)</p>
        </div>
      </div>
    </div>
  )
}

export default ClientInfo