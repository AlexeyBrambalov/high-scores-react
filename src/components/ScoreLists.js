import React from 'react'
import allCountryScores from '../scores'
import ScoreList from './ScoreList'


export default function ScoreLists() {

    allCountryScores.sort((a, b) => a.name.localeCompare(b.name))
    
    return (
        <div>
           {allCountryScores.map((country, index) => (
               <div className="scorelists" key={index}>
                    <div className="countryname">High scores: {country.name}</div>
                    <ScoreList props = {country.scores}/>
               </div>
              ))}
            
        </div>
    )
}
