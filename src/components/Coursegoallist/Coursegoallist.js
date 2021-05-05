




import React from 'react';
import './Coursegoallist.css';
import Courseitem from '../Courseitem/Courseitem';

export default function Coursegoallist(props) {
    
    return (
        <div className="coursegoalitem">
            {props.textarraydata.map((item)=>{
      return (
                <Courseitem 
                key={item.id}
                id={item.id}
                delettext ={props.ondelettext}
                text={item.text} />
              )
             })
            }
           
        </div>
    )
}

// import React from 'react';
// import Courseitem from '../Courseitem/Courseitem';
// import './Coursegoallist.css';
// const Coursegoallist=(props)=> {
//     return (
//         <div className="goal-list">
//             {props.textdata.map((item)=>{
//                return (
//                    <Courseitem
//                    key={item.id} 
//                    id={item.id}
//                    delettext={props.onDeleteItem}
//                    text={item.text}

//                    />
//                )
//             })
            
//             }
            
//             </div>
//     )
// }
// export default Coursegoallist;