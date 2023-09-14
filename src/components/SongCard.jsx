const SongCard = (props) => {
  return (
    <div className='text-black'>
      <img src={props.albumArt} alt='' className='h-[320px] w-[320px] rounded-[12px]' />
      <p className='font-xl font-bold'>{props.songname}</p>
      <p>{props.artist}</p>
    </div>
  );
};

export default SongCard;
