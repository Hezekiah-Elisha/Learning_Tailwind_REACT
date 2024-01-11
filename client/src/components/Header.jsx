import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div className='bg-slate-900'>
        <div className='flex items-center justify-between max-w-6xl mx-auto p-3'>
            <Link to='/'>
                <h1 className='font-bold text-white text-2xl'>The Rental Hub</h1>
            </Link>
            <form action="">
                <input type="text" className='bg-slate-200 px-14 py-0.5 rounded-lg' placeholder='Search...'/>
            </form>
            <ul className='flex gap-4'>
                <Link to='/'>
                    <li className='text-white'>Home</li>
                </Link>
                <Link to='/about'>
                    <li className='text-white'>About</li>
                </Link>
                <Link to='/one-home'>
                    <li className='text-white'>One Home</li>
                </Link>
                <Link to='/sign-in'>
                    <li className='text-white'>Login</li>
                </Link>
            </ul>
        </div>
    </div>
  )
}
