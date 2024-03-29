import React from 'react'

export default function Footer() {
  return (
    <footer className='bg-slate-900 text-slate-200 p-5'>
      <div className='flex sm:flex-col  md:flex-row justify-around'>
        <div className='sm:text-center md:text-left'>
          <h1>Rental Hub</h1>
          
          <i>Here to serve</i>
        </div>
        <hr className='md:hidden' />
        <div className='sm:text-center md:text-left'>
          <h1>Quick Links</h1>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Properties</li>
            <li>Contact</li>
          </ul>
        </div>
        <hr className='md:hidden' />
        <div className='sm:text-center md:text-left'>
          <h1>Contact Us</h1>
          <ul>
            <li>Phone: +254 712 345 678</li>
            <li>Email: rental@rentalhub.co.ke</li>
            <li>Address: 123, Nairobi, Kenya</li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
