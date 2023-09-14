//displaying the songs and its metadata beautifully

const SongCard = (props) => {
  const changeInfo = () => {
    props.setTitle(props.songname);
    props.setArtist(props.artist);
    props.setAlbumArt(props.albumArt);
  };

  return (
    <div className='' onClick={changeInfo}>
      <img src={props.albumArt} alt='' className='h-[300px] w-[300px] rounded-[12px] hover:shadow-xl hover:cursor-pointer' />
      <div className='mt-3'>
        <p className='text-lg font-bold'>{props.songname}</p>
        <p className='text-base'>{props.artist}</p>
      </div>
    </div>
  );
};

export default SongCard;
