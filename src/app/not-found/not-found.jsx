import styles from './not-found.module.css';
export default function NotFound() {
    return (
        <div className={styles.container}>
            
            <h2 className={styles.subtitle}>Página não encontrada</h2>
            <p className="text-gray-400 mb-8 text-center max-w-md">
                O conteúdo que você procura se perdeu nas sombras...<br />
                Volte para a página inicial ou tente novamente.
            </p>
            <a href="/" className="bg-red-700 text-white px-6 py-3 rounded-lg shadow hover:bg-red-800 transition-all font-semibold">Voltar ao início</a>
        </div>
    );
}
