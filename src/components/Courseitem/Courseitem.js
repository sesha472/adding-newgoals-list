

import React from 'react';
import './Courseitem.css';

const Courseitem=(props)=>{
    // const [text, settext] = useState("initialState")
   const delettexthandler=()=>{
       props.delettext(props.id);
   }
    return (
        
            <div className="courseitem" onClick={delettexthandler}>
                {props.text}
            </div>
            
    
    )
};
export default Courseitem;




// import React from 'react';
// import './Courseitem.css';

//  const Courseitem=(props)=> {

//      const delettexthanlder=()=>{
//          props.delettext(props.id)
//      }

//     return (
//         <div className="Courseitem" onClick={delettexthanlder}>
//          <p>{props.text}</p>   
            
//         </div>
//     )
// }

// export default Courseitem;