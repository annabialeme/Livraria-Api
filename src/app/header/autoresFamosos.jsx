import styles from './autores.module.css';

const autores = [
  {
    nome: 'Stephen King',
    foto: 'https://upload.wikimedia.org/wikipedia/commons/e/e3/Stephen_King%2C_Comicon.jpg',
    bio: 'Autor de mais de 60 romances, mestre do terror e suspense. Obras famosas: "It", "O Iluminado", "Carrie".',
  },
  {
    nome: 'Clive Barker',
    foto: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Clive_Barker_%282007%29.jpg',
    bio: 'Criador de "Hellraiser" e "Livros de Sangue", mistura horror sobrenatural e fantasia sombria.',
  },
  {
    nome: 'Shirley Jackson',
    foto: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Shirley_Jackson_%281945%29.jpg',
    bio: 'Referência em horror psicológico, autora de "A Assombração da Casa da Colina" e "Sempre Vivemos no Castelo".',
  }
];

export default function AutoresFamosos() {
  return (
    <section className={styles.bgAutores}>
      <h2 className={styles.titulo}>Autores Famosos do Terror</h2>
      <div className={styles.listaAutores}>
        {autores.map((autor, idx) => (
          <div key={idx} className={styles.cardAutor}>
            <img src={autor.foto} alt={autor.nome} className={styles.fotoAutor} />
            <div className={styles.infoAutor}>
              <span className={styles.nomeAutor}>{autor.nome}</span>
              <p className={styles.bioAutor}>{autor.bio}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
