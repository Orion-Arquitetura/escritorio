import Link from "next/link";
import styled from "styled-components";

const StyledButton = styled(Link)`
  border: solid 2px black;
  padding: 10px 30px;
  border-radius: 20px;
  background-color: white;
  font-weight: 600;
  color: #15323A;
`;

type ButtonType = {
  text: string;
  url: string;
};

export default function Button({ text, url }: ButtonType) {
  return (
    <>
      <StyledButton href={url}>{text}</StyledButton>
    </>
  );
}
