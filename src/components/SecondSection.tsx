/* eslint-disable @next/next/no-img-element */
import styled from "styled-components";

const StyledSection = styled.section`
  height: 100vh;
  .second-section-list {
    list-style-image: 20% url("/list_bullet.png");
    display: flex;
    flex-direction: column;
    row-gap: 60px;
    color: #15323A;

    li {
      display: flex;
      flex-direction: row;

      h4 {
        font-weight: 600;
        font-size: 21px;
      }
    }
  }

  img[alt="orion-logo"] {
    position: relative;
    left: 77%;
    bottom: 17%;
  }
`;

const data = [
  {
    titulo: "PRIMEIROS PASSOS",
    legenda: "Saiba tudo sobre a empresa.",
  },
  {
    titulo: "CONHEÇA A EQUIPE",
    legenda: "Conheça seus colegas de equipe.",
  },
  {
    titulo: "MANUAIS E NORMAS",
    legenda: "Normas e padrões para o desenvolvimento dos projetos.",
  },
  {
    titulo: "CANAIS DE COMUNICAÇÃO",
    legenda: "Como se comunicar na empresa.",
  },
  {
    titulo: "ORION EDUCA",
    legenda: "Treinamentos da Orion Arquitetura.",
  },
];

export default function SecondSection() {
  return (
    <StyledSection>
      <ul className="second-section-list">
        {data.map((element: { titulo: string; legenda: string }) => {
          return (
            <li key={element.titulo}>
              <img
                src={"/list_bullet.png"}
                alt="bullet"
                width={"20%"}
              />
              <div>
                <h4>{element.titulo}</h4>
                <p>{element.legenda}</p>
              </div>
            </li>
          );
        })}
      </ul>

      <img src="/orion-arq-marca-final.png" alt="orion-logo" width={"17%"}/>
    </StyledSection>
  );
}
