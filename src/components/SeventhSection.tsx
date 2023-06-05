/* eslint-disable @next/next/no-img-element */
import styled from "styled-components";
import Button from "./Button";

const StyledSection = styled.section`
  min-height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 200px;
  margin-bottom: 200px;

  img[alt="hexagons"] {
    position: absolute;
    right: -40px;
    bottom: 60%;
  }

  .seventh-section-main-div {
    display: flex;
    width: 40%;

    .side-bar {
      background-color: var(--orion-blue);
      border-radius: 50px;
      padding-top: 15px;
      padding-inline: 4px;

      h3 {
        color: #6fabb2;
        writing-mode: vertical-rl;
        rotate: 180deg;
        font-weight: 500;
      }
    }
  }

  .text-div {
    padding-top: 30px;
    padding-left: 40px;
    text-align: justify;

    display: flex;
    flex-direction: column;
    row-gap: 20px;

    & p:last-of-type {
        margin: 10px auto;
        width: 50%;
        text-align: center;
    }
  }
`;

export default function SeventhSection() {
  return (
    <StyledSection>
      <div className="seventh-section-main-div">
        <img
          src="/hexagonos2.png"
          alt="hexagons"
        />
        <div className="side-bar">
          <h3>
            <i>MANUAL DO COLABORADOR</i>
          </h3>
        </div>
        <div className="text-div">
          <p>
            Na Orion, acreditamos que nossos colaboradores são a base do nosso sucesso.
            Reconhecemos que fornecer orientações claras, políticas bem definidas e
            informações abrangentes é essencial para criar um ambiente de trabalho
            produtivo e saudável.
          </p>
          <p>
            Nosso <strong>Manual do Colaborador</strong> foi cuidadosamente desenvolvido para oferecer a
            você todas as informações necessárias para entender nossa cultura
            organizacional, nossos valores e nossas expectativas. Ele é uma fonte
            confiável de conhecimento, ajudando você a se integrar perfeitamente à equipe,
            a utilizar nossos recursos e benefícios de forma eficaz, e a se manter
            informado sobre seus direitos e responsabilidades como membro da nossa
            família.
          </p>

          <p>
            Valorizamos sua contribuição e queremos fornecer todas as ferramentas e
            recursos necessários para o seu crescimento e sucesso.
          </p>
          <p>
            O Manual do Colaborador é um guia abrangente para aproveitar ao máximo sua
            jornada conosco. Estamos comprometidos em fornecer um ambiente transparente,
            onde todos possam se sentir informados, engajados e capacitados. Explore nosso
            Manual e não hesite em nos contatar caso tenha alguma dúvida ou sugestão.
          </p>

          <p>Estamos aqui para apoiá-lo(a) em cada etapa do caminho!</p>

          <Button text="Clique aqui e acesse nosso Manual!" url="#" />
        </div>
      </div>
    </StyledSection>
  );
}
