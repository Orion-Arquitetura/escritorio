/* eslint-disable @next/next/no-img-element */
import styled from "styled-components";

const StyledSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  img[alt="hexagonos"] {
    position: absolute;
    left: 77%;
  }

  .fourth-section-main-div {
    width: 40%;
    color: var(--orion-blue-darker-1);

    h1 {
      font-size: 64px;
      display: flex;
      column-gap: 20px;
    }

    p {
      line-height: 2.5ch;
      font-size: 18px;
      text-align: justify;
    }
  }
`;

export default function FourthSection() {
  return (
    <StyledSection>
      <img src="/hexagonos2.png" alt={"hexagonos"}/>
      <div className="fourth-section-main-div">
        <h1>
          BIM
          <img
            src="/verified-icon.svg"
            alt={"verified-icon"}
            width={50}
          />
        </h1>
        <p>
          O uso do <strong>BIM</strong> (<i>Building Information Modeling</i>) na Orion Arquitetura revolucionou a
          maneira como projetamos e construímos. Através dessa metodologia inovadora,
          somos capazes de criar modelos virtuais tridimensionais altamente precisos e
          detalhados, que integram todas as informações relevantes de um projeto
          arquitetônico, desde elementos estruturais até sistemas elétricos e hidráulicos.
        </p>
      </div>
    </StyledSection>
  );
}
