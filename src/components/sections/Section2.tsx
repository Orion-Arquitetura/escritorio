import BuscamosList from "../BuscamosList";
import styles  from "../../styles/Section2.module.scss"

export default function Section2() {
    return (
        <section className={styles.section2}>
            <h1 style={{ fontFamily: "'Kalam', cursive", color: "#203D42" }}>
                O que buscamos
            </h1>
            <hr style={{ height: "5px", backgroundColor: "#203D42", border: 0 }} />
            <BuscamosList />
        </section>
    );
}
