import styled from "styled-components";
import ProfileHexagon, { ProfileHexagonType } from "./ProfileHexagon";

const StyledSection = styled.section`
  display: flex;

  h1 {
    padding-top: 4%;
    padding-bottom: 6%;
    color: var(--orion-blue-darker-1);
    text-align: center;
  }

  .profile-hexagons-div {
    display: flex;
    justify-content: center;

    & > ul {
      display: grid;
      grid-template-columns: repeat(6, 1fr);
      grid-template-rows: 1fr 1fr;
      row-gap: 100px;
      column-gap: 0px;
      width: 80%;

      flex-wrap: wrap;
    }
  }
`;

const funcionarios = [
  {
    foto: "imagens_funcionarios/katia.png",
    nome: "Kátia Fugazza",
    cargo: "Sócia e Arq. Titular",
  },
  {
    foto: "imagens_funcionarios/paulo.jpg",
    nome: "Paulo Fugazza",
    cargo: "Informática e Administrador",
  },
  {
    foto: "imagens_funcionarios/walter.webp",
    nome: "Walter Jr",
    cargo: "Eng. Elétrico e de Segurança",
  },
  {
    foto: "imagens_funcionarios/cris.webp",
    nome: "Cris Vieira",
    cargo: "BIM Manager e Orçamentista",
  },
  {
    foto: "imagens_funcionarios/marcosmarques.webp",
    nome: "Marcos Marques",
    cargo: "Gerente de Projetos e Engenheiro",
  },
  {
    foto: "imagens_funcionarios/joaopedro.webp",
    nome: "João Pedro",
    cargo: "Acadêmico de Informática",
  },
  {
    foto: "imagens_funcionarios/carol.webp",
    nome: "Caroline Freire",
    cargo: "Projetista",
  },
  { foto: "imagens_funcionarios/julia.jpg", nome: "Julia Telles", cargo: "Projetista" },
  {
    foto: "imagens_funcionarios/carvalho.jpg",
    nome: "Gabriela Carvalho",
    cargo: "Acadêmica de Arquitetura",
  },
  {
    foto: "imagens_funcionarios/marcos.webp",
    nome: "Marcos Lima",
    cargo: "Acadêmico de Arquitetura",
  },
  {
    foto: "imagens_funcionarios/camila.webp",
    nome: "Camila Oliveira",
    cargo: "Acadêmica de Arquitetura",
  },
  {
    foto: "imagens_funcionarios/michel.webp",
    nome: "Michel Carvalho",
    cargo: "Jovem Aprendiz",
  },
];

export default function SixthSection() {
  return (
    <StyledSection>
      <div className="sixth-section-main-div">
        <h1>CONHEÇA A EQUIPE ORION!</h1>
        <div className="profile-hexagons-div">
          <ul>
            {funcionarios.map((element: ProfileHexagonType) => {
              return (
                <ProfileHexagon
                  key={element.nome}
                  foto={element.foto}
                  nome={element.nome}
                  cargo={element.cargo}
                />
              );
            })}
          </ul>
        </div>
      </div>
    </StyledSection>
  );
}
