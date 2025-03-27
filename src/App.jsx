import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProductList from './components/ProductList'
import UserList from './components/UserList'
import RefExample from './components/RefExample'

function App() {
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <RefExample />
      <hr />
      <UserList items={['Alice', 'Bob', 'Charlie']} />
      <ProductList items={['Apple', 'Mango', 'Banana', 'Watermelon']} />
      <UserList items={[]} />
      <ProductList />
    </>
  )
}

export default App
