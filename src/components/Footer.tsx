/* eslint-disable @next/next/no-img-element */
import styles from "../styles/footer.module.scss";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerFirstDiv}>
                <div>
                    <img src="/orion-logo-branca.svg" alt="Orion" width={250} />
                    <ul>
                        <li>
                            <img src="/social_media_icons/instagram.svg" alt="Instagram" width={"90%"} />
                        </li>

                        <li>
                            <img src="/social_media_icons/fb.svg" alt="Facebook" width={"90%"} />
                        </li>

                        <li>
                            <img src="/social_media_icons/linkedin.svg" alt="Linkedin" width={"90%"} />
                        </li>

                        <li>
                            <img src="/social_media_icons/wpp.svg" alt="WhatsApp" width={"90%"} />
                        </li>
                    </ul>
                </div>
            </div>
            <div className={styles.footerSecondDiv}>
                <h1>
                    Venha desbravar o mundo <br /> e Viver a experiência com a gente!
                </h1>
            </div>
        </footer>
    );
}
