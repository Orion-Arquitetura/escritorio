import styled from "styled-components";
import Hexagon from "./Hexagon";
import Button from "./Button";

const StyledSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  .fifth-section-main-div {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center start;
    align-items: center;
    padding-top: 4%;

    h1 {
      color: var(--orion-blue-darker-1);
      align-self: flex-start center;
    }
  }

  .hexagons-list {
    list-style-type: none;
    padding-top: 13%;
    padding-bottom: 5%;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(9, 1fr);
    place-items: center;
  }
`;

const hexagonsData = [
  {
    isDecorative: true,
    legend: "",
    imageUrl: "",
  },
  {
    isDecorative: true,
    legend: "",
    imageUrl: "",
  },
  {
    isDecorative: false,
    legend: "LAMAP",
    imageUrl: "/1.webp",
  },
  {
    isDecorative: false,
    legend: "PULMONARE",
    imageUrl: "/2.jpg",
  },
  {
    isDecorative: false,
    legend: "RESIDÊNCIA ADAPTADA",
    imageUrl: "/3.webp",
  },
  {
    isDecorative: false,
    legend: "HOSPITAL DE CAMPANHA COVID",
    imageUrl: "/4.jpg",
  },
  {
    isDecorative: false,
    legend: "AMBULATORIO HUCFF",
    imageUrl: "/5.webp",
  },
  {
    isDecorative: true,
    legend: "",
    imageUrl: "",
  },
  {
    isDecorative: true,
    legend: "",
    imageUrl: "",
  },
];

export default function FifthSection() {
  return (
    <StyledSection>
      <div className="fifth-section-main-div">
        <h1>CONHEÇA NOSSOS PROJETOS ORION!</h1>
        <ul className="hexagons-list">
          {hexagonsData.map((element, index) => {
            return (
              <Hexagon
                key={element.legend ? element.legend + "-key" : index + "-key"}
                isDecorative={element.isDecorative}
                legend={element.legend}
                imageUrl={element.imageUrl}
              />
            );
          })}
        </ul>
        <Button text="Clique aqui e veja mais dos nossos projetos!" url="#"/>
      </div>
    </StyledSection>
  );
}
