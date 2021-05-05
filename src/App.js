

















import React,{useState} from 'react';
import './App.css';
import Coursegoallist from './components/Coursegoallist/Coursegoallist';
import Courseinput from './components/Courseinput/Courseinput'

export default function App(props) {
 const [courseGoals, setcourseGoals] = useState([
   {text:"sampple text1 " ,id:"s1"},
   {text:"sampple text2 " ,id:"s2"},
 ]);

const adddetails=(enterdtext)=>{
     const newarray=[...courseGoals];
     newarray.unshift({text:enterdtext ,id:Math.random().toString()})
     setcourseGoals(newarray);
    } 

  const selfdelettext=itemid=>{
    setcourseGoals(()=>{
      const newarry=courseGoals.filter(item=>item.id !== itemid);
 return newarry;
    })
     
  }

  let content =<p>no more text items are there!</p>;
  if(courseGoals.length>0){
content=<Coursegoallist textarraydata={courseGoals} ondelettext={selfdelettext}/>
  }

  return (
    <div className="App">
      <section>
        <Courseinput formdetails={adddetails}/>
      </section>
      <section>
        {content}
      </section>
           
      
    </div>
  )
}



// import './App.css';
// import React,{useState} from 'react';
// import Courseinput from './components/Courseinput/Courseinput';
// import Coursegoallist from './components/Coursegoallist/Coursegoallist';

// function App() {
//   const [courseGoals, setCourseGoals] = useState([
//     { text: 'Do all exercises!', id: 'g1' },
//     { text: 'Finish the course!', id: 'g2' }
//   ]);

//   const addGoalHandler=(inputext)=>{
//     const copytextarray=[...courseGoals];
//     copytextarray.unshift({text:inputext,id:Math.random().toString()});
//     setCourseGoals( copytextarray)

//   }
//  const delettexthandler=(textid)=>{
//   // const copyarray=[...courseGoals];
//   const copytextarray = courseGoals.filter(item => item.id !== textid);
//   //  const copytextarray=[...copytextarray];
//   //  copytextarray.filter(data=>data.id === textid )
//   setCourseGoals( copytextarray);
//  };

// //  const deleteItemHandler = goalId => {
// //   setCourseGoals(() => {
// //     const updatedGoals = courseGoals.filter(goal => goal.id !== goalId);
// //     return updatedGoals;
// //   });
// // };
//   return (
//     <div className="App">

//       <section id="goal-form">
//        <Courseinput enteredtext={addGoalHandler}/>
//       </section>
      
//       <Coursegoallist  textdata={courseGoals}  onDeleteItem={delettexthandler}/>
//     </div>
//   );
// }

// export default App;
