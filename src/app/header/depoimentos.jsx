"use client";
import { useState } from 'react';
import styles from './depoimentos.module.css';

const depoimentosExemplo = [
  {
    nome: 'Ana Bia',
    cidade: 'São Paulo',
    foto: 'https://wl-incrivel.cf.tsp.li/resize/728x/png/821/480/b943ef5ded82f5de02bbac3d1f.png',
    texto: 'A livraria tem uma seleção incrível de livros de terror! Recomendo muito.',
    estrelas: 5,
    destaque: true
  },
  {
    nome: 'Gabriel',
    cidade: 'Curitiba',
    foto: 'https://i.pinimg.com/236x/ec/cc/24/eccc24c2f59851d0002f20ceb15698c1.jpg',
    texto: 'Adorei os lançamentos de horror. Voltarei sempre!',
    estrelas: 4,
    destaque: false
  },
  {
    nome: 'Juliana Lima',
    cidade: 'Recife',
    foto: 'https://wl-incrivel.cf.tsp.li/resize/728x/jpg/205/33c/14fba15321a055b6f92a2416a4.jpg',
    texto: 'Ambiente sombrio e perfeito para quem ama terror. Me senti em casa!',
    estrelas: 5,
    destaque: false
  },
  {
    nome: 'Maria',
    cidade: 'Porto Alegre',
    foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCI2_zwV7AtCVUe6sufGbV94oBEykD6UXMVg&s',
    texto: 'Nunca imaginei que um livro pudesse me dar arrepios de verdade. Experiência única!',
    estrelas: 4,
    destaque: false
  },
  {
    nome: 'Beatriz',
    cidade: 'Cataguases',
    foto: 'https://www.rbsdirect.com.br/imagesrc/25068354.jpg?w=700',
    texto: 'Ambiente sombrio e perfeito para quem ama terror. Me senti em casa!',
    estrelas: 5,
    destaque: false
  }
];

export default function Depoimentos() {
  const [filtro, setFiltro] = useState(0);
  const [atual, setAtual] = useState(0);
  const depoimentosFiltrados = filtro > 0 ? depoimentosExemplo.filter(d => d.estrelas === filtro) : depoimentosExemplo;
  const depoimento = depoimentosFiltrados.length > 0 ? depoimentosFiltrados[atual] : null;

  function proximo() {
    setAtual(atual === depoimentosFiltrados.length - 1 ? 0 : atual + 1);
  }
  function anterior() {
    setAtual(atual === 0 ? depoimentosFiltrados.length - 1 : atual - 1);
  }

  return (
    <section className={styles.bgTerror}>
      <h2 className={styles.titulo}>Depoimentos de Leitores</h2>
      <div className={styles.filtros}>
        <span>Filtrar por nota:</span>
        {[0,1,2,3,4,5].map(n => (
          <button key={n} className={filtro===n?styles.filtroAtivo:styles.filtroBtn} onClick={()=>{setFiltro(n);setAtual(0);}}>
            {n === 0 ? 'Todos' : '★'.repeat(n)}
          </button>
        ))}
      </div>
      {depoimento ? (
        <div className={styles.card} style={depoimento.destaque ? {border:'2px solid #ffe600', boxShadow:'0 0 32px #2c0000'} : {}}>
          <img src={depoimento.foto} alt={depoimento.nome} className={styles.foto}/>
          <div className={styles.infoLeitor}>
            <span className={styles.nome}>{depoimento.nome}</span>
            <span className={styles.cidade}>{depoimento.cidade}</span>
          </div>
          <div className={styles.estrelas}>{'★'.repeat(depoimento.estrelas)}</div>
          <p className={styles.texto}>{depoimento.texto}</p>
        </div>
      ) : (
        <div className={styles.card}>
          <p className={styles.texto}>Nenhum depoimento encontrado para esse filtro.</p>
        </div>
      )}
      <div className={styles.navegacao}>
        <button onClick={anterior} className={styles.arrowBtn}>◀</button>
        <button onClick={proximo} className={styles.arrowBtn}>▶</button>
      </div>
      <button className={styles.enviarBtn}>Enviar depoimento</button>
    </section>
  );
}
