import React, { useState, useEffect } from "react"
import logo from './logo.svg';
import './App.css';
import { data } from "browserslist";
import UseEffectAPI from "./UseEffectAPI"

function App() {

  const [name, setName] = useState([])

  useEffect(() => {
    loadData()
  }, [])

  const loadData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/photos")
    const data = await response.json()
    setName(data)
  }

  return (
    <div className="App">
      {
        name.map((r, id) => (
          <UseEffectAPI key={id} title={r.title} imageURL={r.url} />
        ))
      }
    </div>
  );
}

export default App;
