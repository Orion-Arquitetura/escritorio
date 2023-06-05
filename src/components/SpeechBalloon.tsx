import styled from "styled-components";
import { CSSProperties, ReactNode } from "react";

const StyledDiv = styled.div`
  background-color: var(--speech-balloon);
  padding: 20px;
  border-radius: 50px;
  width: fit-content;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    width: 65px;
    height: 20px;
    bottom: 0;
    left: -20px;
    clip-path: polygon(45% 0, 100% 83%, 100% 100%, 0% 100%);
    background-color: var(--speech-balloon);
  }
`;

export default function SpeechBalloon({
  children,
  extraStyles,
}: {
  children: ReactNode;
  extraStyles?: CSSProperties;
}) {
  return extraStyles ? (
    <StyledDiv style={extraStyles}>{children}</StyledDiv>
  ) : (
    <StyledDiv>{children}</StyledDiv>
  );
}
