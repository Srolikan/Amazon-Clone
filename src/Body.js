import React from 'react'
import './Body.css'
import Product from './Product'
import Rating from './Rating'

function Body() {

  const dbs = [
    {
      id: 1,
      title: 'Apple EarPods',
      star: <Rating />,
      price: '25$',
      img: 'https://m.media-amazon.com/images/I/7120GgUKj3L._AC_UL320_.jpg'
    },
    {
      id: 2,
      title: 'Playstation 4',
      star: <Rating />,
      price: '350$',
      img: 'https://m.media-amazon.com/images/I/61n-yWHcmSS._AC_UY218_.jpg'
    },
    {
      id: 3,
      title: 'Last of Us 2',
      star: <Rating />,
      price: '30$',
      img: 'https://m.media-amazon.com/images/I/71p8G+YeA6L._AC_UY218_.jpg'
    }
  ]

  const dbs2 = [
    {
      id: 4,
      title: 'iPhone 4',
      star: <Rating />,
      price: '30$',
      img: 'https://m.media-amazon.com/images/I/61f6S+WtUKL._AC_UY218_.jpg'
    },
    {
      id: 5,
      title: 'iPhone 44',
      star: <Rating />,
      price: '30$',
      img: 'https://m.media-amazon.com/images/I/712xpaJPT6L._AC_UL320_.jpg'
    }
  ]

  return (
    <div className='body'>
      <div className='row__line first__line'>
        {dbs.map(db => (
          <Product
            img={db.img}
            title={db.title}
            star={db.star}
            price={db.price}
          />
        ))}
      </div>

      <div className='row__line second__line'>
        {dbs2.map(db => (
          <Product
            img={db.img}
            title={db.title}
            star={db.star}
            price={db.price}
          />
        ))}
      </div>
    </div >
  )
}

export default Body