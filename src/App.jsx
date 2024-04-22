import React from "react";

import Header from "./components/Layout/Header";

import Meals from "./components/Meals/Meals";

const App = () => {

  return(
    <>
    <Header></Header>
    <main>
      <Meals></Meals>
    </main>
    </>
  )
}

export default App