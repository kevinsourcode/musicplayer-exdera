import SongCard from "./SongCard";
import { useState, useEffect } from "react";
import axios from "axios";

const TopMusic = () => {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("http://localhost:8000/songs");
        const data = response.data;
        setSongs(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  return (
    <div className='flex flex-col'>
      <div className='flex justify-between w-full items-center'>
        <h2 className='font-bold text-3xl text-black'>Top Music</h2>
        <div>- +</div>
      </div>
      <div className='flex overflow-x gap-20'>
        {songs.map((songs, i) => (
          <SongCard key={i} songname={songs.title} albumArt={songs.albumArt} artist={songs.artist} />
        ))}
      </div>
    </div>
  );
};

export default TopMusic;
