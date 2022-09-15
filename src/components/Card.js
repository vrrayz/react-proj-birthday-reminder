import React from 'react'
import Item from './Item'
import { data } from '../data'

const Card = () => {
  return (
    <div className='card'>
        <h2>{data.length} birthdays today</h2>
        {
            data.map(celebrant => {
                // const {id, img, name, age} = celebrant
                // return <Item key={id} img={img} name={name} age={age}/>
                return <Item key={celebrant.id} celebrant={celebrant}/>
            })
        }
    </div>
  )
}

export default Card
