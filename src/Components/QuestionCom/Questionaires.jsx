import Questionaires1 from '../Questions/Questionaires1.js';
import { useContext } from 'react';
import Create from '../../ContextAPI/Create.js'

const Questionaires = () => {

const {Values} = useContext(Create);

  return (

    
    <div className='min-h-96 flex flex-col justify-center items-center gap-5'>
        
        {
          Values.VariableQuestion < 5 &&
          <>
        <h1 className='text-2xl text-center'>{Questionaires1[Values.VariableQuestion].Questions}</h1>
         <h2>
          {Questionaires1[Values.VariableQuestion].answers.map((elements,index) =>{
              return(
                <div key={index} className='m-5 bg-ab shadow-dev bg-buttons rounded' >
                  <button onClick={()=> {
                      Values.setQuestionaire(elements);
                      
                      if(elements === Questionaires1[0].answers[0] || elements === Questionaires1[1].answers[0] || elements === Questionaires1[2].answers[4]|| elements === Questionaires1[3].answers[2] || elements === Questionaires1[4].answers[0]){
                              Values.Points.current++;
                            }
                  }}  className='text-2xl py-3 px-4 '>{elements}</button>
                </div>
              )
          })}
         </h2>
         </>
}

         {
            Values.VariableQuestion >= 5 &&
            
            <>
                <div className='min-h-64 px-10 py-10 bg-buttons rounded '>
                     <h1>Score: {Values.Points.current}</h1>
                     <p>Correct Answers</p>
                     {
                     Questionaires1.map((elements,index)=>{

                         return(
                               <div key={elements.id} className='m-5'>
              {elements.id === 0? <p>1: {elements.answers[0]}</p>:null}
              {elements.id === 1? <p>2: {elements.answers[0]}</p>:null}
               {elements.id === 2? <p>3: {elements.answers[4]}</p> :null}
               {elements.id === 3? <p>4: {elements.answers[2]}</p>:null}
              {elements.id === 4? <p>5: {elements.answers[0]}</p>:null}
              
                                </div>
                              
                         )

                      
                      
                     })
                     }

                     <button  onClick={()=>{
                      Values.Reset();
                      Values.Points.current = 0;
                     }}className='bg-BlackMat py-2 px-2 rounded'>Play Again?</button>
                </div>
            </>
              
          }
        
    </div>
  )
}

export default Questionaires