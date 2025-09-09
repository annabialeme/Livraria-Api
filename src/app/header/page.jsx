import Image from 'next/image';
import Link from 'next/link';
import styles from './headerPage.module.css';
import GaleriaCarrossel from './galeriaCarrossel';

export default function HeaderPage() {
  return (
    <div className={styles.container}>
      <header style={{ background: '#111', minHeight: '480px', width: '100%', position: 'relative', textAlign: 'center', paddingBottom: '0' }}>
        <div style={{ paddingTop: '32px' }}>
          <h1 style={{ fontFamily: 'Impact, fantasy', fontSize: '6rem', color: '#fff', letterSpacing: '4px', marginBottom: '0', textShadow: '2px 2px 0 #900, 0 0 12px #000' }}>
            VOX MORTIS
          </h1>
        </div>
        <div style={{ marginTop: '32px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <img
            src={'/image/image.png'}
            alt={'Vox Mortis'}
            style={{ width: '320px', height: '420px', objectFit: 'cover', borderRadius: '12px', boxShadow: '0 0 32px #000' }}
          />
        </div>
      </header>
      <div style={{ width: '100%', background: '#4d4c47ff', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '18px 0', gap: '32px', boxShadow: '0 4px 12px #000', fontFamily: 'Impact, fantasy', fontSize: '2rem', letterSpacing: '2px' }}>
        <span style={{ color: '#900', fontWeight: 'bold', marginRight: '32px', fontSize: '2.2rem', textShadow: '1px 1px 0 #222' }}>VOX MORTIS</span>
        <Link href="/home" style={{ color: '#222', textDecoration: 'none', fontWeight: 'bold', margin: '0 16px' }}>Home</Link>
        <Link href="/livros" style={{ color: '#222', textDecoration: 'none', fontWeight: 'bold', margin: '0 16px' }}>Livros</Link>
        <Link href="/sobre" style={{ color: '#222', textDecoration: 'none', fontWeight: 'bold', margin: '0 16px' }}>Sobre</Link>
        <Link href="/contato" style={{ color: '#222', textDecoration: 'none', fontWeight: 'bold', margin: '0 16px' }}>Contato</Link>
      </div>
      <main className={styles.main}>
      

        <section className={styles.gallery}>
          <h2 className={styles.sectionTitle}>Galeria de Capas</h2>
          <GaleriaCarrossel />
        </section>
 <section className={styles.testimonials}>
          <h2 className={styles.sectionTitle}>Depoimentos de leitores</h2>
          <div className={styles.testimonialList}>
            <div className={styles.testimonial}>
              <p>“Nunca imaginei que livros de terror fossem tão envolventes!”</p>
              <span>- João</span>
            </div>
            <div className={styles.testimonial}>
              <p>“A Livraria do Terror tem os melhores clássicos!”</p>
              <span>- Maria</span>
            </div>
            <div className={styles.testimonial}>
              <p>“Recomendo para todos que gostam de emoção!”</p>
              <span>- Lucas</span>
            </div>
          </div>
        </section>

        <section className={styles.facts}>
          <h2 className={styles.sectionTitle}>Curiosidades</h2>
          <ul className={styles.factsList}>
            <li>O livro mais lido é “O Exorcista”.</li>
            <li>Mais de 500 alunos já participaram dos eventos.</li>
            <li>O gênero mais pedido é suspense.</li>
          </ul>
        </section>


      
        <footer style={{ width: '100vw', background: 'rgba(0,0,0,0.85)', color: '#fff', textAlign: 'center', padding: '24px 0 16px 0', fontFamily: 'Montserrat, sans-serif', fontSize: '1.1rem', letterSpacing: '1px', boxShadow: '0 -2px 12px #000' }}>
          <div style={{ maxWidth: '600px', margin: '0 auto' }}>
            <div style={{ marginBottom: '12px', fontWeight: 'bold', fontSize: '1.3rem', color: '#ff4c4c' }}>VOX MORTIS</div>
            <p>© 2025 Livraria do Terror | Desenvolvido por Anna Beatriz Leme Alves</p>
            <div style={{ marginTop: '12px', display: 'flex', justifyContent: 'center', gap: '24px' }}>
              <a href="https://github.com/annabialeme" target="_blank" rel="noopener noreferrer" style={{ color: '#ff4c4c', textDecoration: 'none', fontWeight: 'bold', fontSize: '1.1rem' }}>GitHub</a>
              <a href="mailto:anna@email.com" style={{ color: '#ff4c4c', textDecoration: 'none', fontWeight: 'bold', fontSize: '1.1rem' }}>E-mail</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
