



import React from 'react';
import './Button.css';

export default function Button(props) {
    return (
        <div>
            <button className="button" type={props.type} onClick={props.onClick}>{props.children}</button>
        </div>
    );
};

// import React from 'react';
// import './Button.css';

// const Button=(props)=> {

//     return (
//             <button type={props.type} className="Button" onclick={props.onclick}>
//                 {props.children}
//             </button>
            
//     )
// }

// export default Button;