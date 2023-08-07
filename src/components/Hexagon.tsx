import styles from "../styles/hexagons.module.scss";

export default function Hexagon({
    img,
    nome,
    cargo,
}: {
    img?: string;
    nome?: string;
    cargo?: string;
}) {
    return (
        <li
            className={styles.hexagon}
            style={img ? { backgroundImage: `url("${img}")` } : {}}
        >
            {nome && cargo && (
                <div>
                    <p>{nome}</p>
                    <p>{cargo}</p>
                </div>
            )}
        </li>
    );
}
