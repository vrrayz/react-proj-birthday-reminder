import React from 'react'

const Item = (props) => {
    const {img, name, age} = props.celebrant
  return (
    <div className='celebrant-list'>
        <img src={img} className='celebrant-photo' alt="profile" />
        <div className='celebrant-details'>
            <p className='font-bold'>{name}</p>
            <p className='font-light'>{age} years</p>
        </div>
    </div>
  )
}
export default Item
