/* eslint-disable @next/next/no-img-element */
import styled from "styled-components";

const StyledFooter = styled.footer`
  width: 100%;
  padding-inline: 4%;
  padding-bottom: 4%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .first-panel {
    display: flex;
    align-items: center;
    text-align: left;
    width: 50%;

    .text {
      display: flex;
      flex-direction: column;
      color: white;
      margin-left: 10px;

      p {
        font-weight: 100;
      }
    }

    .social-media-div {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr;
      height: fit-content;

      .social-media {
        margin: 3px;
        margin-inline: 5px;
      }
    }
  }

  .logo-div {
    filter: brightness(0%) invert(100%);

    img {
      width: 200px;
    }
  }

  .footer-email-div {
    color: white;

    h1:first-of-type {
      font-weight: 500;
      font-size: 20px;
      margin-bottom: 5px;
      display: flex;
      justify-content: center;
    }
  
    & .email {
      align-items: center;
      font-weight: 500;
      font-size: 14px;
      display: flex;
      align-items: center;
      column-gap: 10px;

      & img {
        width: 40px;
      }
    }
  }
`;

const socialMediaIcons = [
  {
    iconUrl: "social_media_icons/type2/instagram.png",
    alt: "instagram",
    link: "#",
  },
  {
    iconUrl: "social_media_icons/type2/facebook.svg",
    alt: "facebook",
    link: "#",
  },
  {
    iconUrl: "social_media_icons/type2/linkedin.svg",
    alt: "linkedin",
    link: "#",
  },
  {
    iconUrl: "social_media_icons/type2/whatsapp.png",
    alt: "whatsapp",
    link: "#",
  },
];

export default function Footer() {
  return (
    <StyledFooter>
      <div className="first-panel">
        <div className="social-media-div">
          {socialMediaIcons.map((element) => {
            return (
              <div
                key={element.alt}
                className="social-media"
              >
                <img
                  src={element.iconUrl}
                  alt={element.alt}
                  width={"30px"}
                />
              </div>
            );
          })}
        </div>
        <div className="text">
          <p>
            Av. Pastor Martin Luther King, 126 Office 1000, sala 602 - Del Castilho Rio de
            Janeiro RJ
            <br />
            (21) 96957-6823
          </p>
        </div>
      </div>

      <div className="footer-email-div">
        <h1>
          Comentários?
          <br />
          Sugestões?
        </h1>
        <h1 className="email">
          <img
            src="/envelope.svg"
            alt="envelope"
          />
          orion@orionarquitetura.com.br
        </h1>
      </div>
    </StyledFooter>
  );
}
