import styles from './newsletter.module.css';

export default function Newsletter() {
  return (
    <section className={styles.bgNewsletter}>
      <h2 className={styles.titulo}>Receba Novidades Assustadoras</h2>
      <form className={styles.formNewsletter}>
        <input type="email" placeholder="Seu e-mail" className={styles.inputEmail} required />
        <button type="submit" className={styles.btnNewsletter}>Inscrever</button>
      </form>
      <p className={styles.textoNewsletter}>Fique por dentro dos lançamentos, eventos e curiosidades do universo do terror!</p>
    </section>
  );
}
