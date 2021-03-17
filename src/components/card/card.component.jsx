/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import "./card.style.css"
export const Card=(props)=>{
    return (
    <div className="card-container">
    <img src={`https://robohash.org/${props.monsters.id}?set=set2&size=180x180`} alt="monster image" />
        <h2> {props.monsters.name} </h2>
        <p>{props.monsters.email}</p>
    </div>
    )
    } 
    // ho wecwec