import Link from "next/link";
import styles from "./page.module.css"
const HomePage = () => {
    return (
        <main>
            <section className={styles.section}>
                <h2>Sobre o Blog</h2>
                <p>
                    Nosso blog é dedicado a trazer o vasto conhecimento da astronomia para todos os públicos, explorando desde planetas e estrelas até as teorias mais complexas sobre o universo. Junte-se a nós nessa jornada cósmica!
                </p>
            </section>

            <section className={styles.section}>
                <h2>Artigos Recentes</h2>
                <ul className={styles.cards}>
                    <li className={styles.card}>
                        <Link href="/blog/posts/saturno">
                            <h3 className={styles.cardTitle}>O Fascinante Planeta Saturno</h3>
                            <p className={styles.cardText}>Uma análise completa sobre os anéis e as luas de Saturno.</p>
                        </Link>
                    </li>
                    <li className={styles.card}>
                        <Link href="/blog/posts/descobertas">
                            <h3 className={styles.cardTitle}>Descobertas Recentes no Universo</h3>
                            <p className={styles.cardText}>Os mais novos avanços e descobertas da astronomia moderna.</p>
                        </Link>
                    </li>
                    <li className={styles.card}>
                        <Link href="/blog/posts/origens">
                            <h3 className={styles.cardTitle}>As Origens do Universo</h3>
                            <p className={styles.cardText}>Teorias sobre a origem e evolução do cosmos.</p>
                        </Link>
                    </li>
                </ul>
            </section>
        </main>
    );
};

export default HomePage;