/* eslint-disable @next/next/no-img-element */
import styled from "styled-components";

const StyledSection = styled.section`
  position: relative;
  background-image: linear-gradient(#CBE1E3FF 20%, transparent);
  height: 100vh;
  display: flex;
  align-items: center;

  .images-wrapper {
    display: flex;
    justify-content: center;
    position: relative;
    width: 100%;

    img[alt="hexagono"] {
      position: absolute;
      width: 25%;

      &:first-of-type {
        left: -10%;
        bottom: 50px;
      }

      &:last-of-type {
        top: 50px;
        left: 80%;
      }
    }

    img[alt="banner"] {
      position: relative;
      width: 50%;

    }
  }
`;

export default function FirstSection() {
  return (
    <StyledSection>
      <div className="images-wrapper">
        <img
          src="/hexagonos1.png"
          alt="hexagono"
        />
        <img
          src="/first-banner.png"
          alt="banner"
        />
        <img
          src="/hexagonos1.png"
          alt="hexagono"
        />
      </div>
    </StyledSection>
  );
}
