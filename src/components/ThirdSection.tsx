/* eslint-disable @next/next/no-img-element */
import styled from "styled-components";

const StyledSection = styled.section`
  padding-top: 50px;
  padding-bottom: 50px;
  .third-section-div {
    width: 50%;
    margin: auto;
    display: flex;
    .side-bar {
      background-color: var(--orion-blue);
      border-radius: 50px;
      padding-top: 15px;
      padding-inline: 4px;

      h3 {
        color: #fff;
        writing-mode: vertical-rl;
        rotate: 180deg;
        font-weight: 500;
        height: auto;
      }
    }
    .third-section-images-div {
      position: relative;
      display: flex;
      align-items: center;
      padding-inline: 60px;

      & img[alt="logo"] {
        position: absolute;
        bottom: 20px;
        left: 10px;
      }
    }

    .third-section-text-div {
      ul {
        display: flex;
        flex-direction: column;
        row-gap: 20px;
        list-style-type: none;
        color: #336C72;

        & h4 {
          text-transform: uppercase;
          text-decoration: underline;
          text-underline-offset: 2px;
          margin-bottom: 5px;
        }

      }
    }
  }
`;

export default function ThirdSection() {
  return (
    <StyledSection>
      <div className="third-section-div">
        <div className="side-bar">
          <h3>O QUE BUSCAMOS:</h3>
        </div>
        <div className="third-section-images-div">
          <img
            src="/grafico.svg"
            alt="grafico"
            width={120}
          />
          <img
            src="/orion-arq-marca-final.png"
            alt="logo"
            width={80}
          />
        </div>
        <div className="third-section-text-div">
          <ul>
            <li>
              <h4>Qualidade, Eficiência e Inovação!</h4>
              <p>
                Tudo isso para sermos referência de qualidade, eficiência e inovação em
                arquitetura e engenharia para a saúde.
              </p>
            </li>
            <li>
              <h4>Humanização</h4>
              <p>Pensar em quem vai usar o espaço é o diferencial do nosso escritório.</p>
            </li>
            <li>
              <h4>Padrões e Processos</h4>
              <p>
                Consolidados permite que trabalhemos de forma integrada, presencial ou
                remotamente. Com qualidade, eficiência e inovação.
              </p>
            </li>
            <li>
              <h4>Experiência do Usuário</h4>
              <p>A jornada do usuário é pensada em todas as fases do projeto.</p>
            </li>
          </ul>
        </div>
      </div>
    </StyledSection>
  );
}
