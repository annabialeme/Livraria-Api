import styles from './home.module.css';

export default function Home() {
  return (
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
            <h1 className={styles.horrorTitle}>HORROR</h1>
            <p className={styles.text}>
              Descubra livros que vão arrepiar sua mente.<br />
              Terror, suspense e mistério em cada página.
            </p>
          </div>
        </div>

  );
}