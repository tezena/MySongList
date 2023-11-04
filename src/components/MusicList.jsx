import React from "react";
/** @jsxImportSource @emotion/react */

// const MusicList = () => {
//   return (
//     <div className="w-1/4 p-4 bg-gray-400 overflow-y-auto">
//       <ul className="text-gray-800">
//         <li className="mb-2 hover:text-blue-600">Song 1</li>
//         <li className="mb-2 hover:text-blue-600">Song 2</li>
//         <li className="mb-2 hover:text-blue-600">Song 3</li>
//         <li className="mb-2 hover:text-blue-600">Song 4</li>
//         <li className="mb-2 hover:text-blue-600">Song 5</li>
//         {/* Add more songs here */}
//       </ul>
//     </div>
//   );
// };

// export default MusicList;

import { css } from "@emotion/react";

const musicList = [
  {
    title: "Song 1",
    image: "https://example.com/song1.jpg",
  },
  {
    title: "Song 2",
    image: "https://example.com/song2.jpg",
  },
  {
    title: "Song 3",
    image: "https://example.com/song3.jpg",
  },
];

const MusicList = () => {
  const musicListContainerStyle = css`
    text-align: center;
    margin-top: 20px;
    width: 40%;
  `;

  const musicListTitleStyle = css`
    font-size: 24px;
    margin-bottom: 20px;
  `;

  const musicItemsContainerStyle = css`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  `;

  const musicItemStyle = css`
    margin: 10px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    width: 200px;
    text-align: center;
  `;

  const musicTitleStyle = css`
    font-size: 18px;
    margin-bottom: 10px;
  `;

  const musicImageStyle = css`
    width: 150px;
    height: 150px;
    object-fit: cover;
    border-radius: 5px;
  `;

  return (
    <div css={musicListContainerStyle}>
      <h1 css={musicListTitleStyle}>List of Music</h1>
      <div css={musicItemsContainerStyle}>
        {musicList.map((music, index) => (
          <div key={index} css={musicItemStyle}>
            <h3 css={musicTitleStyle}>{music.title}</h3>
            <img src={music.image} alt={music.title} css={musicImageStyle} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MusicList;
