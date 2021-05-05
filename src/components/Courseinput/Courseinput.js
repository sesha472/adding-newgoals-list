
















import React,{useState} from 'react';
import Button from '../../UI/Button/Button';
import './Courseinput.css';

export default function Courseinput(props) {
    const [inputtext, setinputtext] = useState("");

    const inputchnagehandler=(e)=>{
        setinputtext(e.target.value);
    }
   const inputinfo=(event)=>{
    event.preventDefault();
       props.formdetails(inputtext);
       setinputtext("");
       
   }

    return (
        <div>
            <form onSubmit={inputinfo}>
                <div className="courseinput">
                <label>Enter the text</label>
                <input type="text" value={inputtext} onChange={inputchnagehandler} />
                <Button type="submit" >SUBMIT</Button>
                </div>
            </form>
        </div>
    )
}





// import React,{useState} from 'react';
// import Button from '../../UI/Button/Button';

// import './Courseinput.css';


// const  Courseinput =(props)=>{
//      const [enteredvalue, setenteredvalue] = useState(" ")


// const goalinputhandler =(event)=>{
//     setenteredvalue(event.target.value);
//          }
 
// let submitedform=event=>{
//     event.preventDefault();
//     props.enteredtext(enteredvalue);
//     setenteredvalue(" ");
// };
//     return (
//         <form onSubmit={submitedform}>
//              <div className="inputfiled">
//         <label>Course Goal</label>
//         <input type="text" value={enteredvalue} onChange={goalinputhandler} />
//         <Button type="submit" >submit</Button>
        
//       </div>
//         </form>
//     )
// }
// export default Courseinput;