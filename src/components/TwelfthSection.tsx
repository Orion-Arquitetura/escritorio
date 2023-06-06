import styled from "styled-components";

const StyledSection = styled.section`
  background-image: url("/background-azul.webp");
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: fit-content;
  padding-top: 6%;
  padding-bottom: 6%;
  font-family: "Geologica", sans-serif;

  .twelfth-section-main-div {
    color: white;

    hr {
      margin-top: 10px;
      margin-bottom: 10px;
      width: 90%;
      margin-inline: auto;
    }

    h1:not(h1:nth-of-type(3)) {
      font-size: 30px;
      font-weight: 400;
    }

    h1:nth-of-type(3) {
      font-size: 101px;
      font-family: "Vani", serif;
      font-weight: 500;
    }
  }
`;

export default function TwelfthSection() {
  return (
    <StyledSection>
      <div className="twelfth-section-main-div">
        <h1>
          Venha desbravar o <br /> mundo com a gente
        </h1>
        <hr />
        <h1>Venha viver a experiência</h1>
        <hr />
        <h1>Orion</h1>
      </div>
    </StyledSection>
  );
}
