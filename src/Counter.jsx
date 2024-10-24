import { useState } from "react"

export default function Counter() {
    // const abc= useState(9);
    // console.log(abc);
    const [count, setCount] = useState(0);

    const summation = () => {
        const newCount = count + 1;
        setCount(newCount);
    }

    const subtraction = () => {
        const newCount = count -1;
        setCount(newCount)
    }

    return (
        <div style={ {border : "2px solid lightblue" , padding : "25px", borderRadius : "15px"} }>
            <h2>Counter : {count} </h2>
            <h2 onClick={summation}>ADD</h2>
            <h2 onClick={subtraction}>SUBTRACT</h2>
        </div>
    )
}

 // function getSomething() {
  //   return [2,4];
  // }

  // const [a,b] = getSomething();
  // console.log(a,b);

  // function getSomething(number) {
  //   function innerThing(value) {
  //     number = value;
  //   }
  //   return [number, innerThing];
  //   }
  