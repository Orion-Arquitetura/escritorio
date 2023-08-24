'use client'
import Hexagon from "./Hexagon";
import styles from "../styles/hexagons.module.scss";
import { useEffect, useState } from "react";

const funcionarios = [
    {
        foto: "imagens_funcionarios/katia.png",
        nome: "Kátia Fugazza",
        cargo: "Arquiteta Titular",
    },
    {
        foto: "imagens_funcionarios/paulo.jpg",
        nome: "Paulo Fugazza",
        cargo: "Informática e Administrador",
    },
    {
        foto: "imagens_funcionarios/walter.webp",
        nome: "Walter Jr",
        cargo: "Eng. Elétrico e de Segurança",
    },
    {
        foto: "imagens_funcionarios/marcosmarques.webp",
        nome: "Marcos Marques",
        cargo: "Gerente de Projetos e Engenheiro",
    },
    {
        foto: "imagens_funcionarios/diego.jpg",
        nome: "Diego",
        cargo: "Orçamentista",
    },
    {
        foto: "imagens_funcionarios/andrea.webp",
        nome: "Andrea Suzuki",
        cargo: "Administrativo",
    },
    {
        foto: "imagens_funcionarios/camila.webp",
        nome: "Camila Oliveira",
        cargo: "Designer de serviços",
    },
    {
        foto: "imagens_funcionarios/marcos.webp",
        nome: "Marcos Lima",
        cargo: "Projetista",
    },
    {
        foto: "imagens_funcionarios/carvalho.jpg",
        nome: "Gabriela Carvalho",
        cargo: "Projetista",
    },
    {
        foto: "imagens_funcionarios/joaopedro.webp",
        nome: "João Pedro",
        cargo: "Acadêmico de Informática",
    },
    {
        foto: "imagens_funcionarios/carol.webp",
        nome: "Caroline Freire",
        cargo: "Projetista",
    },
    {
        foto: "imagens_funcionarios/julia.jpg",
        nome: "Julia Telles",
        cargo: "Projetista"
    },
    {
        foto: "imagens_funcionarios/michel.webp",
        nome: "Michel Carvalho",
        cargo: "Jovem Aprendiz",
    },
];

export default function HexagonsWrapper() {
    const [windowWidth, setWindowWidth] = useState<null | number>(null)

    useEffect(() => {
        const resize = () => {
            setWindowWidth(window.innerWidth)
        }

        resize()

        window.addEventListener("resize", resize)

        return () => {
            window.removeEventListener("resize", resize)
        }
    }, [])

    const breakpoint = 800

    if (windowWidth < 800) {
        return <div className={styles.hexagonsWrapper}>
                     <ul>
                    {new Array(2).fill(1).map((el) => (
                        <Hexagon
                            key={Math.random() * 1000}
                        />
                    ))}

                    <Hexagon
                        key={Math.random() * 1000}
                        img="/imagens_funcionarios/katia.png"
                        nome="Kátia Fugazza"
                        cargo="Arquiteta Titular"
                    />

                    <Hexagon
                        key={Math.random() * 1000}
                        img="/imagens_funcionarios/carvalho.jpg"
                        nome="Gabriela Carvalho"
                        cargo="Projetista"
                    />

                    <Hexagon
                        key={Math.random() * 1000}
                        img="/imagens_funcionarios/camila.webp"
                        nome="Camila Oliveira"
                        cargo="Designer de serviços"
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
                        nome="Paulo Fugazza"
                        cargo="Informática e Administrador"
                    />

                    <Hexagon
                        key={Math.random() * 1000}
                        img="/imagens_funcionarios/marcosmarques.webp"
                        nome="Marcos Marques"
                        cargo="Gerente de Projetos e Engenheiro"
                    />

                    <Hexagon
                        key={Math.random() * 1000}
                        img="/imagens_funcionarios/marcos.webp"
                        nome="Marcos Lima"
                        cargo="Projetista"
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
                        nome="Walter Jr"
                        cargo="Eng. Elétrico e de Segurança"
                    />

                    <Hexagon
                        key={Math.random() * 1000}
                        img="/imagens_funcionarios/joaopedro.webp"
                        nome="João Pedro"
                        cargo="Acadêmico de Informática"
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
                        nome="Diego"
                        cargo="Orçamentista"
                    />

                    <Hexagon
                        key={Math.random() * 1000}
                        img="/imagens_funcionarios/carol.webp"
                        nome="Caroline Freire"
                        cargo="Projetista"
                    />

                    <Hexagon
                        key={Math.random() * 1000}
                        img="/imagens_funcionarios/alexia.png"
                        nome="Alexia"
                        cargo="Acadêmica de Arquitetura"
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
                        nome="Andrea Suzuki"
                        cargo="Administrativo"
                    />

                    <Hexagon
                        key={Math.random() * 1000}
                        img="/imagens_funcionarios/julia.jpg"
                        nome="Julia Telles"
                        cargo="Projetista"
                    />

                    <Hexagon
                        key={Math.random() * 1000}
                        img="/imagens_funcionarios/naomi.png"
                        nome="Naomi"
                        cargo="Acadêmica de Arquitetura"
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
                        nome="Michel Carvalho"
                        cargo="Jovem Aprendiz"
                    />
                </ul>
        </div>
    }

    if (windowWidth > 800) {
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
                        nome="Kátia Fugazza"
                        cargo="Arquiteta Titular"
                    />

                    <Hexagon
                        key={Math.random() * 1000}
                        img="/imagens_funcionarios/carvalho.jpg"
                        nome="Gabriela Carvalho"
                        cargo="Projetista"
                    />

                    <Hexagon
                        key={Math.random() * 1000}
                        img="/imagens_funcionarios/camila.webp"
                        nome="Camila Oliveira"
                        cargo="Designer de serviços"
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
                        nome="Paulo Fugazza"
                        cargo="Informática e Administrador"
                    />

                    <Hexagon
                        key={Math.random() * 1000}
                        img="/imagens_funcionarios/marcosmarques.webp"
                        nome="Marcos Marques"
                        cargo="Gerente de Projetos e Engenheiro"
                    />

                    <Hexagon
                        key={Math.random() * 1000}
                        img="/imagens_funcionarios/marcos.webp"
                        nome="Marcos Lima"
                        cargo="Projetista"
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
                        nome="Walter Jr"
                        cargo="Eng. Elétrico e de Segurança"
                    />

                    <Hexagon
                        key={Math.random() * 1000}
                        img="/imagens_funcionarios/joaopedro.webp"
                        nome="João Pedro"
                        cargo="Acadêmico de Informática"
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
                        nome="Diego"
                        cargo="Orçamentista"
                    />

                    <Hexagon
                        key={Math.random() * 1000}
                        img="/imagens_funcionarios/carol.webp"
                        nome="Caroline Freire"
                        cargo="Projetista"
                    />

                    <Hexagon
                        key={Math.random() * 1000}
                        img="/imagens_funcionarios/alexia.png"
                        nome="Alexia"
                        cargo="Acadêmica de Arquitetura"
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
                        nome="Andrea Suzuki"
                        cargo="Administrativo"
                    />

                    <Hexagon
                        key={Math.random() * 1000}
                        img="/imagens_funcionarios/julia.jpg"
                        nome="Julia Telles"
                        cargo="Projetista"
                    />

                    <Hexagon
                        key={Math.random() * 1000}
                        img="/imagens_funcionarios/naomi.png"
                        nome="Naomi"
                        cargo="Acadêmica de Arquitetura"
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
                        nome="Michel Carvalho"
                        cargo="Jovem Aprendiz"
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



}
