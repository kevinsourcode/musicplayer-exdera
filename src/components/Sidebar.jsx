import { FiHome, FiRadio, FiHeart, FiMic, FiCalendar, FiLayers } from "react-icons/fi";

const Sidebar = () => {
  return (
    <div className=' border p-8 bg-white rounded-xl h-[700px]'>
      <div className='flex flex-col relative items-center -mt-12 mb-[40px]'>
        <img src='src/assets/proPic.png' className='' />
        <div className='-mt-8 flex flex-col items-center'>
          <h4 className='font-bold text-[18px]'>Ankur Tripathi</h4>
          <p className='text-main-accent text-[15px]'>tripathiankur913@gmail.com</p>
        </div>
      </div>
      <div className='mb-8 w-full'>
        <h3 className='text-2xl font-bold mb-[30px]'>Browse</h3>
        <ul className='flex flex-col gap-[33px] '>
          <li className='flex items-center gap-2 font-bold'>
            <FiHome />
            Home
          </li>
          <li className='flex items-center gap-2'>
            <FiLayers />
            Playlist
          </li>
          <li className='flex items-center gap-2'>
            <FiHome />
            Home
          </li>
          <li className='flex items-center gap-2'>
            <FiHome />
            Home
          </li>
        </ul>
      </div>
      <div>
        <h3 className='text-2xl font-bold mb-[30px]'>Discover</h3>
        <ul className='flex flex-col gap-[33px]'>
          <li className='flex items-center gap-2'>
            <FiRadio />
            Radio
          </li>
          <li className='flex items-center gap-2'>
            <FiCalendar />
            Event
          </li>
          <li className='flex items-center gap-2'>
            <FiMic />
            Podcast
          </li>
          <li className='flex items-center gap-2'>
            <FiHeart />
            For You
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
