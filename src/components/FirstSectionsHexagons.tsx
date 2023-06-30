import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  right: 7%;

  .list {
    display: flex;
    flex-direction: row-reverse;
    position: relative;
    margin-top: 2.5px;
  }
`;

const Hexagon = styled.li<{ $timing?: number }>`
  @keyframes colorr {
    0% {
      background-color: rgba(77, 133, 139, 0.1);
    }

    100% {
      background-color: rgba(77, 133, 139, 0.5);
    }
  }

  width: 100px;
  height: 90px;
  clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
  position: relative;
  margin-left: -23px;
  animation: colorr;
  animation-duration: 4s;
  animation-delay: ${(props) => props.$timing}s;
  animation-fill-mode: both;
  animation-direction: alternate-reverse;
  animation-iteration-count: infinite;

  &:nth-of-type(odd) {
    top: 46px;
  }
`;

export default function FirstSectionHexagons() {
  return (
    <Wrapper>
      <ul className="list">
        {new Array(13).fill(2).map(() => {
          return (
            <Hexagon
              key={Math.random() * 100}
              $timing={Math.random() * 20}
            />
          );
        })}
      </ul>
      <ul className="list">
      {new Array(12).fill(2).map(() => {
          return (
            <Hexagon
              key={Math.random() * 100}
              $timing={Math.random() * 20}
            />
          );
        })}
      </ul>
      <ul className="list">
      {new Array(12).fill(2).map(() => {
          return (
            <Hexagon
              key={Math.random() * 100}
              $timing={Math.random() * 20}
            />
          );
        })}
      </ul>
      <ul className="list">
      {new Array(12).fill(2).map(() => {
          return (
            <Hexagon
              key={Math.random() * 100}
              $timing={Math.random() * 20}
            />
          );
        })}
      </ul>
      <ul className="list">
      {new Array(11).fill(2).map(() => {
          return (
            <Hexagon
              key={Math.random() * 100}
              $timing={Math.random() * 20}
            />
          );
        })}
      </ul>
    </Wrapper>
  );
}
