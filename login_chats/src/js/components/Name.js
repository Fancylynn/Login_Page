import React from "react";


const WhatsYourName  = (props) => {
    return <div>
                <input type="text" onChange={props.updateName}/>
            </div>;
};

export default WhatsYourName;
