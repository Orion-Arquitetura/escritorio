/* eslint-disable @next/next/no-img-element */
import styled from "styled-components";

const StyledSection = styled.section`
  margin-top: 50px;
  margin-bottom: 50px;

  .sixth-section-main-div {
    width: 42%;
    margin-inline: auto;
    padding: 30px;
    border-radius: 50px;
    color: #004651;
    background-color: #6fabb2aa;

    .title-div {
      text-transform: uppercase;
      display: flex;
      flex-direction: row;
      column-gap: 10px;
      justify-content: space-between;
      align-items: center;
    }

    p {
      margin-top: 20px;
      text-align: justify;
    }
  }

  button {
    border: solid 2px black;
    padding: 10px 30px;
    border-radius: 100px;
    background-color: white;
    font-weight: 600;
    color: #004651;
    text-align: center;
    font-size: 14px;
    width: 20%;
    margin-top: 40px;
    margin-inline: auto;
    display: block;
    cursor: pointer;
  }
`;

export default function SixthSection() {
  return (
    <StyledSection>
      <div className="sixth-section-main-div">
        <div className="title-div">
          <h1>Nossos canais de comunicação</h1>
          <img
            src="/baloes.svg"
            alt="baloes"
            width={70}
          />
        </div>

        <p>
          Todos da Orion Arquitetura possuem um acesso para utilizar a plataforma{" "}
          <strong>Teams</strong> da
          <strong>Microsoft</strong>. Dentro da plataforma há a subdivisão de projetos e
          pelo <strong>Planner (Microsoft)</strong> determinamos as tarefas que precisam
          ser cumpridas dentro dessas subdivisões. Para o compartilhamento de arquivos
          dentro da equipe, utilizamos o <strong>Onedrive</strong> ou o{" "}
          <strong>Sharepoint</strong>. E para as revisões internas, utilizamos o{" "}
          <strong>Construcode</strong>.{" "}
          <i>
            Caso não saiba como utilizar os programas citados acima, veja os vídeos na aba
            Orion Educa
          </i>
          .
        </p>
      </div>

      <button>Clique aqui para <br /> saber mais!</button>
    </StyledSection>
  );
}
