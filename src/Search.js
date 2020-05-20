import React from 'react'
import "./Search.css"


function Search({updateRobots}){
    
    const sendString = (event) =>{
        updateRobots(event.target.value);
    }

    return(
        <div className="search-container">
            <input className="search-box" placeholder="Enter Name" onChange={sendString} type="text"/>
        </div>
    )
}

export default Search;