/* eslint-disable @next/next/no-img-element */
import styled from "styled-components";
import Button from "./Button";

const StyledSection = styled.section`
  margin-top: 50px;
  margin-bottom: 50px;
  color: #15323a;

  .seventh-section-main-div {
    text-align: center;
    width: 42%;
    margin-inline: auto;
    display: flex;
    flex-direction: column;
    row-gap: 10px;

    h1 {
      text-transform: uppercase;
      color: #015966;
    }

    h2 {
      font-size: 20px;
      color: #15323a;
    }

    h1,
    h2 {
      margin-bottom: 10px;
    }

    p {
      margin-inline: auto;
      width: 70%;
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
      width: 40%;
      margin-top: 10px;
      margin-inline: auto;
      display: block;
      cursor: pointer;
    }
  }
`;

export default function SeventhSection() {
  return (
    <StyledSection>
      <div className="seventh-section-main-div">
        <div>
          <h1>
            <i>Orion Educa</i>
          </h1>
          <p>
            <i>
              Nesta página você encontrará todos os cursos de educação continuada
              produzidos pela Orion!
            </i>
          </p>
        </div>
        <div>
          <h2>&quot;O que posso aprender hoje?&quot;</h2>
          <p>
            <i>
              Seu acesso vai de dicas até cursos específicos das disciplinas que usamos no
              nosso dia a dia
            </i>
          </p>
        </div>
        <button>Clique aqui e acesse nossos cursos!</button>
      </div>
    </StyledSection>
  );
}
