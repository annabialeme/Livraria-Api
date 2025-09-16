import styles from './autores.module.css';

const autores = [
  {
    nome: 'Christopher Pike',
    foto: 'https://christopherpikebooks.com/images/Pike/pike-author-photo.jpg',
    bio: 'Autor de suspense e terror juvenil, conhecido pela série "A Saga dos Irmãos Dracul" e "O Último Vampiro".',
  },
  {
    nome: 'Arthur Conan Doyle',
    foto: 'https://s2.glbimg.com/wDDMOB0Ek67TEtjZDBhqPSjZrvI=/e.glbimg.com/og/ed/f/original/2019/05/17/conan_doyle_2.jpg',
    bio: 'Famoso por criar Sherlock Holmes, também escreveu histórias de mistério e horror como "O Cão dos Baskervilles".',
  },
  {
    nome: 'Edgar Wallace',
    foto: 'https://m.media-amazon.com/images/M/MV5BYmZhMjk2NDctMjRhZS00ODNkLWFkNGEtOGYzMjZjNmM0ZDRiXkEyXkFqcGc@._V1_.jpg',
    bio: 'Mestre do suspense policial, autor de mais de 170 livros, incluindo "O Círculo Vermelho" e "O Mistério da Porta Vermelha".',
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
