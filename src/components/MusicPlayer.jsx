/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import MusicPlayerSlider from "./musicPlayerSlider";


const Img1css = css`
  height: auto;
  max-width: 100%;
  border-radius: 30px;
  transform: translateY(0);
  transition: transform 0.3s ease-in-out;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 10px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;

  &:hover {
    transform: translateY(-2px);

    /* Equivalent to hover:shadow-lg in Tailwind */
  }
`;
//  box-shadow: 0 15px 1px -7px rgba(240, 14, 89, 0.6);

const shadowMd = css`
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.3);
`;


  
const MusicPlayer = () => {
  const mainContainer = css`
    width: 50%;
    text: center;
    padding: 20px;
    margin:auto 5%;
  @media(max-width:720px){
    width:100%;
    padding-bottom:0;
    padding-right:10%;
  }
    
  `;
   const responsiveFontSizes = {
     small: 1,
     medium: 1.5,
     large: 2,
   };
  

  const textDivCss = css`
    margin-top: 2%;
   
    padding: 0.5rem 0;
    height: 40%;
  `;
   const singerNameCss = css`
     font-family: "Roboto  ", sans-serif;
     font-weight: 300;
     font-size: 1.2rem;
     @media (max-width: 1250px) {
       font-size: ${responsiveFontSizes.small}rem;
     }
     @media (max-width: 950px) {
       font-size: ${responsiveFontSizes.small*.5}rem;
     }
     opacity: 0.3;
   `;

  return (
    <div css={mainContainer} >
        <img
          src="https://tecdn.b-cdn.net/img/new/standard/city/041.webp"
          css={Img1css}
          alt=""
        />
      <div css={textDivCss}>
        <div
          css={css`
            margin-bottom: 1rem;
          `}
        >
          <h1
            css={css`
              color: black;
              font-size: ${responsiveFontSizes.large}rem;
              @media (max-width: 1250px) {
                font-size: ${responsiveFontSizes.medium}rem;
              }
              @media (max-width: 950px) {
                font-size: ${responsiveFontSizes.small}rem;
              }
              font-family: "Lobster", sans-serif;
              font-weight: bolder;
            `}
          >
            Bohemian Rhapsody
          </h1>
          <h3 css={singerNameCss}>Ed Sheeran</h3>
        </div>

        <MusicPlayerSlider></MusicPlayerSlider>
      </div>
    </div>
  );
};

export default MusicPlayer;
