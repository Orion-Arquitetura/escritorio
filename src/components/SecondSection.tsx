/* eslint-disable @next/next/no-img-element */
import styled from "styled-components";

const StyledSection = styled.section`
  display: flex;
  justify-content: center;
  position: relative;
  padding-top: 50px;
  padding-bottom: 50px;

  .second-section-banner {
    width: 35%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img[alt="orion-logo"] {
      width: 110px;
      border-radius: 100px;
      margin-bottom: -50px;
      z-index: 10;
    }

    .second-section-banner-inner-div {
      .second-section-banner-inner-div-text-content {
        position: relative;
        z-index: 9;
        background-color: var(--orion-blue);
        color: white;
        border-radius: 30px;
        padding: 30px;
        padding-bottom: 50px;

        h4 {
          margin-bottom: 30px;
          margin-top: 30px;
          font-size: 20px;
          font-weight: 500;
        }

        p {
          font-size: 18px;
          line-height: 3ch;
        }
      }

      .social-media-div {
        z-index: 0;
        padding-top: 45px;
        padding-bottom: 30px;
        margin-top: -30px;
        background-image: linear-gradient(#cbe1e3aa 70%, transparent);
        color: var(--orion-blue);
        text-align: center;
        padding-inline: 40px;

        .social-media-icons-div {
          margin-top: 20px;
          display: flex;
          justify-content: center;
          column-gap: 5px;

          .social-media-icon {
            
          }
        }
      }
    }
  }`;

const socialMediaIcons = [
  {
    iconUrl: "social_media_icons/type1/instagram.png",
    alt: "instagram",
    link: "#",
  },
  {
    iconUrl: "social_media_icons/type1/facebook.png",
    alt: "facebook",
    link: "#",
  },
  {
    iconUrl: "social_media_icons/type1/linkedin.png",
    alt: "linkedin",
    link: "#",
  },
  {
    iconUrl: "social_media_icons/type1/youtube.png",
    alt: "youtube",
    link: "#",
  },
];

export default function SecondSection() {
  return (
    <StyledSection>
      <div className="second-section-banner">
        <img
          src="/orion-arq-marca-fundo-azul.webp"
          alt="orion-logo"
        />
        <div className="second-section-banner-inner-div">
          <div className="second-section-banner-inner-div-text-content">
            <h4>É ÓTIMO TE VER POR AQUI!</h4>
            <div>
              <p>
                <i>
                  Somos a Orion Arquitetura, uma empresa com propósito de criar ambientes
                  saudáveis com foco no bem-estar das pessoas.
                </i>
              </p>
            </div>
          </div>

          <div className="social-media-div">
            <p>Fique mais próximo de nosso trabalho nos seguindo nas Redes Sociais!</p>
            <div className="social-media-icons-div">
              {socialMediaIcons.map(
                (element: { iconUrl: string; alt: string; link: string }) => {
                  return (
                    <div
                      className="social-media-icon"
                      key={element.alt}
                    >
                      <img
                        src={element.iconUrl}
                        alt={element.alt}
                        width={40}
                      />
                    </div>
                  );
                }
              )}
            </div>
          </div>
        </div>
      </div>
    </StyledSection>
  );
}
