import SongCard from "./SongCard";

const TopMusic = () => {
  return (
    <div className='flex flex-col flex-wrap'>
      <div className='flex justify-between w-full items-center'>
        <h2 className='font-bold text-3xl text-black'>Top Music</h2>
        <div>- +</div>
      </div>
      <div className='flex'>
        {[1, 2, 3, 4].map((song, i) => (
          <SongCard key={song.key} song={song} i={i} />
        ))}
      </div>
    </div>
  );
};

export default TopMusic;
