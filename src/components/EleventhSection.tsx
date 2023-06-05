/* eslint-disable @next/next/no-img-element */
import styled from "styled-components";
import Button from "./Button";

const StyledSection = styled.section`
  display: flex;
  flex-direction: row;

  .img-div {
    position: relative;

    img[alt="hexagonos"] {
      position: relative;
      top: 10%;
      left: -20%;
    }
  }
  .eleventh-section-main-div {
    display: flex;
    width: 100%;
    align-items: center;

    .text-div {
      display: flex;
      flex-direction: column;
      row-gap: 20px;
      width: 50%;
      color: var(--orion-blue-darker-1);
      

      h1 {
        font-size: 38px;
      }

      h3 {
        font-size: 30px;

      }

      p {
        font-size: 20px;
      }
    }
  }
`;

export default function EleventhSection() {
  return (
    <StyledSection>
      <div className="img-div">
        <img
          src="/hexagonos1.png"
          alt="hexagonos"
        />
      </div>
      <div className="eleventh-section-main-div">
        <div className="text-div">
          <h1>ORION EDUCA</h1>
          <p>
            <i>
              Aqui você encontrará todos os cursos de educação continuada produzidos pela
              Orion!
            </i>
          </p>
          <h3>
            <i>&quot;O que posso aprender hoje?&quot;</i>
          </h3>
          <p>
            <i>
              Seu acesso vai de dicas até cursos específicos das disciplinas que usamos no
              nosso dia a dia.
            </i>
          </p>
          <Button text="Clique aqui e acesse nossos cursos!" url="#" />
        </div>
      </div>
    </StyledSection>
  );
}
