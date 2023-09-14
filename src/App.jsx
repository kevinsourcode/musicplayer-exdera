import { useState } from "react";

import Topbar from "./components/Topbar";
import PlayerControls from "./components/PlayerControls";
import Sidebar from "./components/Sidebar";
import TopMusic from "./components/TopMusic";
import Popular from "./components/Popular";
import Recommended from "./components/Recommended";

function App() {
  const [title, setTitle] = useState("The Color Violet");
  const [albumArt, setAlbumArt] = useState("https://i.scdn.co/image/ab67616d00001e020c5f23cbf0b1ab7e37d0dc67");
  const [artist, setArtist] = useState("Tory Lanez");

  return (
    <div className='relative w-full h-screen pt-8 flex flex-col justify-between'>
      <div className='flex h-full pl-8'>
        <Sidebar />
        <div className='h-full w-full pl-6 flex flex-col'>
          <div className='flex flex-col mb-4'>
            <Topbar />
            <TopMusic setTitle={setTitle} setAlbumArt={setAlbumArt} setartist={setArtist} />
          </div>
          <div className='flex w-full justify-between max-h-[350px]'>
            <Popular />
            <Recommended />
          </div>
        </div>
      </div>
      <div className='absolute bottom-0 w-screen'>
        <PlayerControls artist={artist} title={title} albumArt={albumArt} />
      </div>
    </div>
  );
}

export default App;
