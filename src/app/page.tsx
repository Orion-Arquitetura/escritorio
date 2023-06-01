"use client";

import FirstSection from "@/components/FirstSection";
import Image from "next/image";
import styled from "styled-components";

const MainStyled = styled.main`
  background-image: url("/background.png");
  background-size: 90%;
`;

export default function Home() {
  return (
    <MainStyled>
      <FirstSection />
    </MainStyled>
  );
}
