/* eslint-disable @next/next/no-img-element */
import styled from "styled-components";

const StyledLi = styled.li`
  width: 130%;
  height: 160px;
  background-color: transparent;
  position: relative;

  & > div {
    clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
    height: 160px;
    width: 100%;
    z-index: 10;
    position: relative;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }

  &:nth-of-type(odd) {
    position: relative;
    bottom: 50%;
  }

  &.decorative {
    background-color: var(--orion-blue);
    clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
  }

  &:not(.decorative) {
    p {
      position: absolute;
      bottom: 50px;
      left: 50%;
      translate: -50%;
      bottom: -20%;
      text-align: center;
      font-size: 9px;
    }
  }
`;

type HexagonComponentType = {
  isDecorative: boolean;
  legend?: string;
  imageUrl?: string;
};

export default function Hexagon({
  isDecorative,
  legend,
  imageUrl,
}: HexagonComponentType) {
  return (
    <StyledLi className={isDecorative ? "decorative" : ""}>
      <div style={{ backgroundImage: `url(${imageUrl})` }} />
      {isDecorative ? null : <p>{legend}</p>}
    </StyledLi>
  );
}
