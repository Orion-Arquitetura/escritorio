/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import styled from "styled-components";
import Footer from "./Footer";

const StyledSection = styled.section`
  background-image: url("/background-azul.webp");
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: fit-content;
  padding-top: 6%;
  font-family: "Geologica", sans-serif;

  .twelfth-section-main-div {
    color: white;

    h1:first-of-type {
      font-weight: 500;
      font-size: 40px;
      margin-bottom: 5px;
    }

    & .email {
      font-weight: 500;
      display: flex;
      align-items: center;
      column-gap: 10px;

      & img {
        width: 60px;
      }
    }
  }
`;

export default function ThirteenthSection() {
  return (
    <StyledSection>
      <div className="twelfth-section-main-div">
        <h1>
          Comentários?
          <br />
          Sugestões?
        </h1>
        <h1 className="email">
          <img
            src="/envelope.svg"
            alt="envelope"
          />
          orion@orionarquitetura.com.br
        </h1>
      </div>
      <Footer />
    </StyledSection>
  );
}
