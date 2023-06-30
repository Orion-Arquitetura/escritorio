"use client";
import styled from "styled-components";

import FirstSection from "@/components/FirstSection";
import SecondSection from "@/components/SecondSection";
import ThirdSection from "@/components/ThirdSection";
import FourthSection from "@/components/FourthSection";
import FifthSection from "@/components/FifthSection";
import SixthSection from "@/components/SixthSection";
import SeventhSection from "@/components/SeventhSection";
import EighthSection from "@/components/EighthSection";
import NinthSection from "@/components/NinthSection";
import TenthSection from "@/components/TenthSection";
import EleventhSection from "@/components/EleventhSection";
import TwelfthSection from "@/components/TwelfthSection";
import ThirteenthSection from "@/components/ThirteenthSection";


const MainStyled = styled.main`
  background-image: url("/background.png");
  background-size: 90%;
  overflow: hidden;
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
      {/*<SeventhSection />
      <EighthSection />
       <NinthSection />
      <TenthSection />
      <EleventhSection />
      <TwelfthSection /> */}
      <ThirteenthSection />
    </MainStyled>
  );
}
