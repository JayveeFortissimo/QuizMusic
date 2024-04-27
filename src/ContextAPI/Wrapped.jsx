import { useRef, useState } from 'react';
import Create from './Create.js';

const Wrapped = ({children}) => {

    const Points = useRef(0);

    const [questioned,setquestioned] = useState([]);
     //I ooutput natin si Questionaire.js naka array then yung length ni use state gagmitin natin para palipat lipat ng next question
    const VariableQuestion = questioned.length;


    const setQuestionaire = (values) => {
        return setquestioned(elements => [...elements,values]);
    }

    const Reset = () =>{
        setquestioned([]);
    }
    //Set it into value hehe
    const Values = {
        VariableQuestion,
        setQuestionaire,
        Points,
        Reset
    }


    console.log(VariableQuestion)

  return (
   <Create.Provider value={{Values}}>
{children}
   </Create.Provider>
  )
}

export default Wrapped