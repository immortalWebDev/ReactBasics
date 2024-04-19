// import { useState } from "react"
// import Button from "./components/Buttons"


// function App() {
//   const [color, setColor] = useState("olive")

//   return (
//     <div className="w-full h-screen duration-20000"
//     style={{backgroundColor: color}}
//     >
//       <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
//         <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
//           {/* <button
//           onClick={() => setColor("red")}
//           className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
//           style={{backgroundColor: "red"}}
//           >Red</button> */}
//           <Button></Button>
//           <button
//           onClick={() => setColor("green")}
//           className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
//           style={{backgroundColor: "green"}}
//           >Green</button>
//           <button
//           onClick={() => setColor("blue")}
//           className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
//           style={{backgroundColor: "blue"}}
//           >Blue</button>
//           <button
//           onClick={() => setColor("orange")}
//           className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
//           style={{backgroundColor: "orange"}}
//           >Orange</button>
//           <button
//           onClick={() => setColor("skyblue")}
//           className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
//           style={{backgroundColor: "skyblue"}}
//           >SkyBlue</button>
//           <button
//           onClick={() => setColor("olive")}
//           className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
//           style={{backgroundColor: "olive"}}
//           >Olive</button>
//           <button
//           onClick={() => setColor("black")}
//           className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
//           style={{backgroundColor: "black"}}
//           >Black</button>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default App




import React, { useState } from "react";
import Buttons from "./components/Buttons"; // Import Button component

function App() {
  const [color, setColor] = useState("olive");

  const handleButtonClick = (newColor) => {
    setColor(newColor);
  };

  return (
    <div className="w-full h-screen duration-1000" style={{ backgroundColor: color }}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          {/* Reusable Button components */}
          <Buttons color="violet" onClick={() => handleButtonClick("violet")} />
          <Buttons color="indigo" onClick={() => handleButtonClick("indigo")} />
          <Buttons color="blue" onClick={() => handleButtonClick("blue")} />
          <Buttons color="green" onClick={() => handleButtonClick("green")} />
          <Buttons color="yellow" onClick={() => handleButtonClick("yellow")} />
          <Buttons color="orange" onClick={() => handleButtonClick("orange")} />
          <Buttons color="red" onClick={() => handleButtonClick("red")} />
        </div>
      </div>
    </div>
    
  );
}

export default App;
