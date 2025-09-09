"use client";
import { useState, useEffect } from 'react';
import styles from './galeriaCarrossel.module.css';


export default function GaleriaCarrossel() {
  const [livros, setLivros] = useState([]);
  const [atual, setAtual] = useState(0);

  useEffect(() => {
    async function buscarLivros() {
      try {
        const resposta = await fetch('https://openlibrary.org/search.json?title=terror');
        const dados = await resposta.json();
    
        const livrosApi = (dados.docs || []).map(livro => ({
          nome: livro.title,
          src: livro.cover_i
            ? `https://covers.openlibrary.org/b/id/${livro.cover_i}-L.jpg`
            : 'https://via.placeholder.com/500x320?text=Sem+Capa',
          descricao: livro.author_name ? `Autor: ${livro.author_name.join(', ')}` : 'Sem descrição disponível.'
        })).slice(0, 10); 
        setLivros(livrosApi);
      } catch (e) {
        setLivros([]);
      }
    }
    buscarLivros();
  }, []);

  function proxima() {
    setAtual(atual === livros.length - 1 ? 0 : atual + 1);
  }
  function anterior() {
    setAtual(atual === 0 ? livros.length - 1 : atual - 1);
  }

  if (livros.length === 0) {
    return (
        <div className={styles.loading}>Carregando livros...</div>
    );
  }

  return (
    <div className={styles.carrosselBg}>
      <div className={styles.carrosselRow}>
        <button onClick={anterior} className={styles.arrowBtn}>&#8592;</button>
        <img
          src={livros[atual].src}
          alt={livros[atual].nome}
          className={styles.livroImg}
        />
        <button onClick={proxima} className={styles.arrowBtn}>&#8594;</button>
      </div>
      <div className={styles.livroTitulo}>{livros[atual].nome}</div>
      <div className={styles.livroDesc}>{livros[atual].descricao}</div>
    </div>
  );
}