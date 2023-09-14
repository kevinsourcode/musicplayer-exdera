const PopularSongDetail = (props) => {
  return (
    <div className='flex gap-2 items-center justify-between hover:border hover:border-gray-400 hover:rounded-l-full hover:rounded-r-full'>
      <div className='flex items-center gap-2'>
        <img src='' alt='' className='w-2 h-2 bg-black' />
        <img className='w-14 h-14 rounded-full' src={props.albumArt} />
        <div>
          <h5>{props.title}</h5>
          <p>{props.artist}</p>
        </div>
      </div>
      <div className='flex items-center gap-2'>
        <p>{props.duration}</p>
        <svg xmlns='http://www.w3.org/2000/svg' width='20' height='19' viewBox='0 0 20 19' fill='none'>
          <g opacity='0.4'>
            <path d='M17.3025 2.31086C15.5555 0.563047 12.7222 0.563047 10.9752 2.31086L10.1131 3.17293L9.25105 2.31086C7.50382 0.563627 4.671 0.563626 2.92377 2.31086C1.17653 4.05809 1.17653 6.89091 2.92377 8.63814L3.78584 9.50022L10.1131 15.8275L16.4404 9.50022L17.3025 8.63814C19.0503 6.89115 19.0503 4.05785 17.3025 2.31086Z' stroke='black' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' />
            <path d='M13.7624 10.8528C15.5207 10.8723 15.9313 12.4892 14.9611 13.8121C13.991 15.1349 11.6979 17.281 11.6979 17.281' stroke='#5E77FB' stroke-width='2' stroke-linecap='round' />
          </g>
        </svg>
      </div>
    </div>
  );
};

export default PopularSongDetail;
