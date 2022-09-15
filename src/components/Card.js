import React, {useState} from 'react'
import Item from './Item'
import { data } from '../data'

const Card = () => {
    const [celebrants, setCelebrants] = useState(data)
  return (
    <div className='card'>
        <h2>{celebrants.length} birthdays today</h2>
        {
            celebrants.map(celebrant => {
                // const {id, img, name, age} = celebrant
                // return <Item key={id} img={img} name={name} age={age}/>
                return <Item key={celebrant.id} celebrant={celebrant}/>
            })
        }
        <button className='btn'>Clear All</button>
    </div>
  )
}

export default Card
