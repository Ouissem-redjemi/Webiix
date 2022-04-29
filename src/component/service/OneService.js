import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const OneService = (props) => {
    return (
        <div className="comp">
            <FontAwesomeIcon icon= {props.icon} />
            <h6>{props.title}</h6>
        </div>
    )
}

export default OneService;