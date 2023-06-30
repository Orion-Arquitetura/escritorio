// import styled from "styled-components";
// import Hexagon from "./Hexagon";
// import Button from "./Button";

// const StyledSection = styled.section`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   position: relative;

//   .fifth-section-main-div {
//     width: 100%;
//     height: 100%;
//     display: flex;
//     flex-direction: column;
//     justify-content: center start;
//     align-items: center;
//     padding-top: 4%;

//     h1 {
//       color: var(--orion-blue-darker-1);
//       align-self: flex-start center;
//     }
//   }

//   .hexagons-list {
//     list-style-type: none;
//     padding-top: 13%;
//     padding-bottom: 5%;
//     width: 100%;
//     display: grid;
//     grid-template-columns: repeat(9, 1fr);
//     place-items: center;
//   }
// `;

// const hexagonsData = [
//   {
//     isDecorative: true,
//     legend: "",
//     imageUrl: "",
//   },
//   {
//     isDecorative: true,
//     legend: "",
//     imageUrl: "",
//   },
//   {
//     isDecorative: false,
//     legend: "LAMAP",
//     imageUrl: "/1.webp",
//   },
//   {
//     isDecorative: false,
//     legend: "PULMONARE",
//     imageUrl: "/2.jpg",
//   },
//   {
//     isDecorative: false,
//     legend: "RESIDÊNCIA ADAPTADA",
//     imageUrl: "/3.webp",
//   },
//   {
//     isDecorative: false,
//     legend: "HOSPITAL DE CAMPANHA COVID",
//     imageUrl: "/4.jpg",
//   },
//   {
//     isDecorative: false,
//     legend: "AMBULATORIO HUCFF",
//     imageUrl: "/5.webp",
//   },
//   {
//     isDecorative: true,
//     legend: "",
//     imageUrl: "",
//   },
//   {
//     isDecorative: true,
//     legend: "",
//     imageUrl: "",
//   },
// ];

// export default function FifthSection() {
//   return (
//     <StyledSection>
//       <div className="fifth-section-main-div">
//         <h1>CONHEÇA NOSSOS PROJETOS ORION!</h1>
//         <ul className="hexagons-list">
//           {hexagonsData.map((element, index) => {
//             return (
//               <Hexagon
//                 key={element.legend ? element.legend + "-key" : index + "-key"}
//                 isDecorative={element.isDecorative}
//                 legend={element.legend}
//                 imageUrl={element.imageUrl}
//               />
//             );
//           })}
//         </ul>
//         <Button text="Clique aqui e veja mais dos nossos projetos!" url="#"/>
//       </div>
//     </StyledSection>
//   );
// }

/* eslint-disable @next/next/no-img-element */
import styled from "styled-components";
import Button from "./Button";

const StyledSection = styled.section`
  margin-top: 100px;
  margin-bottom: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  .fourth-section-main-div {
    width: 40%;
    color: var(--orion-blue-darker-1);

    h1 {
      font-size: 30px;
      display: flex;
      column-gap: 10px;
      font-weight: 500;
      margin-bottom: 10px;

      &:nth-of-type(2) {
        font-size: 20px;
        margin-top: 30px;
      }
    }

    p {
      line-height: 2.5ch;
      font-size: 18px;
      text-align: justify;
    }

    button {
      border: solid 2px black;
      padding: 10px 30px;
      border-radius: 100px;
      background-color: white;
      font-weight: 600;
      color: #004651;
      text-align: center;
      font-size: 14px;
      width: 50%;
      margin-top: 40px;
      margin-inline: auto;
      display: block;
      cursor: pointer;
    }
  }
`;

export default function FifthSection() {
  return (
    <StyledSection>
      <div className="fourth-section-main-div">
        <h1>
          BIM
          <img
            src="/verified-icon.svg"
            alt={"verified-icon"}
            width={30}
          />
        </h1>
        <p>
          O uso do <strong>BIM</strong> (<i>Building Information Modeling</i>) na Orion
          Arquitetura revolucionou a maneira como projetamos e construímos. Através dessa
          metodologia inovadora, somos capazes de criar modelos virtuais tridimensionais
          altamente precisos e detalhados, que integram todas as informações relevantes de
          um projeto arquitetônico, desde elementos estruturais até sistemas elétricos e
          hidráulicos.
        </p>

        <h1>MANUAIS E NORMAS</h1>
        <p>
          Nossa biblioteca auxilia na orientação da implementação do Building Information
          Modeling em projetos arquitetônicos e garante um padronização das criações e
          gestão de modelos. Há benefícios significativos ao utilizá-la, como a melhoria
          da colaboração entre equipes, a redução de erros e retrabalhos, e o aumento da
          eficiência geral do processo de projeto e construção.
        </p>
        <button>Clique aqui e acesse nossa biblioteca!</button>
      </div>
    </StyledSection>
  );
}
