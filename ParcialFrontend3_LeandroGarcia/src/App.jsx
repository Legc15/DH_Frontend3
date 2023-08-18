import { useState } from "react";
import Form from "./Form";
import List from "./List";
import "./App.css";

function App() {
  const [canciones, setCanciones] = useState([]);

  const agregarCancion = (cancion) => {
    setCanciones([...canciones, cancion]);
  };

  return (
      <div className="App">
        <h1>Tus Canciones Favoritas</h1>
        <Form onAgregarCancion={agregarCancion}/>
        <List canciones={canciones}/>
      </div>
  )
}

export default App
