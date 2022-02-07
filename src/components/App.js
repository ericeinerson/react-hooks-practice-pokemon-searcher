import Reac,{ useEffect } from "react";
import PokemonPage from "./PokemonPage";

function App() {

  const pokemon_url_1 = 'http://localhost:3000'
  const pokemon_url = 'http://localhost:3000'

  useEffect(()=> 
  fetch((pokemon_url)
  .then((r)=> r.json())
  .then((data)=> {
    
  })
  )


  return (
    <div className="App">
      <PokemonPage />
    </div>
  );
}

export default App;
