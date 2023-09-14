/* eslint-disable react/prop-types */
const Albums = (props) => {
  return (
    <div className='flex flex-col gap-[25px]'>
      <img src={props.albumArt} className='w-[237px] h-[162px] mt-[33px]' />
      <p className='text-xl'>{props.title}</p>
    </div>
  );
};

export default Albums;