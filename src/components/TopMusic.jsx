/* eslint-disable react/prop-types */
import SongCard from "./SongCard";
import { useState, useEffect } from "react";
import axios from "axios";

const TopMusic = (props) => {
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
    <div className='flex flex-col w-full'>
      <div className='flex justify-between items-center'>
        <h2 className='font-bold text-2xl text-black mb-[20px]'>Top Music</h2>
        <div className='flex gap-4 pr-9'>
          <svg xmlns='http://www.w3.org/2000/svg' width='18' height='14' viewBox='0 0 21 14' fill='none'>
            <path d='M7.40645 0.258502C7.76505 0.610064 7.76505 1.19366 7.41348 1.55225L3.13849 5.83428H19.4088C19.908 5.83428 20.3158 6.2421 20.3158 6.74835C20.3158 7.2546 19.908 7.66241 19.4088 7.66241H3.14552L7.42052 11.9444C7.77208 12.303 7.76505 12.8796 7.41348 13.2382C7.05489 13.5898 6.48536 13.5898 6.12677 13.2312L0.333033 7.39522C0.25569 7.31085 0.192408 7.21944 0.143188 7.10694C0.0939693 6.99444 0.072876 6.87491 0.072876 6.75538C0.072876 6.51632 0.164282 6.29132 0.333033 6.11554L6.12677 0.279599C6.4713 -0.0860303 7.04786 -0.0930608 7.40645 0.258502Z' fill='black' />
          </svg>
          <svg xmlns='http://www.w3.org/2000/svg' width='18' height='14' viewBox='0 0 21 14' fill='none'>
            <path d='M12.9823 0.258502C12.6237 0.610064 12.6237 1.19366 12.9752 1.55225L17.2502 5.83428H0.979907C0.480688 5.83428 0.072876 6.24209 0.072876 6.74834C0.072876 7.2546 0.480688 7.66241 0.979907 7.66241H17.2432L12.9682 11.9444C12.6166 12.303 12.6237 12.8796 12.9752 13.2382C13.3338 13.5898 13.9033 13.5898 14.2619 13.2312L20.0557 7.39522C20.133 7.31085 20.1963 7.21944 20.2455 7.10694C20.2948 6.99444 20.3158 6.87491 20.3158 6.75538C20.3158 6.51632 20.2244 6.29132 20.0557 6.11554L14.2619 0.279599C13.9174 -0.0860303 13.3408 -0.0930608 12.9823 0.258502Z' fill='black' />
          </svg>
        </div>
      </div>
      <div className='flex gap-10'>
        {songs.map((songs, i) => (
          <SongCard key={i} songname={songs.title} albumArt={songs.albumArt} artist={songs.artist} setAlbumArt={props.setAlbumArt} setTitle={props.setTitle} setArtist={props.setartist} />
        ))}
      </div>
    </div>
  );
};

export default TopMusic;
