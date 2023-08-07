import { ReactNode } from "react";
import styles from "../styles/Section3List.module.scss";

export default function Section3ListItem({ title, buttonText, buttonHref, children }: { title: string, buttonText?: string, buttonHref?: string, children: ReactNode }) {
    return (
        <li className={styles.section3ListItem}>
            <h2>{title}</h2>
            {children}
            {buttonText && <button className={styles.cardButton}><a href={buttonHref} target="_blank">{buttonText}</a></button>}
        </li>
    )
}