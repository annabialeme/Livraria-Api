import Image from 'next/image';
import Link from 'next/link';
import styles from './headerPage.module.css';
import GaleriaCarrossel from './galeriaCarrossel';

export default function HeaderPage() {
  return (
    <div className={styles.background}>
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
      <div className={styles.menuNav}>
        <span className={styles.menuTitle}>VOX MORTIS</span>
        <Link href="/" className={styles.menuLink}>Livros</Link>
        <Link href="/" className={styles.menuLink}>Sobre</Link>
        <Link href="/contato" className={styles.menuLink}>Contato</Link>
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


      
        <footer className={styles.footerCustom}>
          <div className={styles.footerContent}>
            <div className={styles.footerTitle}>VOX MORTIS</div>
            <p>© 2025 Livraria do Terror | Desenvolvido por Anna Beatriz Leme Alves</p>
            <div className={styles.footerLinksCustom}>
              <a href="https://github.com/annabialeme" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="mailto:annaleme.tds1@gmail.com">E-mail</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
