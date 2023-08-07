import { ReactNode } from "react";
import styles from "../styles/buscamosList.module.scss";

export default function BuscamosListItem(props: { title: string, children: ReactNode }) {
    return (
        <li className={styles.buscamosListItem}>
            <h3>{props.title}</h3>

            <div>
                <p>
                    {props.children}
                </p>
            </div>
        </li>
    )
}