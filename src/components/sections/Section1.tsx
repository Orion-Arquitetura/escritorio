import FirstSectionMiniBanner from "../FirstSectionMiniBanner";
import HexagonsWrapper from "../HexagonsWrapper";


export default function Section1() {
    return (
        <section style={{ position: "relative", maxHeight: "100vh" }}>
            <HexagonsWrapper />
            <FirstSectionMiniBanner />
        </section>
    )
}