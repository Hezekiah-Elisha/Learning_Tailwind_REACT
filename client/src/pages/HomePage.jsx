import React from 'react'
import Tile from '../components/PropertyTile'

export default function Home() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1 md:gap-2 lg:gap4 place-items-center p-10'>
        <Tile
           imageUrl='https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
           title='Some Area In Ruai'
           location='Nairobi, Kenya'
           description='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit ipsum magni explicabo dolores consequuntur...'
           price='10000'
           bedNumber='6'
           bathNumber='2'      
        />
        <Tile
            imageUrl='https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            title='Xplaza Area In Ruai'
            location='Nairobi, Kenya'
            description='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit ipsum magni explicabo dolores consequuntur...'
            price='15000'
            bedNumber='5'
            bathNumber='9'
        />
        <Tile
            imageUrl='https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            title='Mount Mall'
            location='Nairobi, Kenya'
            description='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit ipsum magni explicabo dolores consequuntur...'
            price='19000'
            bedNumber='4'
            bathNumber='2'
        />
        <Tile
            imageUrl='https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            title='Crown Plaza'
            location='Nairobi, Kenya'
            description='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit ipsum magni explicabo dolores consequuntur...'
            price='9000'
            bedNumber='6'
            bathNumber='2'
        />
        <Tile
            imageUrl='https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            title='Hilton Hotel'
            location='Nairobi, Kenya'
            description='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit ipsum magni explicabo dolores consequuntur...'
            price='11000'
            bedNumber='6'
            bathNumber='2'
        />
    </div>
  )
}
