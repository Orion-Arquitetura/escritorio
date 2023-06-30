/* eslint-disable @next/next/no-img-element */
import styled from "styled-components";
import FirstSectionHexagons from "./FirstSectionsHexagons";

const StyledSection = styled.section`
    display: grid;
    grid-template-columns: 40% auto;
    padding-top: 100px;

  .first-section-list {
    list-style-image: 20% url("/list_bullet.png");
    display: flex;
    flex-direction: column;
    row-gap: 60px;
    color: #15323A;

    li {
      display: flex;
      flex-direction: row;
      margin-left: -80px;
      font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; 

      img {
        width: 32%;
        object-fit: contain;
      }

      h4 {
        font-weight: 600;
        font-size: 1rem;
      }

      p {
        font-size: 0.8rem;
      }
    }
  }

  .image-div {
    width: 100%;
    height: 100%;
    position: relative;
    top: -50px;

    & img[alt="banner"] {
      position: absolute;
      top: 25%;
      left: 12%;
    }
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

export default function FirstSection() {
  return (
    <StyledSection>
      <div className="list-div">
        <ul className="first-section-list">
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
      </div>
      <div className="image-div">
        <FirstSectionHexagons />
        <img src="/first-banner.png" alt="banner" />
      </div>
    </StyledSection>
  );
}
