import React from 'react'
import { useNavigate } from 'react-router-dom'

const Sidebar = () => {
    const list = ["Dashboard", "Order List", "Order Details", "Customer", "Analystics", "Reviews", "Foods", "Food Details", "Customer Details", "Calendar", "Chat", "Wallet"]
    const navigate=useNavigate()
    const it = list.map((items) => {
        return (
            <div className='mt-2 bg-white hover:bg-slate-200 active:bg-slate-400 h-8 px-6  '  onClick={(e)=>{
                navigate(`${e.target.innerHTML}`)
                }}>
                {items}
            </div>
        )
    }
    )
    return (
        <>
            <div className='w-64 h-dvh bg-[#ffffff] py-8 px-6'>
                <h1 className='text-4xl font-bold'>Farzam</h1>
                <p className='mt-2'>Front End Web Developer</p>
                <div className='w-[14rem] mt-5  '>

                    {it}
                </div>
            </div>
        </>
    )
}

export default Sidebar