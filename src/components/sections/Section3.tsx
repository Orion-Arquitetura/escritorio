import Section3ListItem from "../Section3ListItem";
import styles from "../../styles/Section3List.module.scss";

const cardsData = [
    {
        title: "Bim",
        description:
            "O uso do BIM (Building Information Modeling) na Orion Arquitetura revolucionou a maneira como projetamos e construímos. Através dessa metodologia inovadora, somos capazes de criar modelos virtuais tridimensionais altamente precisos e detalhados, que integram todas as informações relevantes de um projeto arquitetônico, desde elementos estruturais até sistemas elétricos e hidráulicos.",
    },
    {
        title: "Manuais e Normas",
        description:
            "Nossa biblioteca auxilia na orientação da implementação do Building Information Modeling em projetos arquitetônicos e garante um padronização das criações e gestão de modelos. Há benefícios significativos ao utilizá-la, como a melhoria da colaboração entre equipes, a redução de erros e retrabalhos, e o aumento da eficiência geral do processo de projeto e construção.",
    },
    {
        title: "Canais de Comunicação",
        description:
            "Todos da Orion Arquitetura possuem um acesso para utilizar a plataforma Teams da Microsoft. Dentro da plataforma há a subdivisão de projetos e pelo Planner (Microsoft) determinamos as tarefas que precisam ser cumpridas dentro dessas subdivisões. Para o compartilhamento de arquivos dentro da equipe, utilizamos o Onedrive ou o Sharepoint. E para as revisões internas, utilizamos o Construcode. Caso não saiba como utilizar os programas citados acima, veja os vídeos na aba Orion Educa.",
    },
];

export default function Section3() {
    return (
        <section
            style={{
                paddingInline: "8%",
                height: "100vh",
                position: "relative",
                display: "grid",
                placeItems: "center",
            }}
        >
            <ul className={styles.section3List}>
                {cardsData.map((card) => {
                    return (
                        <Section3ListItem
                            key={card.title}
                            title={card.title}
                            buttonText={
                                card.title === "Manuais e Normas"
                                    ? "Clique aqui para acessar nossa biblioteca"
                                    : ""
                            }
                        >
                            {card.description}
                        </Section3ListItem>
                    );
                })}

                <Section3ListItem
                    key={"Orion Educa"}
                    title={"Orion Educa"}
                    buttonText={"Clique aqui para acessar os cursos da Orion"}
                    buttonHref="https://educa.orionarquitetura.com/"
                >
                    <p>
                        Nesta página você encontrará todos os cursos de educação continuada
                        produzidos pela Orion!
                    </p>
                    <p style={{ textAlign: "center", margin: "16px 0" }}>
                        <i>
                            <strong>&quot;O que posso aprender hoje?&quot;</strong>
                        </i>
                    </p>
                    <p>
                        Seu acesso vai de dicas até cursos específicos das disciplinas que
                        usamos no nosso dia a dia.
                    </p>
                </Section3ListItem>
            </ul>
        </section>
    );
}
