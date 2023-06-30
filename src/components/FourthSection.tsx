

/* eslint-disable @next/next/no-img-element */
import styled from "styled-components";
import ProfileHexagon, { ProfileHexagonType } from "./ProfileHexagon";

const StyledSection = styled.section`
  margin-top: 50px;

  h1 {
    color: var(--orion-blue-darker-1);
    text-align: center;
  }
  
  .profile-hexagons-div {
    display: flex;
    justify-content: center;
    padding-top: 50px;
    padding-bottom: 80px;
    flex-direction: column;
    align-items: center;
    row-gap: 100px;

    & > ul {
      display: grid;
    }

    & .list-1 {
      grid-template-columns: repeat(6, 1fr);
      width: 80%;
    }

    & .list-2 {
      grid-template-columns: repeat(7, 1fr);
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
    foto: "imagens_funcionarios/marcosmarques.webp",
    nome: "Marcos Marques",
    cargo: "Gerente de Projetos e Engenheiro",
  },
  {
    foto: "imagens_funcionarios/diego.jpg",
    nome: "Diego",
    cargo: "Orçamentista",
  },
  {
    foto: "imagens_funcionarios/andrea.webp",
    nome: "Andrea Suzuki",
    cargo: "Administrativo",
  },
  {
    foto: "imagens_funcionarios/camila.webp",
    nome: "Camila Oliveira",
    cargo: "Acadêmica de Arquitetura",
  },
  {
    foto: "imagens_funcionarios/marcos.webp",
    nome: "Marcos Lima",
    cargo: "Acadêmico de Arquitetura",
  },
  {
    foto: "imagens_funcionarios/carvalho.jpg",
    nome: "Gabriela Carvalho",
    cargo: "Acadêmica de Arquitetura",
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
    foto: "imagens_funcionarios/michel.webp",
    nome: "Michel Carvalho",
    cargo: "Jovem Aprendiz",
  },
];

export default function FourthSection() {
  return (
    <StyledSection>
      <div className="fourth-section-main-div">
        <h1>CONHEÇA A EQUIPE ORION!</h1>
        <div className="profile-hexagons-div">
          <ul className="list-1">
            {funcionarios.map((element: ProfileHexagonType, index: number) => {
              if (index >= 6) {
                return null;
              }
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

          <ul className="list-2">
            {funcionarios.map((element: ProfileHexagonType, index: number) => {
              if (index <= 5) {
                return null;
              }
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
