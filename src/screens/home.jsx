import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/SideBar";
import MusicPlayer from "../components/MusicPlayer";
import MusicList from "../components/MusicList";

function Home() {
  return (
    <div>
      <div className="container mx-auto p-4 flex">
        <Sidebar />
        <MusicPlayer />
        <MusicList />
      </div>
    </div>
  );
}

export default Home;
