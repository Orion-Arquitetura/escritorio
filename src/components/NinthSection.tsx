/* eslint-disable @next/next/no-img-element */
import styled from "styled-components";
import Button from "./Button";

const StyledSection = styled.section`
  .ninth-section-main-div {
    margin: auto;
    display: flex;
    width: 70%;
    align-items: center;

    img[alt="Plano de execução BIM"] {
      width: 50%;
    }

    .text-div {
      display: flex;
      flex-direction: column;
      row-gap: 20px;

      p {
        text-align: justify;
      }
    }
  }
`;

export default function NinthSection() {
  return (
    <StyledSection>
      <div className="ninth-section-main-div">
        <img
          src="/peb.png"
          alt="Plano de execução BIM"
        />
        <div className="text-div">
          <h3>PLANO DE EXECUÇÃO BIM</h3>
          <p>
            Nosso Plano de Execução BIM é um documento estratégico que estabelece as
            diretrizes e processos específicos para a implementação efetiva do Building
            Information Modeling em nossos projetos. Esse plano detalhado descreve os
            objetivos, as responsabilidades e as etapas a serem seguidas durante todo o
            ciclo de vida do projeto. Além disso, abordamos a gestão da informação,
            incluindo a definição dos níveis de detalhamento do modelo, as diretrizes de
            revisão e validação, e os processos de coordenação com outras disciplinas.
          </p>
          <Button text="Clique aqui para acessar o PEB" url="#"/>
        </div>
      </div>
    </StyledSection>
  );
}
