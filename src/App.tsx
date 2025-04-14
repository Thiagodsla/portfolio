// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import * as React from 'react';
import './App.css'
import { Home } from './pages/Home'
import { ChakraProvider } from '@chakra-ui/react'



// import { dayjsSetup } from './utility/timeJs.helper'


function App() {
  return (
    // <>
    <ChakraProvider>
      <Home/>
    </ChakraProvider>
    // </>
  )
}

export default App
