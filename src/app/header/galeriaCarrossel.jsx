"use client";
import { useState, useEffect } from 'react';
import styles from './galeriaCarrossel.module.css';

export default function GaleriaCarrossel() {
  const [livros, setLivros] = useState([]);
  const [atual, setAtual] = useState(0);
  const [modalAberto, setModalAberto] = useState(false);

  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === 'ArrowLeft') anterior();
      if (e.key === 'ArrowRight') proxima();
    }
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  });

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
  function abrirModal() {
    setModalAberto(true);
  }
  function fecharModal() {
    setModalAberto(false);
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
        <div style={{position:'relative', display:'flex', flexDirection:'column', alignItems:'center'}}>
          <img
            src={livros[atual].src}
            alt={livros[atual].nome}
            className={styles.livroImg + ' ' + styles.livroDestaque}
            onClick={abrirModal}
          />
          <div className={styles.capaBtns}>
            <button className={styles.zoomBtn} title="Zoom" onClick={abrirModal}>🔍</button>
            <a className={styles.downloadBtn} href={livros[atual].src} download target="_blank" title="Download da capa">⬇️</a>
          </div>
        </div>
        <button onClick={proxima} className={styles.arrowBtn}>&#8594;</button>
      </div>
      <div className={styles.miniaturasRow}>
        {livros.map((livro, idx) => (
          <img
            key={idx}
            src={livro.src}
            alt={livro.nome}
            className={idx === atual ? styles.miniaturaAtiva : styles.miniatura}
            onClick={() => setAtual(idx)}
            title={livro.nome}
          />
        ))}
      </div>
      <div className={styles.livroTitulo}>{livros[atual].nome}</div>
      <div className={styles.livroDesc}>{livros[atual].descricao}</div>

      {modalAberto && (
        <div className={styles.modalBg} onClick={fecharModal}>
          <img
            src={livros[atual].src}
            alt={livros[atual].nome}
            className={styles.modalImg}
          />
        </div>
      )}
    </div>
  );
}