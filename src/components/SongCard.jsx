const SongCard = (props) => {
  return (
    <div className=''>
      <img src={props.albumArt} alt='' className='h-[300px] w-[300px] rounded-[12px] hover:shadow-xl hover:cursor-pointer' />
      <div className='mt-3'>
        <p className='font-xl font-bold'>{props.songname}</p>
        <p>{props.artist}</p>
      </div>
    </div>
  );
};

export default SongCard;
