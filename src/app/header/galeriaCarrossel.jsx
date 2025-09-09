"use client";
import { useState, useEffect } from 'react';



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
    setAtual(atual + 1);
  }
  function anterior() {
    setAtual(atual - 1);
  }

  if (livros.length === 0) {
    return (
      <div style={{ color: '#fff', textAlign: 'center', padding: '64px' }}>Carregando livros...</div>
    );
  }

  return (
    <div style={{ background: '#111', padding: '32px 0', minHeight: '500px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '32px', width: '100%' }}>
        <button onClick={anterior} disabled={atual === 0} style={{ fontSize: '2rem', color: '#fff', background: 'none', border: 'none', cursor: 'pointer' }}>&#8592;</button>
        <img
          src={livros[atual].src}
          alt={livros[atual].nome}
          style={{ width: '500px', height: '320px', objectFit: 'cover', borderRadius: '8px', boxShadow: '0 0 32px #000' }}
        />
        <button onClick={proxima} disabled={atual === livros.length - 1} style={{ fontSize: '2rem', color: '#fff', background: 'none', border: 'none', cursor: 'pointer' }}>&#8594;</button>
      </div>
      <div style={{ width: '100%', background: '#ffe600', color: '#222', fontWeight: 'bold', fontSize: '1.3rem', textAlign: 'center', marginTop: '24px', padding: '12px 0', letterSpacing: '1px' }}>
        {livros[atual].nome}
      </div>
      <div style={{ color: '#fff', textAlign: 'center', marginTop: '18px', fontSize: '1.1rem', maxWidth: '900px' }}>
        {livros[atual].descricao}
      </div>
    </div>
  );
}