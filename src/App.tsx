// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

// --------------------------------------------------------------------------------------------------------------




// rafce

import React from 'react'
import AddToDo from './Components/AddToDo'
import Todos from './Components/todos'
import Navbar from './Components/navbar'
import './App.css'

const App = () => {
  return (
    //  remembder  .ts files are for regular TypeScript code , while .tsx files are for 
    // TypeScript code with jsx syntax , commonly used in react applications ,
    // <div>
    //   App
    // </div>
    <main>
      <h1>TODO REACT+TYPESCRIPT </h1>
      <Navbar></Navbar>
      <AddToDo/>
      <Todos />
    </main>
  )
}

export default App
