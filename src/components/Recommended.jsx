import axios from "axios";
import { useState, useEffect } from "react";
import Albums from "./Albums";

const Recommended = () => {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("http://localhost:8002/albums");
        const data = response.data;
        setSongs(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  return (
    <div className='flex flex-col flex-1 pl-[32px] w-screen mt-[28px]'>
      <div className='flex justify-between w-full items-center'>
        <h2 className='font-bold text-3xl text-black'>Recommended Albums</h2>
      </div>
      <div className='flex gap-[70px]'>
        {songs.map((songs, i) => (
          <Albums key={i} title={songs.title} artist={songs.artist} albumArt={songs.albumArt} />
        ))}
      </div>
    </div>
  );
};

export default Recommended;
