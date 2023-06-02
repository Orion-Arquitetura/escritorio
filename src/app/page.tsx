"use client";
import styled from "styled-components";

import FirstSection from "@/components/FirstSection";
import SecondSection from "@/components/SecondSection";
import ThirdSection from "@/components/ThirdSection";
import FourthSection from "@/components/FourthSection";
import FifthSection from "@/components/FifthSection";
import SixthSection from "@/components/SixthSection";

const MainStyled = styled.main`
  background-image: url("/background.png");
  background-size: 90%;
`;

export default function Home() {
  return (
    <MainStyled>
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      <SixthSection />
    </MainStyled>
  );
}
