import React from 'react'

const layout = ({children}: {children: React.ReactNode}) => {
  return (
    <section className='grow grid min-[840px]:grid-cols-2'>
      <div className='max-[840px]:order-2'>
        <img className='object-cover object-center h-full' src="/accountBg.png" alt='' />
      </div>
      <main className='flex justify-center items-center py-18'>
        {children}
      </main>
    </section>
  )
}

export default layout