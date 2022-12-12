import { useState, FormEvent } from 'react'
import Head from "next/head"
import styles from './styles.module.scss'

import { setupAPIClient } from '../../services/api'
import { toast } from 'react-toastify'

function Animal(){
  const [nome, setNome] = useState('')
  const [especie, setEspecie] = useState('')
  const [idade, setIdade] = useState('')
  const [genero, setGenero] = useState('')


  async function handleRegister(event: FormEvent){
    event.preventDefault();

    if(nome === '' && especie === '' && genero === ''){
      return;
    }

    const apiClient = setupAPIClient();
    const result = await apiClient.post('/animais/', {
      nome: nome,
      idade: idade,
      especie: especie,
      genero: genero,
    })
    console.log(result.data.data)
  
    toast.success('Animal cadastrado com sucesso!')
    setNome('');

  }


  return(
    <>
      <Head>
      <title>Cadastre um animal - AHPAAN</title>
    </Head>
    <div>
      <main className={styles.container}>
        <h1>Cadastre um animal</h1>

        <form className={styles.form} onSubmit={handleRegister}>
          <input 
            type="text" 
            placeholder="Digite o nome do animal"
            className={styles.input}
            value={nome}
            onChange={ (e) => setNome(e.target.value) }
          />

          <select className={styles.input}value={especie} onChange={ (e) => setEspecie(e.target.value) } >
            <option>Selecione uma especie</option>
            <option value="cachorro">Cachorro</option>
            <option value="gato">Gato</option>
          </select>


          <select className={styles.input} value={genero} onChange={ (e) => setGenero(e.target.value) } >
            <option>Selecione genero</option>
            <option value="macho">Macho</option>
            <option value="femea">Femea</option>
          </select>

          <input 
            type="date" min="2000-01-01" max="2025-12-31"
            className={styles.input}
            value={idade}
            onChange={ (e) => setIdade(e.target.value) }
          />

         

        <button className={styles.button} type="submit">
            Cadastrar
        </button>

      </form>

      </main>
    </div>
    </>
  )
}


export default Animal
