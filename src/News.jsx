import React from 'react'
import './News.css'
import achievement from './assets/achievement.jpg'
import celebration from './assets/celebration.jpg'
import futur from './assets/futur.jpg'

function News() {
  const items = [
    {
      image: achievement,
      title: 'Achivement',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis iste enim est quae, debitis totam laudantium id perferendis, molestiae voluptatem deleniti? Fuga provident, suscipit hic earum tempore atque dignissimos unde.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis iste enim est quae, debitis totam laudantium id perferendis, molestiae voluptatem deleniti? Fuga provident, suscipit hic earum tempore atque dignissimos unde.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis iste enim est quae, debitis totam laudantium id perferendis, molestiae voluptatem deleniti? Fuga provident, suscipit hic earum tempore atque dignissimos unde.'
    },
    {
      image: celebration,
      title: 'Celebration',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis iste enim est quae, debitis totam laudantium id perferendis, molestiae voluptatem deleniti? Fuga provident, suscipit hic earum tempore atque dignissimos unde.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis iste enim est quae, debitis totam laudantium id perferendis, molestiae voluptatem deleniti? Fuga provident, suscipit hic earum tempore atque dignissimos unde.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis iste enim est quae, debitis totam laudantium id perferendis, molestiae voluptatem deleniti? Fuga provident, suscipit hic earum tempore atque dignissimos unde.'

    },
    {
      image: futur,
      title: 'Future',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis iste enim est quae, debitis totam laudantium id perferendis, molestiae voluptatem deleniti? Fuga provident, suscipit hic earum tempore atque dignissimos unde.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis iste enim est quae, debitis totam laudantium id perferendis, molestiae voluptatem deleniti? Fuga provident, suscipit hic earum tempore atque dignissimos unde.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis iste enim est quae, debitis totam laudantium id perferendis, molestiae voluptatem deleniti? Fuga provident, suscipit hic earum tempore atque dignissimos unde.'

    }
  ];
  return (
    <div className='news'>
      {items.map((Newsitem) => (
        <div className="Newsitem" key={Newsitem.title}>
          <img src={Newsitem.image} alt={Newsitem.title} />
          <h3>{Newsitem.title}</h3>
          <p>{Newsitem.description}</p>
        </div>
      ))}
    </div>
  )
}

export default News