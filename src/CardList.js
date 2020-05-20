import React from 'react'
import Card from "./Card"
import "./CardList.css"

function CardList({robots})
{
    return(
        <div className="list-container">
            {
                robots.map((robot)=>{
                    return(
                        <Card
                        key={robot.id}
                        imgId={robot.imgId}
                        name={robot.name}
                        username={robot.username}
                        email={robot.email}
                        />
                    );
                })
            }
        </div>
    );
}

export default CardList;