const SongCard = (props) => {
  return (
    <div className='text-black'>
      <img src={props.albumArt} alt='' className='h-60 w-60' />
      <p className='font-xl font-bold'>{props.songname}</p>
      <p>{props.artist}</p>
    </div>
  );
};

export default SongCard;
