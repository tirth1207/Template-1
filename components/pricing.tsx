import { The_Nautigal } from 'next/font/google'
import React from 'react'

function Pricing() {
  return (
    <div className='max-w-5xl mx-auto mx-4 gap-4 mx-18'>
        <h2 className='text-3xl font-bold text-left mb-8'>Choose your pricing plan.</h2>
        <p className='text-left max-w-xl text-lg mb-4'>
            Est pariatur reprehenderit duis. Elit culpa qui aute Lorem quis do ex veniam nostrud sint sint sint. Exercitation ea pariatur culpa fugiat aliqua id ad velit id.  
        </p>
        <div className='flex flex-col md:flex-row justify-center items-center gap-8 mx-5 my-8'>
            <Card title="Basic" price="$9" vari="per month" plans={["Access to basic features","Email support","Help center access"]}>
                <button className='bg-white text-black  px-4 py-2 rounded-lg hover:bg-neutral-400 transition w-full'>Get Started</button>
            </Card>
            <Card title="Pro (Most Popluar)" price="$45" vari="main" plans={["Access to basic features","Email support","Help center access"]}>
                <button className='bg-black text-white px-4 py-2 rounded-lg hover:bg-neutral-800 transition w-full'>Get Started</button>
            </Card>
            <Card title="Advance" price="$99" vari="per month" plans={["Access to basic features","Email support","Help center access"]}>
                <button className='bg-white text-black px-4 py-2 rounded-lg hover:bg-neutral-400 transition w-full'>Get Started</button>
            </Card>
        </div>
    </div>
  )
}

function Card({
  children,
  title,
  price,
  vari,
  className,
  plans
}: {
  children: React.ReactNode
  title: string
  vari: string
  className?: string
  price: string
  plans: string[]
}) {

  if (vari === "main") {
    return (
      <div className={`p-6 m-4 h-fit w-94 border rounded-lg shadow-xl transition scale-[1.3] shadow-2xl duration-300 ${className}`}>
        {/* <h3 className='text-2xl font-semibold mb-2'>{title}</h3> */}
        <p className='text-5xl font-bold mb-4'>{price}</p>
        <h3 className='text-lg font-bold mb-4'>{title}</h3>
        <ul className='mb-6'>
          {plans.map((plan, index) => (
            <li key={index} className='ml-2 mb-2'>• {plan}</li>
          ))}
        </ul>
        <div>{children}</div>
      </div>
    )
  }

  return (
    <div className={`p-6 m-4 h-fit w-94 border rounded-lg shadow-xl bg-black text-white transition hover:scale-[1.02] hover:shadow-2xl duration-300 ${className}`}>
      {/* <h3 className='text-2xl font-semibold mb-2'>{title}</h3> */}
      <p className='text-5xl font-bold mb-4'>{price}</p>
      <h3 className='text-lg font-bold mb-4'>{title}</h3>
      <ul className='mb-6'>
        {plans.map((plan, index) => (
          <li key={index} className='ml-2 mb-2'>• {plan}</li>
        ))}
      </ul>
      <div>{children}</div>
    </div>
  )
}


export default Pricing