import PopularSongDetail from "./PopularSongDetail";
import axios from "axios";
import { useState, useEffect } from "react";

const Popular = () => {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("http://localhost:8001/songs");
        const data = response.data;
        setSongs(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  return (
    <div className=' w-2/5'>
      <div className='sticky mb-[20px]'>
        <h2 className='font-bold text-3xl text-black sticky mb-2'>Popular</h2>
      </div>
      <div className='flex flex-col gap-3 overflow-y-scroll h-[200px]'>
        {songs.map((songs, i) => (
          <PopularSongDetail key={i} title={songs.title} artist={songs.artist} duration={songs.duration} albumArt={songs.albumArt} />
        ))}
      </div>
    </div>
  );
};

export default Popular;
