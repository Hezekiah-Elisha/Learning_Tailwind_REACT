import React from 'react'
import { Link } from 'react-router-dom'
import Tile from '../components/PropertyTile'

export default function OneHomePage() {
  return (
    <div className='p-3'>
        <div className='flex flex-row'>
            <img 
                src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt=""
                className='object-cover rounded w-1/2 h-96 min-w-90' 
            />
            <div className='flex flex-col p-8 justify-between'>
                <div>
                    <h1 className='font-bold text-2xl'>Some Area In Ruai</h1>
                    <p className='text-sm'><i className='bi bi-geo-alt-fill text-red-900'></i> Nairobi, Kenya</p>
                    <p className='text-xs'><i className='bi bi-info-circle-fill text-red-900'></i> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum sequi eos nulla quod provident, consequuntur porro quidem voluptates esse dignissimos iste tempora? Culpa sequi quia soluta dolor quam eum minima.</p>
                    <p className='text-pretty text-slate-700'><i className='bi bi-wallet-fill text-red-900'></i> Ksh 10,000 / month</p>
                    <div className='flex flex-row gap-3 text-slate-700'>
                        <p className='text-xs font-bold'><i className='bi bi-houses-fill text-red-900'></i> 6 beds</p>
                        <p className='text-xs font-bold'><i className='bi bi-droplet-fill text-red-900'></i> 2 baths</p>
                    </div>

                </div>

                <button className='bg-red-900 text-white px-4 py-1 rounded-lg mt-3'>Book Now</button>
            </div>
        </div>
        <div>
            <h2>Related Houses</h2>
            <i className='bi bi-chevron-compact-left h-96'></i>
            <div className='grid grid-cols-3 gap-4 place-items-center p-10'>
                <Tile
                    imageUrl='https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                    title='Some Area In Ruai'
                    location='Nairobi, Kenya'
                    description='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit ipsum magni explicabo dolores consequuntur...'
                    price='Ksh 10,000'
                    bedNumber='6'
                    bathNumber='2'      
                    />
                <Tile
                    imageUrl='https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                    title='Xplaza Area In Ruai'
                    location='Nairobi, Kenya'
                    description='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit ipsum magni explicabo dolores consequuntur...'
                    price='Ksh 15,000'
                    bedNumber='5'
                    bathNumber='9'
                    />
                <Tile
                    imageUrl='https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                    title='Mount Mall'
                    location='Nairobi, Kenya'
                    description='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit ipsum magni explicabo dolores consequuntur...'
                    price='Ksh 19,000'
                    bedNumber='4'
                    bathNumber='2'
                    />
            </div>
            <i className='bi bi-chevron-compact-right h-96'></i>
        </div>
    </div>
  )
}
