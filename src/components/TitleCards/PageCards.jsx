import React, { useEffect, useRef } from 'react'
import './TitleCards.css'
import pages_data from '../../assets/pages/Pages_data';
import Player from '../../pages/Player/Player';



const PagesData = ({title,category}) => {
  const cardsRef = useRef();
const handleWheel = (event)=>{
  event.preventDefault();
  cardsRef.current.scrollLeft+=event.deltaY;

}
useEffect(()=>{
  cardsRef.current.addEventListener('wheel',handleWheel)
},[])
  return (
    <div className='title-cards'>
      <h2>{title?title:"Popular Anime On Netfilx"}</h2>
      <div className="card-list card-items " ref={cardsRef}>
        {pages_data.map((page,index)=>{
          return <div  className="card" key={index}>
          <img onClick={'/player'} src={page.image} alt="" />
          <p>{page.name}</p>
          </div>
        })}
      </div>
      
    </div>
  )
}

export default PagesData;
