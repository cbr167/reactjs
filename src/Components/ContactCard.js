
import React from "react";

function ContactCard(props){ //use can say anything (props)
    console.log(props)
    return(
        <div className="contact-card">
            <img src = {props.imgUrl}></img>
            <h3>{props.name}</h3>
            <p>Phone: {props.phn}</p>
            <p>Email: {props.email}</p>
        </div>
    )
}
export default ContactCard