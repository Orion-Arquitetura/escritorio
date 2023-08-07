import { url } from "inspector";
import styles from "../styles/hexagons.module.scss";


export default function Hexagon({ img }: { img?: string }) {
    return <li className={styles.hexagon} style={img ? { backgroundImage: `url("${img}")` } : {}} />
}
