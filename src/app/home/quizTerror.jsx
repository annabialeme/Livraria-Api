"use client";
import { useState } from 'react';
import styles from './quiz.module.css';

const perguntas = [
  {
    pergunta: 'Qual ambiente te deixa mais desconfortável?',
    opcoes: ['Casa abandonada', 'Cemitério', 'Floresta à noite', 'Hospital deserto'],
  },
  {
    pergunta: 'Qual criatura te assusta mais?',
    opcoes: ['Fantasma', 'Vampiro', 'Zumbi', 'Demônio'],
  },
  {
    pergunta: 'Qual objeto você evitaria tocar?',
    opcoes: ['Livro antigo', 'Espelho quebrado', 'Boneca antiga', 'Relógio parado'],
  },
];

const resultados = [
  {
    personagem: 'O Fantasma',
    descricao: 'Você é misterioso, silencioso e observa tudo das sombras. Ninguém sabe seus segredos!',
  },
  {
    personagem: 'O Vampiro',
    descricao: 'Você é elegante, sedutor e adora a noite. Tem um charme sombrio irresistível!',
  },
  {
    personagem: 'O Zumbi',
    descricao: 'Você é persistente, nunca desiste e sempre volta. Tem uma fome insaciável por novidades!',
  },
  {
    personagem: 'O Demônio',
    descricao: 'Você é intenso, imprevisível e adora desafiar limites. Sua presença causa arrepios!',
  },
];

export default function QuizTerror() {
  const [etapa, setEtapa] = useState(0);
  const [respostas, setRespostas] = useState([]);
  const [resultado, setResultado] = useState(null);
  const [nome, setNome] = useState("");
  const [iniciado, setIniciado] = useState(false);

  function responder(idx) {
    const novas = [...respostas, idx];
    setRespostas(novas);
    if (etapa < perguntas.length - 1) {
      setEtapa(etapa + 1);
    } else {
      const maisEscolhido = novas.reduce((a, b, i, arr) => arr.filter(x => x === a).length >= arr.filter(x => x === b).length ? a : b);
      setResultado(resultados[maisEscolhido]);
    }
  }

  function reiniciar() {
    setEtapa(0);
    setRespostas([]);
    setResultado(null);
  }

  return (
    <section className={styles.bgQuiz}>
      <h2 className={styles.titulo}>Quiz: Qual personagem de terror você seria?</h2>
      {!iniciado ? (
        <div className={styles.quizBox}>
          <label className={styles.labelNome} htmlFor="nomeQuiz">Digite seu nome para começar:</label>
          <input id="nomeQuiz" className={styles.inputNome} type="text" value={nome} onChange={e => setNome(e.target.value)} placeholder="Seu nome..." />
          <button className={styles.iniciarBtn} onClick={() => nome.trim() && setIniciado(true)}>Iniciar Quiz</button>
        </div>
      ) : !resultado ? (
        <div className={styles.quizBox}>
          <p className={styles.pergunta}>{perguntas[etapa].pergunta}</p>
          <div className={styles.opcoesBox}>
            {perguntas[etapa].opcoes.map((op, idx) => (
              <button key={idx} className={styles.opcaoBtn} onClick={() => responder(idx)}>{op}</button>
            ))}
          </div>
        </div>
      ) : (
        <div className={styles.resultadoBox}>
          <h3 className={styles.personagem}>{nome ? `${nome}, você é ${resultado.personagem}!` : `Você é ${resultado.personagem}!`}</h3>
          <p className={styles.descricao}>{resultado.descricao}</p>
          <button className={styles.reiniciarBtn} onClick={() => {setIniciado(false); setNome(""); reiniciar();}}>Tentar novamente</button>
        </div>
      )}
    </section>
  );
}
