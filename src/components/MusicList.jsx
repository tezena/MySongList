import React from "react";

const MusicList = () => {
  return (
    <div className="w-1/4 p-4 bg-gray-400 overflow-y-auto">
      <ul className="text-gray-800">
        <li className="mb-2 hover:text-blue-600">Song 1</li>
        <li className="mb-2 hover:text-blue-600">Song 2</li>
        <li className="mb-2 hover:text-blue-600">Song 3</li>
        <li className="mb-2 hover:text-blue-600">Song 4</li>
        <li className="mb-2 hover:text-blue-600">Song 5</li>
        {/* Add more songs here */}
      </ul>
    </div>
  );
};

export default MusicList;
