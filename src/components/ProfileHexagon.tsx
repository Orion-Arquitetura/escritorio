import styled from "styled-components";

const StyledDiv = styled.div`
  width: 90%;
  height: 140px;

  &:nth-of-type(odd) {
    position: relative;
    bottom: 30%;
  }

  & .picture {
    clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
    height: 140px;
    width: 100%;
    position: relative;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }

  .text-content {
    text-align: center;
    display: flex;
    flex-direction: column;
    padding-top: 5px;
  }
`;

export type ProfileHexagonType = {
  foto: string;
  nome: string;
  cargo: string;
};

export default function ProfileHexagon({ foto, nome, cargo }: ProfileHexagonType) {
  return (
    <StyledDiv>
      <div
        style={{ backgroundImage: `url(${foto})` }}
        className="picture"
      />
      <div className="text-content">
        <strong>{nome}</strong>
        <span>{cargo}</span>
      </div>
    </StyledDiv>
  );
}
