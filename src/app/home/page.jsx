import styles from './home.module.css';

export default function Home() {
  return (
    <div className={styles.bgParticles}>
      <div className={styles.container}>
        <header className={styles.header}>
          <div className={styles.headerContent}>
            <h1 className={styles.logo}>Vox Mortis</h1>
            <nav className={styles.nav}>
              <ul className={styles.menu}>
                <li><a href="/" className={styles.link}>Home</a></li>
                <li><a href="#" className={styles.link}>Contacts</a></li>
              </ul>
            </nav>
          </div>
        </header>
        <div className={styles.card}>
          <div className={styles.leftContent}>
            <h1 className={styles.horrorTitle}>HORROR</h1>
            <p className={styles.text}>Livros de terror para quem gosta de emoção e mistério.</p>
          </div>
        </div>
      </div>
    </div>
  );
}