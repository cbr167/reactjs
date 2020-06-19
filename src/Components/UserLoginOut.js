import React from 'react';

function UserLoginOut(props){
    let buttonText = props.isUserLogin?"Log Out":"Log In"
    return(
        <div>
            {props.isUserLogin===true?<p>User Logged in</p>:<p>User Logged Out</p>}
            
            <button onClick= {()=>props.handleClick()}>{buttonText}</button>
        </div>
    )
}

 export default UserLoginOut