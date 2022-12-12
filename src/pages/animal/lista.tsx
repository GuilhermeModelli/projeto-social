import { useState, useEffect } from 'react'
import internal from 'stream';
import { setupAPIClient } from '../../services/api'

type Animal = {
  nome: string;
  idade: string;
  especie: string;
  genero: string;
}
 function ListAnimais() {
  const [animais, setAnimais] = useState<Animal[]>([]);
  
  useEffect(() => {
    fetch('http://127.0.0.1:8000/animais/').then(response => response.json()).then(data => {
      setAnimais(data)
      console.log(data)
    })
  }, []);
  

  return(
    <ul>
      {animais?.map(animal => {
        return (
          <li key={animal.nome}>
            <p>{animal.nome}</p>
          </li>
        )
      })}
    </ul>
  );
}

export default ListAnimais