import BuscamosListItem from "./BuscamosListItem";
import styles from "../styles/buscamosList.module.scss";

const cardsData = [
    {
        title: "Qualidade, Eficiência e Inovação!",
        description:
            "Tudo isso para sermos referência de qualidade, eficiência e inovação em arquitetura e engenharia para a saúde.",
    },
    {
        title: "Humanização",
        description:
            "Pensar em quem vai usar o espaço é o diferencial do nosso escritório.",
    },
    {
        title: "Padrões e Processos",
        description:
            "Consolidados permite que trabalhemos de forma integrada, presencial ou remotamente. Com qualidade, eficiência e inovação.",
    },
    {
        title: "Experiência do Usuário",
        description: "A jornada do usuário é pensada em todas as fases do projeto.",
    },
];

export default function BuscamosList() {
    return (
        <ul className={styles.buscamosList}>
            {cardsData.map((card) => <BuscamosListItem key={card.title} title={card.title} description={card.description} />)}
        </ul>
    );
}
