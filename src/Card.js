import React from 'react'
import "./Card.css"

function Card(robot){
    return(
        <div className="card">
            <div>
                <img src={`https://robohash.org/${robot.imgId}`} className="image"/>
            </div>

            <div className="card-container">
                <h3 className="title">{robot.name}</h3>
                <ul className="info">
                    <li><p>{robot.username}</p></li>
                    <li>Contact:
                    <p>{robot.email}</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Card;