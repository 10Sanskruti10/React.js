import ConditionalRendering from "./components/ConditionalRendering"
import Ex2 from "./components/Ex2"
import PropEx1 from "./components/PropEx1"
import PropEx2 from "./components/PropEx2"
import UseStateEx1 from "./components/UseStateEx1"

function App() {

  return (
    <>
     <PropEx1 name="Tom" country="india"/>
     <PropEx2 name="Jerry" age="23"/>
     <UseStateEx1/>

     <ConditionalRendering isLogged={false}/>
 
    </>
  )
}

export default App
