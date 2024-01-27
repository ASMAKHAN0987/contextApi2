import React from 'react'
import UserContextProvider from './Context/UserContextProvider'
import Login from './Component/Login';
import Profile from './Component/Profile';
function App() {
  return (
    <>
      <UserContextProvider>
        <div className='flex justify-center border-solid flex-col border-4 border-black'>
         <h1>Chai or React</h1>
          <Login/>
          <Profile/>
          </div>
      </UserContextProvider>
    </>
  )
}

export default App