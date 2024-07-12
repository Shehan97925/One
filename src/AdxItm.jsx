import React from 'react'
import './AdxItm.css'
import image1 from './assets/image1.jpg'
import image2 from './assets/image2.jpg'
import image3 from './assets/image3.jpg'


function AdxItm() {
  const items = [
    {
      image: image1,
      title: 'Marketing',
      description: 'Grow your brand awareness and engagement'
    },
    {
      image: image2,
      title: 'Handling',
      description: 'We handle your social media accounts professionally'
    },
    {
      image: image3,
      title: 'Servicing',
      description: '24/7 customer support to answer your questions'
    }
  ];
  return (
    <div className='mhs'>
      {items.map((item) => (
        <div className="item" key={item.title}>
          <img src={item.image} alt={item.title} />
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  )
}

export default AdxItm