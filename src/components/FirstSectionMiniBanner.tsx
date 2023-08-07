import styles from "../styles/firstSectionMiniBanner.module.scss";

export default function FirstSectionMiniBanner() {
    return (
        <div className={styles.firstSectionMiniBanner}>
            <div className={styles.roundDiv}></div>
            <div className={styles.mainTextDiv}>
                <h1>É ótimo te ver por aqui!</h1>
                <p>
                    Somos a Orion Arquitetura, uma empresa que tem como propósito a
                    criação de ambientes saudáveis com foco no bem-estar das pessoas.
                </p>
            </div>
            <p className={styles.socialMedia}>
                Fique mais próximo de nosso trabalho nos seguindo nas Redes Sociais!
            </p>
        </div>
    );
}
