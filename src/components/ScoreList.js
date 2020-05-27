import React from 'react'


export default function ScoreList({props}) {
    
    return (
        <div>
            {props.map((score, index) => (
                <div className="scorelist" key={index}>
                    <div className="scorename">
                        {score.n}
                    </div>
                    <div className="score">
                        {score.s}
                    </div>
                </div>
            ))}
            
        </div>
    )
}
