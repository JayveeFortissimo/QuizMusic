import Header from "./Components/Header";
import Questionaires from "./Components/QuestionCom/Questionaires";
import Wrapped from "./ContextAPI/Wrapped";

function App() {

  return (
    <>
    
    <Wrapped>
<div className="bg-Backgrounds min-h-screen bg-BlackMat text-slate-200">
<Header />
    <Questionaires />
</div>
    
    </Wrapped>
    
    </>
  )
}

export default App
