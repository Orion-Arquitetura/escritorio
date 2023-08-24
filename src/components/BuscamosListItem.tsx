import { ReactNode } from "react";
import styles from "../styles/buscamosList.module.scss";

export default function BuscamosListItem(props: { title: string, description: string}) {
    return (
        <li className={styles.buscamosListItem}>
            <h3>{props.title}</h3>

            <div>
                <p className={styles.buscamosListItemDescricao}>
                    {props.description}
                </p>
            </div>
        </li>
    )
}