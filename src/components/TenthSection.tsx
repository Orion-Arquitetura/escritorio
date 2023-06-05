/* eslint-disable @next/next/no-img-element */
import styled from "styled-components";
import SpeechBalloon from "./SpeechBalloon";
import Button from "./Button";

const StyledSection = styled.section`
  display: grid;
  grid-template-columns: 70% 30%;

  img[alt="hexagons"] {
    position: relative;
    top: -10%;
  }

  .tenth-section-main-div {
    display: flex;
    padding-left: 60px;
    margin: auto;

    .text-div {
      display: flex;
      flex-direction: column;
      row-gap: 20px;
      color: var(--orion-blue-darker-1);

      h3 {
        font-size: 25px;
        padding-left: 20px;
      }

      p {
        line-height: 2.5ch;
        font-size: 18px;
        text-align: justify;
        padding-inline: 5px;
      }
    }
  }
`;

export default function TenthSection() {
  return (
    <StyledSection>
      <div className="tenth-section-main-div">
        <div className="text-div">
          <SpeechBalloon extraStyles={{ width: "100%" }}>
            <h3>NOSSOS CANAIS DE COMUNICAÇÃO</h3>
          </SpeechBalloon>
          <SpeechBalloon extraStyles={{ borderRadius: "30px" }}>
            <p>
              Todos da Orion Arquitetura possuem um acesso para utilizar a plataforma
              <strong>Teams</strong> da <strong>Microsoft</strong>. Dentro da plataforma
              há a subdivisão de projetos e pelo <strong>Planner (Microsoft)</strong>{" "}
              determinamos as tarefas que precisam ser cumpridas dentro dessas
              subdivisões. Para o compartilhamento de arquivos dentro da equipe,
              utilizamos o <strong>Onedrive</strong> ou o <strong>Sharepoint</strong>. E
              para as revisões internas, utilizamos o <strong>Construcode</strong>.{" "}
              <i>
                Caso não saiba como utilizar os programas citados acima, veja os vídeos na
                aba Orion Educa.
              </i>
            </p>
          </SpeechBalloon>

          <SpeechBalloon extraStyles={{padding: "40px", borderRadius: "30px"}}>
            <Button
              text="Clique aqui para saber mais!"
              url="#"
            />
          </SpeechBalloon>
        </div>
      </div>
      <img
        src="/hexagonos2.png"
        alt="hexagons"
      />
    </StyledSection>
  );
}
