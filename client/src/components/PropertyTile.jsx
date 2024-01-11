import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

PropertyTile.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  bedNumber: PropTypes.number.isRequired,
  bathNumber: PropTypes.number.isRequired,
};

export default function PropertyTile({ imageUrl, title, location, description, price, bedNumber, bathNumber }) {
  return (
    <Link to='/one-home'>
      <div className='flex flex-col bg-slate-200 rounded hover:shadow-lg'>
          <img src={imageUrl} alt="" className='object-cover rounded rounded-b-none'/>
          {/* <img src={imageUrl} alt="" className='max-w-xs transition duration-300 ease-in-out hover:scale-110'/> */}

          <div className='p-5'>
              <h3 className='font-bold'>{ title }</h3>
              <p className='text-sm'><i className='bi bi-geo-alt-fill text-red-900'></i>{ location }</p>
              <p className='text-xs'><i className='bi bi-info-circle-fill text-red-900'></i>{ description }</p>
              <p className='text-pretty text-slate-700'><i className='bi bi-wallet-fill text-red-900'></i>{price} / month</p>
              <div className='flex flex-row gap-3 text-slate-700'>
                  <p className='text-xs font-bold'><i className='bi bi-houses-fill text-red-900'></i>{bedNumber} beds</p>
                  <p className='text-xs font-bold'><i className='bi bi-droplet-fill text-red-900'></i>{bathNumber} baths</p>
              </div>
          </div>
      </div>
    </Link>
  )
}
