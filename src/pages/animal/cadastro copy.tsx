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
    const result = await apiClient.get('/animais/')
    toast.success('Animal cadastrado com sucesso!')
    setNome(result.nome);

  }


  return(
    <>
      <Head>
      <title>Nova categoria - Sujeito Pizzaria</title>
    </Head>
    <div>
      <main className={styles.container}>
        <h1>Cadastrar categorias</h1>

        <form className={styles.form} onSubmit={handleRegister}>
          <input 
            type="text" 
            placeholder="Digite o nome do animal"
            className={styles.input}
            value={nome}
            onChange={ (e) => setNome(e.target.value) }
          />

          <input 
            type="text" 
            placeholder="Digite a especie"
            className={styles.input}
            value={especie}
            onChange={ (e) => setEspecie(e.target.value) }
          />


          <input 
            type="text" 
            placeholder="Digite a idade"
            className={styles.input}
            value={idade}
            onChange={ (e) => setIdade(e.target.value) }
          />

          <input 
            type="text" 
            placeholder="Digite o genero"
            className={styles.input}
            value={genero}
            onChange={ (e) => setGenero(e.target.value) }
           />

        <button className={styles.buttonAdd} type="submit">
            Cadastrar
        </button>

      </form>

      </main>
    </div>
    </>
  )
}


export default Animal
