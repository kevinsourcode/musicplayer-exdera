/* eslint-disable react/prop-types */

//component to show the recommended albums and its metadata

const Albums = (props) => {
  //mapping JSON data
  return (
    <div className='flex flex-col gap-[25px]'>
      <img src={props.albumArt} className='w-[210px] h-[162px] mt-[33px]' />
      <p className='text-xl font-bold'>{props.title}</p>
    </div>
  );
};

export default Albums;
