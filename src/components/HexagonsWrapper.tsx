import Hexagon from "./Hexagon";
import styles from "../styles/hexagons.module.scss";

export default function HexagonsWrapper() {
    return (
        <div className={styles.hexagonsWrapper}>
            <ul>
                {new Array(2).fill(1).map((el) => (
                    <Hexagon
                        key={Math.random() * 1000}
                    />
                ))}

                <Hexagon
                    key={Math.random() * 1000}
                    img="/imagens_funcionarios/katia.png"
                />

                <Hexagon
                    key={Math.random() * 1000}
                    img="/imagens_funcionarios/carvalho.jpg"
                />

                <Hexagon
                    key={Math.random() * 1000}
                    img="/imagens_funcionarios/camila.webp"
                />
            </ul>
            <ul>
                {new Array(1).fill(1).map((el) => (
                    <Hexagon
                        key={Math.random() * 1000}
                    />
                ))}

                <Hexagon
                    key={Math.random() * 1000}
                    img="/imagens_funcionarios/paulo.jpg"
                />

                <Hexagon
                    key={Math.random() * 1000}
                    img="/imagens_funcionarios/marcosmarques.webp"
                />

                <Hexagon
                    key={Math.random() * 1000}
                    img="/imagens_funcionarios/marcos.webp"
                />
            </ul>
            <ul>
                {new Array(2).fill(1).map((el) => (
                    <Hexagon
                        key={Math.random() * 1000}
                    />
                ))}

                <Hexagon
                    key={Math.random() * 1000}
                    img="/imagens_funcionarios/walter.webp"
                />

                <Hexagon
                    key={Math.random() * 1000}
                    img="/imagens_funcionarios/joaopedro.webp"
                />
            </ul>
            <ul>
                {new Array(1).fill(1).map((el) => (
                    <Hexagon
                        key={Math.random() * 1000}
                    />
                ))}

                <Hexagon
                    key={Math.random() * 1000}
                    img="/imagens_funcionarios/diego.jpg"
                />

                <Hexagon
                    key={Math.random() * 1000}
                    img="/imagens_funcionarios/carol.webp"
                />

                <Hexagon
                    key={Math.random() * 1000}
                    img="/imagens_funcionarios/alexia.png"
                />
            </ul>
            <ul>
                {new Array(2).fill(1).map((el) => (
                    <Hexagon
                        key={Math.random() * 1000}
                    />
                ))}

                <Hexagon
                    key={Math.random() * 1000}
                    img="/imagens_funcionarios/andrea.webp"
                />

                <Hexagon
                    key={Math.random() * 1000}
                    img="/imagens_funcionarios/julia.jpg"
                />

                <Hexagon
                    key={Math.random() * 1000}
                    img="/imagens_funcionarios/naomi.png"
                />
            </ul>
            <ul>
                {new Array(2).fill(1).map((el) => (
                    <Hexagon
                        key={Math.random() * 1000}
                    />
                ))}

                <Hexagon
                    key={Math.random() * 1000}
                    img="/imagens_funcionarios/michel.webp"
                />
            </ul>
            <ul>
                {new Array(2).fill(1).map((el) => (
                    <Hexagon
                        key={Math.random() * 1000}
                    />
                ))}
            </ul>
            <ul>
                {new Array(1).fill(1).map((el) => (
                    <Hexagon
                        key={Math.random() * 1000}
                    />
                ))}
            </ul>
            <ul>
                {new Array(2).fill(1).map((el) => (
                    <Hexagon
                        key={Math.random() * 1000}
                    />
                ))}
            </ul>
            <ul>
                {new Array(1).fill(1).map((el) => (
                    <Hexagon
                        key={Math.random() * 1000}
                    />
                ))}
            </ul>
            <ul>
                {new Array(2).fill(1).map((el) => (
                    <Hexagon
                        key={Math.random() * 1000}
                    />
                ))}
            </ul>
        </div>
    );
}
