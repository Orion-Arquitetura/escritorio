/* eslint-disable @next/next/no-img-element */
import styled from "styled-components";
import Button from "./Button";

const StyledSection = styled.section`
  align-content: center;
  display: flex;
  .eighth-section-main-div {
    margin: auto;
    display: flex;
    width: 70%;

    img[alt="Manual BIM"] {
      width: 50%;
    }

    .text-div {
      display: flex;
      flex-direction: column;
      row-gap: 20px;

      p {
        width: 120%;
        text-align: justify;
      }
    }
  }
`;

export default function EighthSection() {
  return (
    <StyledSection>
      <div className="eighth-section-main-div">
        <div className="text-div">
          <h3>MANUAL BIM</h3>
          <p>
            O Manual BIM da Orion Arquitetura é um recurso essencial que orienta a
            implementação do Building Information Modeling em projetos arquitetônicos. Ele
            abrange criação e gestão de modelos BIM, colaboração com outras disciplinas,
            protocolos de troca de informações, padrões de nomenclatura e classificação de
            elementos, e metodologias de análise e simulação. Seguir o manual garante
            consistência, qualidade, produtividade e eficiência da equipe, resultando em
            entregas de excelência para os clientes.
          </p>
          <Button
            text="Clique aqui e acesse o Manual BIM"
            url="#"
          />
        </div>
        <img
          src="/manual.png"
          alt="Manual BIM"
        />
      </div>
    </StyledSection>
  );
}
