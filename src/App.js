import React , {useState} from 'react'
import CardList from "./CardList"
import {robots} from "./factory"
import Search from "./Search"
import "./App.css"
import Scroll from "./Scroll.js"


function App(){

    const[newRobots,setNewRobots] = useState(robots);

    const updateRobots = (str) =>{
        const searchedRobots = [];
        robots.forEach(robot =>{
            
            if(robot.name.toLowerCase().includes(str.toLowerCase()))
                searchedRobots.push(robot);
        })
        setNewRobots(searchedRobots);
    }
    return(
        <div className="body">
        <div className="header"><h1>ROBOFRIENDS</h1></div>
        <Search updateRobots ={updateRobots}/>
        <Scroll>
            <CardList robots ={newRobots}/>
        </Scroll>
        </div>
    )
}

export default App;