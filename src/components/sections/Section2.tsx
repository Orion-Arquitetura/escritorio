import BuscamosList from "../BuscamosList";

export default function Section2() {
    return (
        <section
            style={{
                paddingInline: "8%",
                paddingTop: "2%",
                paddingBottom: "2%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
            }}
        >
            <h1 style={{ fontFamily: "'Kalam', cursive", color: "#203D42" }}>
                O que buscamos
            </h1>
            <hr style={{ height: "5px", backgroundColor: "#203D42", border: 0 }} />
            <BuscamosList />
        </section>
    );
}
