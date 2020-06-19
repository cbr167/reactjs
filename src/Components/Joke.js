import React from "react";

function Joke(props){ //use can say anything (props)
    console.log(props)
    return(
        <div className="joke-item">
            <h3 style={{display:props.question?"block":"none"}}>Question: {props.question}</h3>
            <h3 style={{color: !props.question && "#888888"}}>PunchLine: {props.punchline}</h3>
            <hr/>
        </div>
    )
}
export default Joke