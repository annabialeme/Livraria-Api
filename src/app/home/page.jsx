import styles from './home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <h1 className={styles.title}>Vox Mortis</h1>
        <p className={styles.subtitle}>Livraria do Terror</p>
        <div className={styles.studentInfo}>
          <div className={styles.avatar}></div>
          <p className={styles.info}><strong>Turma:</strong> 2TDS1</p>
          <p className={styles.info}><strong>Escola:</strong> Senai</p>
          <p className={styles.info}><strong>Nome:</strong> Anna Beatriz Leme Alves</p>
          <p className={styles.quote}>"O sucesso não é garantido, mas a falha é certa se você não estiver determinado" – Robert Kiyosaki.</p>
        </div>
      </div>
    </div>
  );
}