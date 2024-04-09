import React from 'react'

const Background = () => {
  return (
    <>
      <div className='fixed z-[2] w-full h-screen '>   
          <div className=' absolute top-[5%] w-full py-10 flex justify-center text-zinc-500 text-xl font-bold '>
            Documents.
          </div>
              
              <div class=" absolute top-1/2 left-1/2  text-[13vw] -translate-x-[50%] -translate-y-[50%] text-zinc-500 leading-none tracking-tighter">
                  Docs.
              </div>
      </div>


    </>
  )
}

export default Background