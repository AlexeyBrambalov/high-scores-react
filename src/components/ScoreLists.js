import React, {useState} from 'react'
import allCountryScores from '../scores'
import ScoreList from './ScoreList'


export default function ScoreLists() {

    const[order, setOrder] = useState(false)

    order ? allCountryScores.sort((a, b) => a.name.localeCompare(b.name)) : allCountryScores.sort((a, b) => b.name.localeCompare(a.name))

    

    return (
        <div>
            <button onClick={()=> setOrder(!order)}>Change</button>


           {allCountryScores.map((country, index) => (
               <div className="scorelists" key={index}>
                    <div className="countryname">High scores: {country.name}</div>
                    <ScoreList props = {country.scores}/>
               </div>
            ))}
            
        </div>
    )
}
