/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";

const Img1css = css`
  height: auto;
  max-width: 32rem; /* Equivalent to max-w-lg in Tailwind */
  border-radius: 30px; /* Equivalent to rounded-[30px] in Tailwind */
  box-shadow: none; /* Equivalent to shadow-none in Tailwind */
  transition: box-shadow 0.3s ease-in-out; /* Equivalent to transition-shadow in Tailwind */
  transform: translateY(0);
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 0 0 5px rgba(0, 0, 0, 0.1); /* Equivalent to hover:shadow-lg in Tailwind */
  }
`;

const shadowMd = css`
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.3);
`;

const combinedStyles = css`
  ${Img1css};

  ${shadowMd};
`;





const ImgShine = css`
  /* Base styles for the element */
  position: absolute;
  top: 0;
  left: -10%;
  right: 0;
  bottom: 0;
  width: 50%;
  z-index: 10;
  display: block;
  transform: skewX(0deg);
  background: linear-gradient(to right, transparent, white);
  opacity: 0.6;

 
 &:hover{
    animation: shine 1s 1; /* Use the 'shine' keyframes */
  }
  @keyframes shine {
    0% {
      left: 0;
    }
    100% {
      left: 125%;
    }
  }
`;
const Invisiblediv=css`
        position: relative;
        display: flex; `
const MusicPlayer = () => {
  return (
    <div className="w-1/2 p-4 ">
      <div  css={Invisiblediv} >
      
        <img
          src="https://tecdn.b-cdn.net/img/new/standard/city/041.webp"
          css={combinedStyles}
          // class="h-auto max-w-lg rounded-[30px] shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/30  shadow-md"
          alt=""
        />
        {/* <div css={ImgShine}>
          
        </div> */}
      </div>
      <h1
        css={css`
          color: red;
          fontsize: 40px;
        `}
      >
        Hello world.
      </h1>
    </div>
  );
};

export default MusicPlayer;
