import './App.css'
import Counter from './Counter';

function App() {

  function handleClick(params) {
    alert("BUTTON - 1 CLICKED");
  }

  const handleClick2 = () => {
    alert("BUTTON - 2 CLLICKED");
  }

  const summation = (params) => {
    alert(params + 3);
  }
  
 
  

  return (
    <>

      <Counter></Counter>  
      {/* EVENT HANDLEING
      <h1>react core concepts part - 2 </h1>
      <button onClick={handleClick}>click button - 1</button> 
      <br />
      <button onClick={handleClick2}>click button - 2</button>
      <br />
      <button onClick={() => {alert("BUTTON - 3 CLICKED")}}>click button - 3</button>
      <br />
      <button onClick={ () => summation(5) }>summation of 5 + 3</button> */}

    </>
  )
}

export default App
