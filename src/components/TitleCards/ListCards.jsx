import React, { useEffect, useRef } from 'react'
import './TitleCards.css'
import List_data from '../../assets/List/List_Data';



const ListsData = ({title,category}) => {
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
      <h2>{title?title:"Trending Now"}</h2>
      <div className="card-list" ref={cardsRef}>
        {List_data.map((page,index)=>{
          return <div className="card" key={index}>
          <img src={page.image} alt="" />
          <p>{page.name}</p>
          </div>
        })}
      </div>
      
    </div>
  )
}

export default ListsData;
