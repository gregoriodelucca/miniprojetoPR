import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';


function App() {
  const [dados, setDados] = useState([]);
  const [carregando, setCarregando] = useState(true);

  // Requisição à API do PHP
  useEffect(() => {
    axios.get('http://localhost:8000/api.php')
      .then((response) => {
        setDados(response.data);
        setCarregando(false);
      })
      .catch((error) => {
        console.error('Erro ao carregar os dados:', error);
        setCarregando(false);
      });
  }, []);

  return (
    <div className="App">
      <h1>Lista de Pessoas</h1>
      {carregando ? (
        <p>Carregando...</p>
      ) : (
        <ul>
          {dados.map((pessoa) => (
            <li key={pessoa.id}>
              {pessoa.nome} - {pessoa.idade} anos
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
