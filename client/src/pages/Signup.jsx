import React from 'react'
import { Link } from 'react-router-dom'

export default function Signup() {
  return (
    <div className='p-3 max-w-lg mx-auto min-h-80'>
        <h2 className='text-center text-2xl font-bold my-7'>Signup to The Rental Hub!</h2>
        <form className='flex flex-col gap-4  mx-auto p-3'>
            <input type="text" placeholder='Username' className='bg-slate-100 p-3 rounded-lg'/>
            <input type="email" placeholder='Email' className='bg-slate-100 p-3 rounded-lg'/>
            <input type="password" placeholder='Password' className='bg-slate-100 p-3 rounded-lg'/>
            <button className='bg-slate-900 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-55'>Sign In</button>
        </form>
        <div className='flex gap-2 mt-5 text-end'>
            <p>Already have an account?</p>
            <Link to="/sign-in" className="text-slate-700 font-semibold">
                <span className='text-red-900'>
                    Signin
                </span>
            </Link>
        </div>
    </div>
  )
}
