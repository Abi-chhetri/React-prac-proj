import { useCallback, useState } from "react";
function App() {
  const[count,setCount]=useState(10);
  const[count4,setCount4]=useState(4);
  const[count5,setCount5]=useState(5);

function increment(){
  if(count>=20){
    alert('limit exceed');
  }
  else{
    setCount(count+1); /*this one is little diff because here we are not definig
                         setcount call back we are directly adding setcount preset 
                         value which is in count  with +1 this is not good practice but it works*/
   // setCount(prev=>prev+1); 
  }
}

function increment4(){
  count4>=48? alert('limit exceed'): setCount4(prev=> prev+4);
}

const increment5=()=>{
  if(count5>=49){
    alert('limit exceed');
  }
  else{
    setCount5(prev=> prev+1);
    setCount5(prev=> prev+1);
    setCount5(prev=> prev+1);
    setCount5(prevCounter=> prevCounter+1);
  }
}

  return (
   <>
   <div>
    <div className="h-screen w-screen bg-indigo-950 text-indigo-800">
      <h1 className="text-5xl text-rose-200 text-center p-1">COUNETR APP</h1>
      <div className="text-white w-full h-36 bg-orange-900 mt-4 p-2 rounded-lg">
        <ul className="flex justify-evenly">
          <li>normol counter</li>
          <li>+4 counter</li>
          <li>+4 counter little different</li>
        </ul>
        <ul className="flex justify-evenly mt-2 ">
          <li className="border-white border-2 p-1 hover:bg-black hover:text-orange-500 active:bg-gray-700 rounded-lg" onClick={increment}><button>COUNTER+: {count}</button></li>
          <li className="border-white border-2 p-1 hover:bg-black hover:text-orange-500 active:bg-gray-700 rounded-lg"><button onClick={increment4}>+4 COUNTER: {count4}</button></li>
          <li className="border-white border-2 p-1 hover:bg-black hover:text-orange-500 active:bg-gray-700 rounded-lg"><button onClick={increment5}>Diff +4 COUNTER: {count5}</button></li>
        </ul>
      </div>
    </div>
   </div>
   </>
  );
}

export default App;
